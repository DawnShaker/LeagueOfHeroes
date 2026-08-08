(function () {
  const root = document.createElement('section');
  root.id = 'loh-roll20-sync';
  root.hidden = true;
  root.innerHTML = `
    <nav class="loh-subtabs" aria-label="Инструменты League of Heroes">
      <button class="is-active" data-loh-panel="character" type="button">Персонаж</button>
      <button data-loh-panel="token" type="button">Токен</button>
    </nav>
    <section class="loh-panel is-active" data-loh-panel-content="character">
      <div class="loh-main-row">
        <strong>League of Heroes</strong>
        <select class="loh-characters" aria-label="Персонаж Лиги"><option value="">Загрузка героев…</option></select>
        <div class="loh-buttons"><button class="loh-load" type="button">Загрузить из Лиги</button><button class="loh-save" type="button">Сохранить в Лиге</button></div>
      </div>
    </section>
    <section class="loh-panel" data-loh-panel-content="token">
      <div class="loh-token-toolbar"><h3>Token Editor</h3><span class="loh-token-source">Откройте чарник и выберите токен</span></div>
      <div class="loh-token-layout">
        <div class="loh-token-column">
          <article class="loh-card loh-token-identity">
            <div class="loh-token-preview"><img class="loh-token-preview-image" alt="Предпросмотр токена"><span>Нет изображения</span></div>
            <div class="loh-token-fields">
              <label>Имя токена<input data-token-prop="name" type="text"></label>
              <label class="loh-check"><input data-token-prop="showname" type="checkbox"> Показывать табличку с именем</label>
              <label>URL изображения<input data-token-prop="imgsrc" type="url" placeholder="https://…"></label>
              <div class="loh-buttons loh-wrap"><button class="loh-token-use-url" type="button">Установить URL</button><button class="loh-token-remove-image" type="button">Удалить изображение</button></div>
              <label>Оттенок<input data-token-prop="tint_color" type="color" value="#ffffff"></label>
              <div class="loh-token-quad">
                <label>Ширина, px<input data-token-prop="width" type="number" min="1" step="1"></label>
                <label>Высота, px<input data-token-prop="height" type="number" min="1" step="1"></label>
                <label>Поворот, °<input data-token-prop="rotation" type="number" step="1"></label>
                <label>Слой<select data-token-prop="layer"><option value="objects">Объекты</option><option value="map">Карта</option><option value="gmlayer">Слой мастера</option><option value="walls">Освещение</option></select></label>
              </div>
              <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="fliph" type="checkbox"> Отразить по горизонтали</label><label class="loh-check"><input data-token-prop="flipv" type="checkbox"> Отразить по вертикали</label></div>
            </div>
          </article>
          <article class="loh-card">
            <h3>Обновлённое динамическое освещение</h3>
            <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="has_bright_light_vision" type="checkbox"> Яркое зрение</label><label class="loh-check"><input data-token-prop="has_low_light_vision" type="checkbox"> Сумеречное зрение</label></div>
            <label>Чувствительность к свету, %<input data-token-prop="light_sensitivity_multiplier" type="number" min="0" max="100" step="1"></label>
            <div class="loh-light-block"><label class="loh-check"><input data-token-prop="has_night_vision" type="checkbox"> Ночное зрение</label><div class="loh-token-triple"><label>Дистанция<input data-token-prop="night_vision_distance" type="number" min="0"></label><label>Эффект<select data-token-prop="night_vision_effect"><option value="">Нет</option><option value="Nocturnal">Ночной</option><option value="Dimming">Затемнение</option><option value="Sharpen">Резкость</option></select></label><label>Начало затемнения<input data-token-prop="vttes_dimming_start" type="number" min="0"></label></div><label>Оттенок ночного зрения<input data-token-prop="night_vision_tint" type="color" value="#ffffff"></label></div>
            <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="has_limit_field_of_vision" type="checkbox"> Ограничить поле зрения</label><label>Всего, °<input data-token-prop="limit_field_of_vision_total" type="number" min="0" max="360"></label><label>Центр, °<input data-token-prop="limit_field_of_vision_center" type="number"></label></div>
            <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="has_limit_field_of_night_vision" type="checkbox"> Ограничить ночное зрение</label><label>Всего, °<input data-token-prop="limit_field_of_night_vision_total" type="number" min="0" max="360"></label><label>Центр, °<input data-token-prop="limit_field_of_night_vision_center" type="number"></label></div>
            <div class="loh-light-block"><label class="loh-check"><input data-token-prop="emits_bright_light" type="checkbox"> Излучает яркий свет</label><div class="loh-token-triple"><label>Яркий свет<input data-token-prop="bright_light_distance" type="number" min="0"></label><label>Тусклый свет<input data-token-prop="light_ui" type="number" min="0"></label><label>Непрозрачность<input data-token-prop="dim_light_opacity" type="number" min="0" max="1" step="0.05"></label></div></div>
            <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="has_directional_bright_light" type="checkbox"> Направленный яркий</label><label>Всего, °<input data-token-prop="directional_bright_light_total" type="number"></label><label>Центр, °<input data-token-prop="directional_bright_light_center" type="number"></label></div>
            <div class="loh-inline-checks"><label class="loh-check"><input data-token-prop="has_directional_dim_light" type="checkbox"> Направленный тусклый</label><label>Всего, °<input data-token-prop="directional_dim_light_total" type="number"></label><label>Центр, °<input data-token-prop="directional_dim_light_center" type="number"></label></div>
            <label>Цвет света<input data-token-prop="lightColor" type="color" value="#ffffff"></label>
          </article>
        </div>
        <div class="loh-token-column">
          <article class="loh-card">
            <h3>Полосы токена</h3>
            ${[1,2,3].map((bar) => `<div class="loh-token-bar"><b>Полоса ${bar}</b><select data-token-prop="bar${bar}_link" data-token-attribute-select><option value="">Не связана</option></select><input data-token-prop="bar${bar}_value" aria-label="Текущее значение полосы ${bar}" placeholder="Значение"><span>/</span><input data-token-prop="bar${bar}_max" aria-label="Максимум полосы ${bar}" placeholder="Макс."></div>`).join('')}
            <h3>Ауры</h3>
            ${[1,2].map((aura) => `<div class="loh-token-aura"><b>Аура ${aura}</b><input data-token-prop="aura${aura}_radius" type="number" placeholder="Радиус"><input data-token-prop="aura${aura}_color" type="color" value="#ffffff"><label class="loh-check"><input data-token-prop="aura${aura}_square" type="checkbox"> Квадрат</label></div>`).join('')}
          </article>
          <article class="loh-card">
            <h3>Разрешения игроков</h3>
            <div class="loh-token-permission"><b>Имя</b><label class="loh-check"><input data-token-prop="showplayers_name" type="checkbox"> Видеть</label><label class="loh-check"><input data-token-prop="playersedit_name" type="checkbox"> Изменять</label></div>
            ${[1,2,3].map((bar) => `<div class="loh-token-permission"><b>Полоса ${bar}</b><label class="loh-check"><input data-token-prop="showplayers_bar${bar}" type="checkbox"> Видеть</label><label class="loh-check"><input data-token-prop="playersedit_bar${bar}" type="checkbox"> Изменять</label><select data-token-prop="bar${bar}_num_permission"><option value="hidden">Скрыта</option><option value="editors">Числа редакторам</option><option value="everyone">Числа всем</option></select></div>`).join('')}
            ${[1,2].map((aura) => `<div class="loh-token-permission"><b>Аура ${aura}</b><label class="loh-check"><input data-token-prop="showplayers_aura${aura}" type="checkbox"> Видеть</label><label class="loh-check"><input data-token-prop="playersedit_aura${aura}" type="checkbox"> Изменять</label></div>`).join('')}
            <div class="loh-form-row"><label>Положение полос<select data-token-prop="bar_location"><option value="above">Сверху</option><option value="overlap_top">Наложение сверху</option><option value="overlap_bottom">Наложение снизу</option><option value="below">Снизу</option></select></label><label>Тип полос<select data-token-prop="compact_bar"><option value="standard">Стандартные</option><option value="compact">Компактные</option></select></label></div>
          </article>
          <article class="loh-card">
            <h3>Устаревшее динамическое освещение</h3>
            <div class="loh-token-triple"><label>Радиус света<input data-token-prop="light_radius" type="number"></label><label>Начало тусклого<input data-token-prop="light_dimradius" type="number"></label><label>Угол, °<input data-token-prop="light_angle" type="number"></label></div>
            <label class="loh-check"><input data-token-prop="light_otherplayers" type="checkbox"> Свет виден другим игрокам</label>
            <div class="loh-token-triple"><label>Угол зрения<input data-token-prop="light_losangle" type="number"></label><label>Множитель<input data-token-prop="light_multiplier" type="number" step="0.1"></label><label>Туман войны<input data-token-prop="adv_fow_view_distance" type="number"></label></div>
            <label class="loh-check"><input data-token-prop="light_hassight" type="checkbox"> Токен обладает зрением</label>
          </article>
        </div>
      </div>
      <div class="loh-token-actions loh-buttons loh-wrap"><button class="loh-token-refresh" type="button">Обновить данные</button><button class="loh-token-update" type="button">Создать / обновить токен</button><button class="loh-token-reconnect" type="button">Переподключить Represents</button><button class="loh-token-update-all" type="button">Обновить все токены</button><button class="loh-token-default" type="button">Обновить токен по умолчанию</button></div>
      <p class="loh-token-info loh-hint">Настройки читаются из выбранного токена, связанного токена или токена персонажа по умолчанию.</p>
    </section>
    <p class="loh-status">Откройте чарник Roll20.</p>`;
  document.body.appendChild(root);

  root.classList.add('loh-extension-surface');
  root.querySelector('.loh-subtabs')?.remove();

  const extractPanel = (name, id) => {
    const panel = root.querySelector(`[data-loh-panel-content="${name}"]`);
    panel.id = id;
    panel.classList.add('loh-extension-surface', 'is-active');
    panel.hidden = true;
    panel.appendChild(root.querySelector('.loh-status').cloneNode(true));
    document.body.appendChild(panel);
    return panel;
  };
  const tokenRoot = extractPanel('token', 'loh-token-editor');
  const uiRoots = [root, tokenRoot];
  const $ = (selector) => uiRoots.map((surface) => surface.querySelector(selector)).find(Boolean) || null;
  const select = $('.loh-characters');
  const loadButton = $('.loh-load');
  const saveButton = $('.loh-save');
  const statuses = uiRoots.map((surface) => surface.querySelector('.loh-status')).filter(Boolean);
  let characters = [];
  let placementFrame = 0;
  let charactersLoaded = false;
  let activeTabBar = null;
  let sheetTabsRoot = null;
  let leagueTab = null;
  let leagueTabButton = null;
  let tokenTab = null;
  let tokenTabButton = null;
  let activeSheetSurface = null;
  let hiddenSheetNodes = new Map();

  function isVisible(element) { return Boolean(element && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden'); }
  function mountBeforeAnchor(surface, host, anchor) {
    if (!surface || !host?.isConnected || !anchor?.isConnected || !host.contains(anchor)) return false;
    let directChild = anchor;
    while (directChild.parentElement && directChild.parentElement !== host) directChild = directChild.parentElement;
    if (directChild.parentElement !== host) return false;
    if (surface.parentElement === host && surface.nextElementSibling === directChild) return true;
    try {
      if (directChild.parentNode !== host) return false;
      host.insertBefore(surface, directChild);
      return true;
    } catch (_error) {
      return false;
    }
  }
  function mountAfterAnchor(surface, host, anchor) {
    if (!surface || !host?.isConnected || !anchor?.isConnected || anchor.parentElement !== host) return false;
    const next = anchor.nextSibling;
    if (surface.parentElement === host && surface.previousSibling === anchor) return true;
    try {
      if (next?.parentNode === host) host.insertBefore(surface, next);
      else host.appendChild(surface);
      return true;
    } catch (_error) {
      return false;
    }
  }
  function setStatus(message, kind = '') { statuses.forEach((status) => { status.textContent = message; status.dataset.kind = kind; }); }
  function setBusy(value) { uiRoots.forEach((surface) => surface.querySelectorAll('button').forEach((button) => { button.disabled = value; })); }
  function escapeHtml(value) { return String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
  function selectedCharacter() { return characters.find((item) => item.id === select.value); }

  function closeLeagueTab() {
    hiddenSheetNodes.forEach((style, element) => style === null ? element.removeAttribute('style') : element.setAttribute('style', style));
    hiddenSheetNodes = new Map();
    root.hidden = true;
    tokenRoot.hidden = true;
    activeSheetSurface = null;
    leagueTab?.classList.remove('active', 'is-active');
    leagueTabButton?.setAttribute('aria-selected', 'false');
    tokenTab?.classList.remove('active', 'is-active');
    tokenTabButton?.setAttribute('aria-selected', 'false');
  }
  function openSheetSurface(surface, tab, button) {
    if (!activeTabBar?.parentElement) return;
    closeLeagueTab();
    [...activeTabBar.parentElement.children].forEach((element) => {
      // Панели расширения управляют собственной видимостью. Если спрятать
      // tokenRoot здесь, снятия атрибута hidden недостаточно: inline
      // display:none!important оставляет вкладку полностью пустой.
      if (element === activeTabBar || element === sheetTabsRoot || uiRoots.includes(element)) return;
      hiddenSheetNodes.set(element, element.getAttribute('style'));
      element.style.setProperty('display', 'none', 'important');
    });
    surface.hidden = false;
    activeSheetSurface = surface;
    tab?.classList.add('active', 'is-active');
    button?.setAttribute('aria-selected', 'true');
    if (!charactersLoaded) { charactersLoaded = true; refreshCharacters(); }
  }
  function openLeagueTab() { openSheetSurface(root, leagueTab, leagueTabButton); }
  function openTokenTab() { openSheetSurface(tokenRoot, tokenTab, tokenTabButton); refreshTokenEditor(); }
  function makeExtensionTab(label) {
    const button = document.createElement('button');
    button.className = 'loh-roll20-tab';
    button.type = 'button';
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', 'false');
    button.textContent = label;
    return button;
  }
  function mountLeagueTab(tabBar) {
    if (activeTabBar === tabBar && sheetTabsRoot?.isConnected) return true;
    closeLeagueTab();
    sheetTabsRoot?.remove();
    activeTabBar = tabBar;
    const host = tabBar.parentElement;
    if (!host) return false;
    sheetTabsRoot = document.createElement('nav');
    sheetTabsRoot.className = 'loh-sheet-tabs';
    sheetTabsRoot.setAttribute('role', 'tablist');
    sheetTabsRoot.setAttribute('aria-label', 'Инструменты League of Heroes');
    leagueTabButton = makeExtensionTab('League of Heroes');
    tokenTabButton = makeExtensionTab('Token Editor');
    leagueTab = leagueTabButton;
    tokenTab = tokenTabButton;
    sheetTabsRoot.append(leagueTabButton, tokenTabButton);
    if (!mountAfterAnchor(sheetTabsRoot, host, tabBar)) {
      sheetTabsRoot.remove();
      sheetTabsRoot = null;
      return false;
    }
    leagueTabButton.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openLeagueTab(); });
    tokenTabButton.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openTokenTab(); });
    tabBar.addEventListener('click', (event) => { const target = event.target.closest('a, button, [role="tab"]'); if (target && target !== leagueTabButton && target !== tokenTabButton) closeLeagueTab(); });
    return true;
  }
  function placeInsideOpenSheet() {
    placementFrame = 0;
    const attributesTab = [...document.querySelectorAll('a, button, [role="tab"]')].filter(isVisible).reverse().find((tab) => /атрибуты\s+и\s+способности|attributes\s*(?:&|and)\s*abilities/i.test(tab.textContent || ''));
    if (!attributesTab) { root.hidden = true; return; }
    const tabBar = attributesTab.closest('ul, .nav-tabs, [role="tablist"]') || attributesTab.parentElement?.parentElement || attributesTab.parentElement;
    if (!tabBar) { root.hidden = true; return; }
    if (!mountLeagueTab(tabBar)) return;
    const sheetHost = tabBar.parentElement;
    if (!sheetHost || !sheetTabsRoot || !mountAfterAnchor(root, sheetHost, sheetTabsRoot)) return;
    mountAfterAnchor(tokenRoot, sheetHost, root);
    if (!activeSheetSurface) { root.hidden = true; tokenRoot.hidden = true; }
  }
  function schedulePlacement() {
    if (!placementFrame) placementFrame = requestAnimationFrame(() => {
      placeInsideOpenSheet();
    });
  }
  // Roll20 постоянно меняет class/style у сотен элементов. Наблюдение за
  // каждым атрибутом перегружало Chromium и могло вызывать системное
  // предупреждение о производительности. Для появления новых окон достаточно
  // следить за структурой DOM, а открытие существующих панелей ловим кликом.
  new MutationObserver(schedulePlacement).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('click', () => setTimeout(schedulePlacement, 50), true);
  window.addEventListener('resize', schedulePlacement); schedulePlacement();
  function rpc(name, parameters = {}) {
    return new Promise((resolve, reject) => chrome.runtime.sendMessage({ type: 'LOH_RPC', name, parameters }, (response) => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      if (!response?.ok) return reject(new Error(response?.error || 'Ошибка расширения'));
      resolve(response.data);
    }));
  }
  function getRoll20TargetHint() {
    const nodes = [leagueTabButton, activeTabBar, root, ...document.querySelectorAll('[data-characterid], [data-character-id]')].filter(Boolean);
    let characterId = '';
    for (const node of nodes) { const owner = node.closest?.('[data-characterid], [data-character-id]') || node; characterId = owner?.getAttribute?.('data-characterid') || owner?.getAttribute?.('data-character-id') || ''; if (characterId) break; }
    const nameInput = [...document.querySelectorAll('input[name="attr_character_name"], input[name="character_name"]')].find((element) => element.offsetParent !== null);
    const dialogTitle = [...document.querySelectorAll('.ui-dialog-title, [role="dialog"] h1, [role="dialog"] h2')].find((element) => element.offsetParent !== null);
    return { characterId, characterName: String(nameInput?.value || dialogTitle?.textContent || '').trim(), frameUrl: location.href };
  }
  function pageRequest(command, payload = {}) {
    return new Promise((resolve, reject) => chrome.runtime.sendMessage({ type: 'LOH_ROLL20_PAGE_REQUEST', command, payload, targetHint: getRoll20TargetHint() }, (response) => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      if (!response?.ok) return reject(new Error(response?.error || 'Roll20 не ответил.'));
      resolve(response.result);
    }));
  }

  const tokenInputs = () => [...tokenRoot.querySelectorAll('[data-token-prop]')];
  function setTokenPreview(url) {
    const image = $('.loh-token-preview-image');
    if (!image) return;
    image.src = String(url || '');
    image.hidden = !url;
    image.parentElement?.classList.toggle('has-image', Boolean(url));
  }
  function populateTokenEditor(result) {
    const settings = result?.settings || {};
    tokenRoot.querySelectorAll('[data-token-attribute-select]').forEach((selectElement) => {
      const selected = String(settings[selectElement.dataset.tokenProp] || '');
      selectElement.innerHTML = '<option value="">Не связана</option>' + (result?.attributes || []).map((attribute) => `<option value="${escapeHtml(attribute.id)}">${escapeHtml(attribute.name)}</option>`).join('');
      selectElement.value = selected;
    });
    tokenInputs().forEach((input) => {
      const key = input.dataset.tokenProp;
      if (input.hasAttribute('data-token-attribute-select')) return;
      const value = settings[key];
      if (input.type === 'checkbox') input.checked = Boolean(value);
      else if (input.type === 'color') input.value = /^#[0-9a-f]{6}$/i.test(String(value || '')) ? value : '#ffffff';
      else input.value = value ?? '';
    });
    setTokenPreview(settings.imgsrc);
    $('.loh-token-source').textContent = result?.sourceLabel || 'Данные токена загружены';
    $('.loh-token-info').textContent = `${settings.name || 'Без имени'} · ${result?.layerLabel || settings.layer || 'объекты'} · Represents: ${settings.represents || 'не связан'}`;
  }
  function collectTokenSettings() {
    const settings = {};
    tokenInputs().forEach((input) => {
      const key = input.dataset.tokenProp;
      if (input.type === 'checkbox') settings[key] = input.checked;
      else if (input.type === 'number') settings[key] = input.value === '' ? '' : Number(input.value);
      else settings[key] = input.value;
    });
    return settings;
  }
  async function refreshTokenEditor() {
    if (tokenRoot.hidden) return null;
    setStatus('Читаем выбранный токен и токен персонажа…');
    try {
      const result = await pageRequest('INSPECT_TOKEN');
      populateTokenEditor(result);
      setStatus('Настройки токена загружены.', 'success');
      return result;
    } catch (error) {
      setStatus(error.message, 'error');
      return null;
    }
  }
  async function runAction(message, action, success) {
    setBusy(true); setStatus(message);
    try { const result = await action(); setStatus(typeof success === 'function' ? success(result) : success, 'success'); return result; }
    catch (error) { setStatus(error.message, 'error'); return null; }
    finally { setBusy(false); }
  }

  async function refreshCharacters() {
    try {
      characters = await rpc('extension_list_characters');
      select.innerHTML = characters.length ? characters.map((item) => `<option value="${item.id}">${escapeHtml(item.name)} · v${item.revision}</option>`).join('') : '<option value="">В Лиге пока нет героев</option>';
      setStatus(characters.length ? 'Выберите героя и откройте его чарник Roll20.' : 'Создайте персонажа в кабинете Лиги.');
    } catch (error) { select.innerHTML = '<option value="">Подключите расширение на сайте Лиги</option>'; setStatus(error.message, 'error'); }
  }
  loadButton.addEventListener('click', () => runAction('Загружаем персонажа в открытый чарник…', async () => {
    const selected = selectedCharacter(); if (!selected) throw new Error('Сначала выберите персонажа Лиги.');
    const character = await rpc('extension_get_character', { character_id: selected.id });
    const result = await pageRequest('IMPORT_CHARACTER', { roll20Data: character.roll20_data, playState: character.play_state });
    await chrome.storage.local.set({ [`binding:${result.roll20CharacterId}`]: { characterId: character.id, revision: character.revision } });
    return character;
  }, (character) => `«${character.name}» загружен. Если лист не обновился сразу, закройте и откройте его.`));

  saveButton.addEventListener('click', () => runAction('Экспортируем полный чарник Roll20 в формате VTTES…', async () => {
    const selected = selectedCharacter(); const extracted = await pageRequest('EXPORT_CHARACTER'); const storageKey = `binding:${extracted.roll20CharacterId}`;
    const binding = (await chrome.storage.local.get(storageKey))[storageKey];
    const updated = await rpc('extension_save_roll20_character', { character_id: selected?.id || null, expected_revision: selected ? (binding?.characterId === selected.id ? binding.revision : selected.revision) : null, roll20_data: extracted.roll20Data });
    await chrome.storage.local.set({ [storageKey]: { characterId: updated.id, revision: updated.revision } }); await refreshCharacters(); select.value = updated.id; return updated;
  }, (updated) => `«${updated.name}» полностью сохранён в Лиге.`));

  tokenRoot.addEventListener('input', (event) => { if (event.target?.dataset?.tokenProp === 'imgsrc') setTokenPreview(event.target.value.trim()); });
  $('.loh-token-use-url').addEventListener('click', () => setTokenPreview(tokenRoot.querySelector('[data-token-prop="imgsrc"]').value.trim()));
  $('.loh-token-remove-image').addEventListener('click', () => { tokenRoot.querySelector('[data-token-prop="imgsrc"]').value = ''; setTokenPreview(''); });
  $('.loh-token-refresh').addEventListener('click', refreshTokenEditor);
  $('.loh-token-update').addEventListener('click', () => runAction('Обновляем выбранный токен…', () => pageRequest('UPSERT_TOKEN', { settings: collectTokenSettings() }), (result) => `Токен «${result.name}» обновлён. Represents подключён.`));
  $('.loh-token-reconnect').addEventListener('click', () => runAction('Переподключаем токен к чарнику…', () => pageRequest('RECONNECT_TOKEN'), 'Связь Represents восстановлена.'));
  $('.loh-token-update-all').addEventListener('click', () => runAction('Обновляем все токены этого персонажа…', () => pageRequest('UPDATE_ALL_TOKENS', { settings: collectTokenSettings() }), (result) => `Обновлено токенов: ${result.count}.`));
  $('.loh-token-default').addEventListener('click', () => runAction('Сохраняем токен персонажа по умолчанию…', () => pageRequest('UPDATE_DEFAULT_TOKEN', { settings: collectTokenSettings() }), 'Токен по умолчанию обновлён.'));

})();
