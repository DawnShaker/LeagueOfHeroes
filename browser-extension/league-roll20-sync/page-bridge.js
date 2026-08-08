(function () {
  const ALLOWED_ATTRIBUTE = /^(hp|inspiration|experience|deathsave_(fail|succ)[123]|lvl[1-9]_slots_(total|expended)|class_resource|other_resource|cp|sp|ep|gp|pp)$/;

  function collectionModels(collection) { return Array.isArray(collection?.models) ? collection.models : []; }
  function getValue(model, key) { return typeof model?.get === 'function' ? model.get(key) : model?.[key]; }
  function modelId(model) { return String(model?.id || getValue(model, 'id') || getValue(model, '_id') || ''); }
  function getCharacters() {
    const windows = [window];
    try {
      if (window.parent && window.parent !== window) windows.push(window.parent);
      if (window.top && !windows.includes(window.top)) windows.push(window.top);
    } catch (_error) {
      // Roll20 may isolate a frame; the local window is still worth checking.
    }
    for (const host of windows) {
      try {
        const characters = host.Campaign?.characters || host.d20?.Campaign?.characters;
        if (characters) return characters;
      } catch (_error) {
        // Ignore inaccessible cross-origin frames.
      }
    }
    return null;
  }

  function openSheetName() {
    const inputs = [...document.querySelectorAll('input[name="attr_character_name"], input[name="character_name"]')];
    const visible = inputs.find((element) => element.offsetParent !== null);
    return String(visible?.value || '').trim();
  }

  function resolveOpenCharacter() {
    const characters = getCharacters();
    if (!characters) throw new Error('Коллекция персонажей Roll20 не найдена. Откройте игру как мастер или владелец листа.');
    const name = openSheetName();
    if (name) {
      const byName = collectionModels(characters).find((item) => String(getValue(item, 'name') || '').trim() === name);
      if (byName) return byName;
    }
    const visibleDialog = [...document.querySelectorAll('.ui-dialog, [data-characterid], [data-character-id]')]
      .find((element) => element.offsetParent !== null && element.querySelector('.charsheet, input[name="attr_character_name"]'));
    const candidates = [visibleDialog?.dataset?.characterid, visibleDialog?.dataset?.characterId, visibleDialog?.id, location.hash, location.pathname].filter(Boolean).join(' ');
    const idMatch = candidates.match(/(-[A-Za-z0-9_-]{12,})/);
    if (idMatch && typeof characters.get === 'function') {
      const byId = characters.get(idMatch[1]);
      if (byId) return byId;
    }
    throw new Error('Не удалось определить открытый чарник. Откройте только один лист персонажа и повторите попытку.');
  }

  function attributeCollection(character) {
    return character?.attribs || getValue(character, 'attribs') || character?.attributes || null;
  }
  function abilityCollection(character) {
    return character?.abilities || getValue(character, 'abilities') || null;
  }
  function saveModel(model, values) {
    return new Promise((resolve, reject) => {
      if (!model || typeof model.save !== 'function') return resolve();
      model.save(values, {
        success: resolve,
        error: (_model, error) => reject(new Error(error?.statusText || 'Roll20 не сохранил значение'))
      });
    });
  }

  function createModel(collection, values) {
    return new Promise((resolve, reject) => {
      if (!collection || typeof collection.create !== 'function') return resolve(null);
      collection.create(values, {
        wait: true,
        success: resolve,
        error: (_model, error) => reject(new Error(error?.statusText || 'Roll20 не создал значение'))
      });
    });
  }

  async function upsertCollection(collection, rows, characterId) {
    if (!collection || !Array.isArray(rows)) return;
    const existing = new Map(collectionModels(collection).map((model) => [String(getValue(model, 'name') || ''), model]));
    for (const row of rows) {
      const name = String(row?.name || '').trim();
      if (!name) continue;
      const values = { name, current: String(row.current ?? ''), max: String(row.max ?? '') };
      const model = existing.get(name);
      if (model) {
        await saveModel(model, values);
      } else if (typeof collection.create === 'function') {
        const created = await createModel(collection, { ...values, characterid: characterId, _characterid: characterId });
        if (created) existing.set(name, created);
      } else if (typeof collection.add === 'function') {
        collection.add({ ...values, characterid: characterId, _characterid: characterId });
      }
    }
  }

  function overlayPlayState(rows, playState) {
    const overlay = playState?.roll20_attributes;
    if (!overlay || typeof overlay !== 'object') return rows;
    return rows.map((row) => overlay[row.name] ? { ...row, ...overlay[row.name] } : row);
  }

  async function importCharacter(payload) {
    const target = resolveOpenCharacter();
    const source = payload?.roll20Data?.character;
    if (!source || !Array.isArray(source.attribs)) throw new Error('В Лиге ещё нет готового JSON Roll20 для этого героя. Сохраните изменения в конструкторе.');
    const id = modelId(target);
    if (source.name) await saveModel(target, { name: source.name });
    await upsertCollection(attributeCollection(target), overlayPlayState(source.attribs, payload.playState), id);
    if (Array.isArray(source.abilities)) await upsertCollection(abilityCollection(target), source.abilities, id);
    return { roll20CharacterId: id, name: source.name || getValue(target, 'name') };
  }

  function exportPlayState() {
    const target = resolveOpenCharacter();
    const attributes = {};
    collectionModels(attributeCollection(target)).forEach((model) => {
      const name = String(getValue(model, 'name') || '');
      if (!ALLOWED_ATTRIBUTE.test(name)) return;
      attributes[name] = {
        current: String(getValue(model, 'current') ?? ''),
        max: String(getValue(model, 'max') ?? '')
      };
    });
    return { roll20CharacterId: modelId(target), attributes };
  }

  window.addEventListener('message', async (event) => {
    if (event.source !== window || event.data?.source !== 'LOH_ROLL20_CONTENT') return;
    const { id, type, payload } = event.data;
    try {
      const result = type === 'IMPORT_CHARACTER'
        ? await importCharacter(payload)
        : type === 'EXPORT_PLAY_STATE'
          ? exportPlayState()
          : null;
      if (!result) throw new Error('Неизвестная команда расширения.');
      window.postMessage({ source: 'LOH_ROLL20_BRIDGE', id, ok: true, result }, '*');
    } catch (error) {
      window.postMessage({ source: 'LOH_ROLL20_BRIDGE', id, ok: false, error: error?.message || String(error) }, '*');
    }
  });
})();
