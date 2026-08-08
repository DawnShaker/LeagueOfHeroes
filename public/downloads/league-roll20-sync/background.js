// Character overwrite flow is adapted from VTT Enhancement Suite (GPL-3.0):
// https://github.com/justas-d/roll20-enhancement-suite
const CONFIG_KEYS = ['supabaseUrl', 'supabaseAnonKey', 'syncToken'];
const DEVELOPMENT_CABINET_URL = 'https://leagueofheroes-lxz0--4321--87cf54cd.local-corp.webcontainer.io/test/cabinet/player/';

async function runRoll20Command(command, payload, targetHint) {
  try {
    const campaign = window.Campaign || window.d20?.Campaign;
    const characters = campaign?.characters;
    if (!characters) throw new Error('Roll20 ещё не загрузил коллекцию персонажей. Дождитесь полной загрузки игровой комнаты.');

    const models = Array.isArray(characters.models) ? characters.models : [];
    const get = (model, key) => typeof model?.get === 'function' ? model.get(key) : model?.attributes?.[key] ?? model?.[key];
    const modelId = (model) => String(model?.id || get(model, 'id') || get(model, '_id') || '');
    const isVisible = (element) => Boolean(element && element.getClientRects?.().length && getComputedStyle(element).visibility !== 'hidden');

    function findOpenCharacter() {
      const hintedId = String(targetHint?.characterId || '').trim();
      if (hintedId && typeof characters.get === 'function') {
        const hinted = characters.get(hintedId);
        if (hinted) return hinted;
      }

      const urlIds = String(targetHint?.frameUrl || '').match(/-[A-Za-z0-9_-]{12,}/g) || [];
      for (const id of urlIds) {
        const fromUrl = typeof characters.get === 'function' ? characters.get(id) : null;
        if (fromUrl) return fromUrl;
      }

      const dataNodes = [...document.querySelectorAll('[data-characterid], [data-character-id]')].filter(isVisible);
      for (const node of dataNodes) {
        const id = node.getAttribute('data-characterid') || node.getAttribute('data-character-id');
        const fromNode = id && typeof characters.get === 'function' ? characters.get(id) : null;
        if (fromNode) return fromNode;
      }

      const visibleView = models.find((model) => {
        const element = model?.view?.el || model?.view?.$el?.[0];
        return isVisible(element);
      });
      if (visibleView) return visibleView;

      const hintedName = String(targetHint?.characterName || '').trim();
      if (hintedName) {
        const named = models.filter((model) => String(get(model, 'name') || '').trim() === hintedName);
        if (named.length === 1) return named[0];
      }
      throw new Error('Не удалось определить открытый чарник. Оставьте открытым один лист персонажа и повторите загрузку.');
    }

    const target = findOpenCharacter();
    const targetId = modelId(target);
    const attributes = target.attribs || get(target, 'attribs');
    const abilities = target.abilities || get(target, 'abilities');

    const engine = window.d20?.engine;
    const pageId = String(engine?.currentPage?.id || get(campaign, 'playerpageid') || get(campaign, 'initiativepage') || '');
    const activePage = engine?.currentPage || campaign?.pages?.get?.(pageId) || window.d20?.Campaign?.activePage?.();
    const graphics = activePage?.thegraphics || get(activePage, 'thegraphics') || get(activePage, 'graphics');
    const selectedCanvasObjects = () => {
      try {
        const selected = typeof engine?.selected === 'function' ? engine.selected() : engine?.canvas?.getActiveObjects?.();
        return Array.isArray(selected) ? selected : selected ? [selected] : [];
      } catch (_error) { return []; }
    };
    const tokenModel = (entry) => entry?.model || entry?._model || entry;
    const selectedTokenModels = () => selectedCanvasObjects().map(tokenModel).filter((model) => {
      const subtype = String(get(model, 'subtype') || get(model, 'type') || 'token');
      return subtype === 'token' || subtype === 'graphic';
    });
    const allTokenModels = () => (graphics?.models || activePage?.graphics?.models || []).filter(Boolean);
    const saveModel = (model, values) => new Promise((resolve, reject) => {
      if (!model?.save) { Object.entries(values).forEach(([key, value]) => model?.set?.(key, value)); return resolve(model); }
      let settled = false;
      const done = (fn) => (...args) => { if (!settled) { settled = true; fn(...args); } };
      const timer = setTimeout(done(resolve), 2500);
      model.save(values, {
        success: done(() => { clearTimeout(timer); resolve(model); }),
        error: done((_model, error) => { clearTimeout(timer); reject(new Error(error?.statusText || 'Roll20 не сохранил объект.')); })
      });
    });
    const layerLabels = { objects: 'Объекты и токены', map: 'Карта', gmlayer: 'Слой мастера', walls: 'Динамическое освещение' };
    const findTokenForCharacter = () => selectedTokenModels()[0] || allTokenModels().find((model) => String(get(model, 'represents') || '') === targetId);
    const gridPixels = () => {
      const snapping = Number.parseFloat(get(activePage, 'snapping_increment'));
      return 70 * (Number.isFinite(snapping) && snapping > 0 ? snapping : 1);
    };
    const focusToken = (model) => {
      if (!model) return false;
      const canvasObject = model?.view?.graphic || model?.view?.model || selectedCanvasObjects().find((entry) => tokenModel(entry) === model);
      try {
        if (canvasObject && engine?.canvas?.setActiveObject) { engine.canvas.discardActiveObject?.(); engine.canvas.setActiveObject(canvasObject); engine.canvas.requestRenderAll?.(); }
        const left = Number(get(model, 'left')); const top = Number(get(model, 'top'));
        if (Number.isFinite(left) && Number.isFinite(top)) {
          if (typeof engine?.panTo === 'function') engine.panTo(left, top);
          else if (typeof engine?.centerOnPoint === 'function') engine.centerOnPoint(left, top);
        }
      } catch (_error) { return false; }
      return true;
    };

    const TOKEN_PROPS = [
      'imgsrc', 'name', 'showname', 'tint_color', 'width', 'height', 'rotation', 'fliph', 'flipv', 'layer', 'represents',
      'bar1_link', 'bar1_value', 'bar1_max', 'bar2_link', 'bar2_value', 'bar2_max', 'bar3_link', 'bar3_value', 'bar3_max',
      'aura1_radius', 'aura1_color', 'aura1_square', 'aura2_radius', 'aura2_color', 'aura2_square',
      'showplayers_name', 'playersedit_name', 'showplayers_bar1', 'playersedit_bar1', 'bar1_num_permission',
      'showplayers_bar2', 'playersedit_bar2', 'bar2_num_permission', 'showplayers_bar3', 'playersedit_bar3', 'bar3_num_permission',
      'showplayers_aura1', 'playersedit_aura1', 'showplayers_aura2', 'playersedit_aura2', 'bar_location', 'compact_bar',
      'has_bright_light_vision', 'has_low_light_vision', 'light_sensitivity_multiplier', 'has_night_vision',
      'night_vision_distance', 'night_vision_effect', 'night_vision_tint', 'has_limit_field_of_vision',
      'limit_field_of_vision_total', 'limit_field_of_vision_center', 'has_limit_field_of_night_vision',
      'limit_field_of_night_vision_total', 'limit_field_of_night_vision_center', 'emits_bright_light',
      'bright_light_distance', 'emits_low_light', 'low_light_distance', 'dim_light_opacity',
      'has_directional_bright_light', 'directional_bright_light_total', 'directional_bright_light_center',
      'has_directional_dim_light', 'directional_dim_light_total', 'directional_dim_light_center', 'lightColor',
      'light_radius', 'light_dimradius', 'light_angle', 'light_otherplayers', 'light_hassight', 'light_losangle',
      'light_multiplier', 'adv_fow_view_distance'
    ];
    const readTokenSettings = (source = {}) => {
      const settings = {};
      TOKEN_PROPS.forEach((key) => { const value = typeof source?.get === 'function' ? source.get(key) : source?.[key]; if (value !== undefined && value !== null) settings[key] = value; });
      if (String(settings.night_vision_effect || '').startsWith('Dimming_')) {
        const ratio = Number.parseFloat(String(settings.night_vision_effect).split('_')[1]);
        settings.night_vision_effect = 'Dimming';
        settings.vttes_dimming_start = Math.round((Number(settings.night_vision_distance) || 0) * (Number.isFinite(ratio) ? ratio : 0));
      }
      settings.light_ui = Math.max(0, (Number(settings.low_light_distance) || 0) - (Number(settings.bright_light_distance) || 0));
      return settings;
    };
    const normalizeTokenSettings = (input = {}) => {
      const settings = {};
      TOKEN_PROPS.forEach((key) => { if (Object.prototype.hasOwnProperty.call(input, key)) settings[key] = input[key]; });
      settings.name = String(settings.name || get(target, 'name') || 'Безымянный герой');
      settings.represents = targetId;
      settings.layer = ['objects', 'map', 'gmlayer', 'walls'].includes(settings.layer) ? settings.layer : 'objects';
      const dimStart = Number(input.vttes_dimming_start);
      if (settings.night_vision_effect === 'Dimming') {
        const distance = Number(settings.night_vision_distance) || 0;
        settings.night_vision_effect = `Dimming_${distance > 0 ? Math.max(0, Math.min(1, dimStart / distance)) : 0}`;
      }
      const bright = Number(settings.bright_light_distance) || 0;
      const dim = Number(input.light_ui) || 0;
      settings.low_light_distance = bright + dim;
      settings.emits_low_light = dim > 0;
      for (let bar = 1; bar <= 3; bar += 1) {
        const link = String(settings[`bar${bar}_link`] || '');
        const attribute = (attributes?.models || []).find((row) => modelId(row) === link);
        if (attribute) {
          settings[`bar${bar}_value`] = get(attribute, 'current') ?? '';
          settings[`bar${bar}_max`] = get(attribute, 'max') ?? '';
        }
      }
      return settings;
    };
    const loadDefaultToken = async () => {
      if (typeof target._getLatestBlob === 'function') await new Promise((resolve) => {
        let finished = false; const done = () => { if (!finished) { finished = true; resolve(); } };
        try { target._getLatestBlob('defaulttoken', done); setTimeout(done, 2200); } catch (_error) { done(); }
      });
      const raw = target._blobcache?.defaulttoken;
      if (!raw) return null;
      try { return typeof raw === 'string' ? JSON.parse(raw) : raw; } catch (_error) { return null; }
    };
    const tokenAttributeOptions = () => (attributes?.models || []).map((row) => ({ id: modelId(row), name: String(get(row, 'name') || ''), current: get(row, 'current') ?? '', max: get(row, 'max') ?? '' })).filter((row) => row.id && row.name).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    const createOrUpdateToken = async (input, existingToken = null) => {
      const values = normalizeTokenSettings(input);
      if (values.imgsrc && values.imgsrc !== get(target, 'avatar')) await saveModel(target, { avatar: values.imgsrc });
      let token = existingToken;
      if (token) await saveModel(token, values);
      else {
        const creator = graphics?.create || activePage?.graphics?.create;
        if (typeof creator !== 'function') throw new Error('Roll20 не предоставил коллекцию токенов. Откройте игровую страницу и повторите действие.');
        token = creator.call(graphics || activePage.graphics, { ...values, subtype: 'token', pageid: pageId, left: gridPixels() * 5, top: gridPixels() * 5, isdrawing: false });
      }
      return { token, values };
    };

    if (command === 'INSPECT_TOKEN') {
      const token = findTokenForCharacter();
      const defaultToken = token ? null : await loadDefaultToken();
      const fallback = { name: get(target, 'name') || 'Безымянный герой', imgsrc: get(target, 'avatar') || '', width: gridPixels(), height: gridPixels(), layer: 'objects', represents: targetId, bar_location: 'above', compact_bar: 'standard', light_sensitivity_multiplier: 100 };
      const settings = { ...fallback, ...readTokenSettings(token || defaultToken || {}) };
      return { ok: true, result: { id: token ? modelId(token) : '', settings, attributes: tokenAttributeOptions(), sourceLabel: token ? 'Выбранный или связанный токен' : defaultToken ? 'Токен персонажа по умолчанию' : 'Новый токен из чарника', layerLabel: layerLabels[settings.layer] || settings.layer || 'Объекты и токены' } };
    }

    if (command === 'RECONNECT_TOKEN') {
      const tokens = selectedTokenModels();
      if (!tokens.length) throw new Error('Сначала выделите один или несколько токенов на столе.');
      await Promise.all(tokens.map((token) => saveModel(token, { represents: targetId })));
      return { ok: true, result: { count: tokens.length } };
    }

    if (command === 'UPSERT_TOKEN') {
      const existing = selectedTokenModels()[0] || allTokenModels().find((model) => String(get(model, 'represents') || '') === targetId);
      const { token, values } = await createOrUpdateToken(payload?.settings || {}, existing);
      focusToken(token);
      return { ok: true, result: { id: modelId(token), name: values.name, represents: targetId, layer: values.layer } };
    }

    if (command === 'UPDATE_ALL_TOKENS') {
      const values = normalizeTokenSettings(payload?.settings || {});
      const pages = campaign?.pages?.models || [];
      const tokens = [];
      pages.forEach((page) => {
        const pageGraphics = page?.thegraphics || get(page, 'thegraphics') || get(page, 'graphics');
        (pageGraphics?.models || []).forEach((token) => { if (String(get(token, 'represents') || '') === targetId) tokens.push(token); });
      });
      if (!tokens.length) allTokenModels().forEach((token) => { if (String(get(token, 'represents') || '') === targetId) tokens.push(token); });
      if (!tokens.length) throw new Error('На загруженных страницах нет токенов этого персонажа.');
      await Promise.all(tokens.map((token) => saveModel(token, values)));
      return { ok: true, result: { count: tokens.length } };
    }

    if (command === 'UPDATE_DEFAULT_TOKEN') {
      const values = normalizeTokenSettings(payload?.settings || {});
      const defaultToken = { ...values, subtype: 'token' };
      for (let bar = 1; bar <= 3; bar += 1) {
        if (defaultToken[`bar${bar}_link`]) { delete defaultToken[`bar${bar}_value`]; delete defaultToken[`bar${bar}_max`]; }
      }
      if (typeof target.updateBlobs !== 'function') throw new Error('Roll20 не разрешил обновить токен персонажа по умолчанию.');
      target.updateBlobs({ defaulttoken: JSON.stringify(defaultToken) });
      await saveModel(target, { defaulttoken: Date.now() });
      return { ok: true, result: { name: values.name } };
    }

    if (command === 'EXPORT_CHARACTER') {
      // VTTES waits for Roll20's blob cache before serializing the character.
      // Fetch all three blobs explicitly because a hand-created character may not
      // have opened its Biography tab during the current Roll20 session.
      const blobNames = ['bio', 'gmnotes', 'defaulttoken'];
      const blobLoads = blobNames.map((blobName) => new Promise((resolve) => {
        if (typeof target._getLatestBlob !== 'function') return resolve(null);
        let finished = false;
        const finish = () => {
          if (finished) return;
          finished = true;
          resolve(null);
        };
        try {
          target._getLatestBlob(blobName, finish);
          setTimeout(finish, 3000);
        } catch (_error) {
          finish();
        }
      }));
      await Promise.race([
        Promise.all(blobLoads),
        new Promise((resolve) => setTimeout(resolve, 3500))
      ]);

      const attributeRows = (attributes?.models || []).map((model) => ({
        name: get(model, 'name') ?? '',
        current: get(model, 'current') ?? '',
        max: get(model, 'max') ?? '',
        id: modelId(model)
      }));
      const abilityRows = (abilities?.models || []).map((model) => ({
        name: get(model, 'name') ?? '',
        description: get(model, 'description') ?? '',
        istokenaction: get(model, 'istokenaction') ?? false,
        action: get(model, 'action') ?? '',
        order: get(model, 'order') ?? ''
      }));
      const roll20Data = {
        schema_version: 3,
        type: 'character',
        character: {
          oldId: targetId,
          name: String(get(target, 'name') || 'Безымянный герой'),
          avatar: get(target, 'avatar') || '',
          bio: target._blobcache?.bio || '',
          gmnotes: target._blobcache?.gmnotes || '',
          defaulttoken: target._blobcache?.defaulttoken || '',
          tags: get(target, 'tags') || '',
          controlledby: get(target, 'controlledby') || '',
          inplayerjournals: get(target, 'inplayerjournals') || '',
          attribs: attributeRows,
          abilities: abilityRows
        }
      };
      return {
        ok: true,
        result: {
          roll20CharacterId: targetId,
          name: roll20Data.character.name,
          roll20Data
        }
      };
    }

    if (command === 'EXPORT_PLAY_STATE') {
      const allowed = /^(hp|inspiration|experience|deathsave_(fail|succ)[123]|lvl[1-9]_slots_(total|expended)|class_resource|other_resource|cp|sp|ep|gp|pp)$/;
      const exported = {};
      for (const model of attributes?.models || []) {
        const name = String(get(model, 'name') || '');
        if (!allowed.test(name)) continue;
        exported[name] = {
          current: String(get(model, 'current') ?? ''),
          max: String(get(model, 'max') ?? '')
        };
      }
      return { ok: true, result: { roll20CharacterId: targetId, attributes: exported } };
    }

    if (command !== 'IMPORT_CHARACTER') throw new Error('Неизвестная команда расширения.');
    let data = payload?.roll20Data;
    if (data?.schema_version === 3 && data?.type === 'character') data = data.character;
    else if (data?.character) data = data.character;
    if (!data || !Array.isArray(data.attribs) || !Array.isArray(data.abilities)) {
      throw new Error('В Лиге нет корректного VTTES JSON этого героя. Пересохраните персонажа в конструкторе.');
    }

    data = JSON.parse(JSON.stringify(data));
    const overlay = payload?.playState?.roll20_attributes;
    if (overlay && typeof overlay === 'object') {
      data.attribs = data.attribs.map((row) => overlay[row.name] ? { ...row, ...overlay[row.name] } : row);
    }

    // VTTES replaces references to the exported character ID before creating attributes.
    if (data.oldId) {
      const escaped = String(data.oldId).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      data = JSON.parse(JSON.stringify(data).replace(new RegExp(escaped, 'g'), targetId));
    }

    // Exact VTTES overwrite strategy: remove the old Backbone models, then recreate them silently.
    function wipe(storage) {
      while (storage?.models?.length) {
        const model = storage.models[storage.models.length - 1];
        if (!model || typeof model.destroy !== 'function') break;
        model.destroy();
      }
    }
    wipe(abilities);
    wipe(attributes);

    if (typeof target.updateBlobs === 'function') {
      const blobs = { bio: data.bio || null };
      if (data.gmnotes != null) blobs.gmnotes = data.gmnotes || null;
      if (data.defaulttoken != null) blobs.defaulttoken = data.defaulttoken || null;
      target.updateBlobs(blobs);
    }

    const save = {
      name: data.name || get(target, 'name') || '',
      avatar: data.avatar || '',
      attrorder: '',
      abilorder: '',
      mancerdata: '',
      mancerget: '',
      mancerstep: ''
    };
    if (data.tags != null) save.tags = data.tags;
    if (data.controlledby != null) save.controlledby = data.controlledby;
    if (data.inplayerjournals != null) save.inplayerjournals = data.inplayerjournals;
    if (data.defaulttoken) save.defaulttoken = Date.now();

    await new Promise((resolve, reject) => {
      let settled = false;
      const finish = (fn) => (...args) => { if (!settled) { settled = true; fn(...args); } };
      const timer = setTimeout(finish(resolve), 5000);
      target.save(save, {
        success: finish(() => { clearTimeout(timer); resolve(); }),
        error: finish((_model, error) => { clearTimeout(timer); reject(new Error(error?.statusText || 'Roll20 не сохранил персонажа.')); })
      });
    });

    for (const row of data.attribs) attributes.create(row, { silent: true });
    for (const row of data.abilities) abilities.create(row, { silent: true });

    try {
      target.view?.$el?.dialog('close');
      setTimeout(() => target.view?.showDialog?.(), 500);
    } catch (_error) {
      // Character data is already saved; reopening is only a visual refresh.
    }

    return { ok: true, result: { roll20CharacterId: targetId, name: data.name || get(target, 'name') } };
  } catch (error) {
    return { ok: false, error: error?.message || String(error) };
  }
}

function normalizeUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '');
}

async function rpc(name, parameters) {
  const config = await chrome.storage.local.get(CONFIG_KEYS);
  const url = normalizeUrl(config.supabaseUrl);
  const anonKey = String(config.supabaseAnonKey || '').trim();
  const syncToken = String(config.syncToken || '').trim();
  if (!url || !anonKey || !syncToken) {
    throw new Error('Откройте настройки расширения и заполните Supabase URL, anon key и ключ синхронизации.');
  }
  const response = await fetch(`${url}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sync_token: syncToken, ...parameters })
  });
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = text; }
  if (!response.ok) throw new Error(data?.message || data?.hint || `Supabase вернул ${response.status}`);
  return data;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'LOH_STORE_CONNECTION') {
    const config = message.config || {};
    const supabaseUrl = normalizeUrl(config.supabaseUrl);
    const supabaseAnonKey = String(config.supabaseAnonKey || '').trim();
    const syncToken = String(config.syncToken || '').trim();
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(supabaseUrl) || !supabaseAnonKey || !syncToken.startsWith('loh_')) {
      sendResponse({ ok: false, error: 'Сайт передал неполные параметры подключения.' });
      return;
    }
    let leagueCabinetUrl = '';
    try {
      const sourceUrl = new URL(sender.tab?.url || sender.url || '');
      leagueCabinetUrl = `${sourceUrl.origin}/test/cabinet/player/`;
    } catch (_) {
      leagueCabinetUrl = DEVELOPMENT_CABINET_URL;
    }
    chrome.storage.local.set({ supabaseUrl, supabaseAnonKey, syncToken, leagueCabinetUrl })
      .then(() => sendResponse({ ok: true }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }
  if (message?.type === 'LOH_ROLL20_PAGE_REQUEST') {
    if (!sender.tab?.id) {
      sendResponse({ ok: false, error: 'Не удалось определить вкладку Roll20.' });
      return;
    }
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id, frameIds: [0] },
      world: 'MAIN',
      func: runRoll20Command,
      args: [message.command, message.payload || {}, message.targetHint || {}]
    }).then((results) => {
      const response = results?.[0]?.result;
      sendResponse(response?.ok ? response : { ok: false, error: response?.error || 'Roll20 не вернул результат.' });
    }).catch((error) => sendResponse({ ok: false, error: `Не удалось выполнить импорт в Roll20: ${error.message}` }));
    return true;
  }
  if (message?.type !== 'LOH_RPC') return;
  rpc(message.name, message.parameters || {})
    .then((data) => sendResponse({ ok: true, data }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));
  return true;
});

chrome.action.onClicked.addListener(async () => {
  const { leagueCabinetUrl } = await chrome.storage.local.get('leagueCabinetUrl');
  chrome.tabs.create({ url: leagueCabinetUrl || DEVELOPMENT_CABINET_URL });
});
