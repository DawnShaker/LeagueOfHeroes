import {
  cardsById, tarotReferences, meaningLabels, defaultSpreadOptions, createTarotSpread,
  replaceSpreadCard, replacementCards, parseTarotSpread, spreadMeaning, exportTarotText, tarotImportLimit,
  type TarotSpread, type SpreadCard, type SpreadOptions, type Meaning,
} from '../../utils/tarotGenerator';

const esc = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
const sourceNames: Record<string, string> = { MM: 'Бестиарий (2014)', DMG: 'Руководство мастера (2014)', PHB: 'Книга игрока (2014)', MPMM: 'Монстры Мультивселенной', CM: 'Тайны Кэндлкипа', OotA: 'Из Бездны', BMT: 'Книга многих вещей' };
const refsById = new Map(tarotReferences.map(ref => [ref.id, ref]));

export function initializeTarotGenerator(userId: string) {
  const root = document.querySelector<HTMLElement>('#tarot-generator');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const find = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  const form = find<HTMLFormElement>('.tg-options');
  const status = find('[data-tg-status]');
  const result = find('[data-tg-result]');
  const board = find('[data-tg-board]');
  const list = find('[data-tg-list]');
  const detail = find('[data-tg-detail]');
  const title = find<HTMLInputElement>('[data-tg-title]');
  const key = `loh-tarot-spread:${userId}`;
  let spread: TarotSpread | null = null;
  let selected = '';
  let listView = window.matchMedia('(max-width: 760px)').matches;
  let saveTimer: ReturnType<typeof setTimeout> | undefined;

  function announce(message: string, error = false) {
    status.textContent = message;
    status.dataset.kind = error ? 'error' : 'info';
  }
  function persist() {
    if (!spread) return;
    try { localStorage.setItem(key, JSON.stringify(spread)); }
    catch { announce('Браузер не разрешил сохранить расклад. Сохраните JSON, чтобы не потерять заметки.', true); }
  }
  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persist, 250);
  }
  function syncOptions(options?: SpreadOptions) {
    if (options) {
      for (const name of ['mode', 'deck', 'challenges'] as const) (form.elements.namedItem(name) as HTMLSelectElement).value = String(options[name]);
      for (const name of ['reversals', 'prologue'] as const) (form.elements.namedItem(name) as HTMLInputElement).checked = options[name];
    }
    const dungeon = (form.elements.namedItem('mode') as HTMLSelectElement).value === 'dungeon';
    find('[data-tg-adventure]').hidden = dungeon;
    find('[data-tg-dungeon]').hidden = !dungeon;
    find('[data-tg-reversal-note]').hidden = !dungeon;
  }
  function art(position: SpreadCard, large = false) {
    const card = cardsById.get(position.cardId)!;
    return `<span class="tg-art${position.reversed ? ' tg-art-reversed' : ''}"><span class="tg-image-fallback" aria-hidden="true">✦<br>${esc(card.name)}<small>Иллюстрация недоступна</small></span><img src="${esc(card.image)}" alt="${esc(card.name)}${position.reversed ? ', перевёрнутое положение' : ''}" width="720" height="1227" loading="${large ? 'eager' : 'lazy'}" referrerpolicy="no-referrer" /></span>`;
  }
  function orientation(position: SpreadCard) { return position.literal ? 'Буквальный образ' : position.reversed ? 'Перевёрнутая' : 'Прямая'; }
  function referenceLinks(ids: string[]) {
    return ids.map(id => {
      const ref = refsById.get(id);
      if (!ref) return '';
      return `<a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer" title="${esc(sourceNames[ref.source] || ref.source)} · ${esc(ref.nameEn)}">${esc(ref.name)} <span>(${esc(ref.source)}, с. ${ref.page}${'cr' in ref ? `, ПО ${esc(String(ref.cr))}` : ''}; EN) ↗</span></a>`;
    }).join(' · ');
  }
  function renderViews() {
    if (!spread) return;
    const groups = new Map<string, SpreadCard[]>();
    for (const position of spread.cards) groups.set(position.group, [...(groups.get(position.group) || []), position]);
    const middle = Math.ceil(spread.options.challenges / 2);
    board.style.gridTemplateRows = `repeat(${spread.options.challenges}, auto)`;
    board.innerHTML = [...groups].map(([group, positions]) => {
      const challenge = group.startsWith('challenge-');
      const column = challenge ? 4 : ({ opening: 1, journey: 2, entrance: 3, ending: 5 }[group] || 1);
      const row = challenge ? Number(group.split('-')[1]) + 1 : middle;
      return `<div class="tg-stage" style="grid-column:${column};grid-row:${row}"><div class="tg-stage-cards${positions.length > 1 ? ' tg-pair' : ''}">${positions.map(position => {
        const card = cardsById.get(position.cardId)!;
        return `<button type="button" class="tg-card" data-tg-select="${position.key}" aria-pressed="${position.key === selected}" aria-label="${esc(position.title)}: ${esc(card.name)}, ${orientation(position)}"><span class="tg-position">${esc(position.title)}</span>${art(position)}<strong>${esc(card.name)}</strong><small>${orientation(position)}</small></button>`;
      }).join('')}</div></div>`;
    }).join('');
    list.innerHTML = spread.cards.map(position => {
      const card = cardsById.get(position.cardId)!;
      return `<article class="tg-list-card${selected === position.key ? ' tg-selected' : ''}"><button type="button" class="tg-list-select" data-tg-select="${position.key}" aria-pressed="${position.key === selected}">${art(position)}<span><span class="tg-position">${esc(position.title)}</span><strong>${esc(card.name)}</strong><small>${orientation(position)}</small></span></button><div><p>${esc(spreadMeaning(position))}</p><p class="tg-list-note" data-tg-note-for="${position.key}">${esc(position.notes)}</p></div></article>`;
    }).join('');
    find('.tg-board-scroll').hidden = listView;
    list.hidden = !listView;
    const view = find<HTMLButtonElement>('[data-tg-view]');
    view.textContent = listView ? 'Показать расклад' : 'Показать списком';
    view.setAttribute('aria-pressed', String(listView));
  }
  function renderDetail() {
    const position = spread?.cards.find(card => card.key === selected);
    if (!position || !spread) return;
    const card = cardsById.get(position.cardId)!;
    const meanings = card[position.reversed ? 'reversed' : 'upright'];
    const available = replacementCards(spread, selected).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    detail.innerHTML = `<div class="tg-portrait"><a href="${esc(card.image)}" target="_blank" rel="noopener noreferrer" aria-label="Открыть иллюстрацию ${esc(card.name)} в полном размере">${art(position, true)}</a><p>Художник: ${esc(card.artist)}<br>© Wizards of the Coast</p></div>
      <div class="tg-reading"><span class="tg-position">${esc(position.title)}</span><h5 tabindex="-1" data-tg-detail-heading>${esc(card.name)} <small>${esc(card.nameEn)}</small></h5><p class="tg-orientation">${orientation(position)} · <a href="https://5e.tools/book.html#dmtcrg,3,${encodeURIComponent(card.nameEn.toLowerCase())}" target="_blank" rel="noopener noreferrer">Руководство, с. ${card.page} (EN) ↗</a></p><p>${esc(position.hint)}</p><p class="tg-symbolism">${esc(card.description)}</p>
      ${position.literal ? `<div class="tg-literal"><strong>Буквальное чтение</strong><p>${esc(spreadMeaning(position))}</p><p>Для мест и особенностей подземелья используйте изображённый объект или существо. Его роль, подробности и связь с соседними картами определяет мастер.</p></div>` : `<fieldset class="tg-meanings"><legend>Выберите подходящее толкование</legend>${(Object.keys(meaningLabels) as Meaning[]).map(meaning => `<label class="tg-meaning${meaning === position.meaning ? ' tg-chosen' : ''}"><span class="tg-meaning-heading"><input type="radio" name="tg-meaning" data-tg-meaning value="${meaning}" ${meaning === position.meaning ? 'checked' : ''} /><strong>${meaningLabels[meaning]}</strong></span><span>${esc(meanings[meaning].text)}</span>${meanings[meaning].referenceIds.length ? `<span class="tg-refs">${referenceLinks(meanings[meaning].referenceIds)}</span>` : ''}</label>`).join('')}</fieldset>`}
      ${position.literal ? `<p class="tg-refs">${referenceLinks([...new Set([...Object.values(card.upright), ...Object.values(card.reversed)].flatMap(m => m.referenceIds))])}</p>` : ''}
      <label class="tg-notes-label">Замысел мастера<textarea data-tg-notes rows="4" maxlength="5000" placeholder="Свяжите карту с героями, местом и предыдущими событиями…">${esc(position.notes)}</textarea></label>
      <div class="tg-card-actions"><button class="mw-button" type="button" data-tg-redraw>Заменить случайной</button><button class="mw-button" type="button" data-tg-flip ${position.literal || !spread.options.reversals ? 'disabled' : ''}>Перевернуть</button></div>
      <p class="tg-small">Замена карты очистит заметку этой позиции. Переворот сохранит её.</p><div class="tg-manual"><label>Выбрать карту вручную<select data-tg-manual>${available.map(c => `<option value="${c.id}" ${c.id === card.id ? 'selected' : ''}>${esc(c.name)} · ${esc(c.nameEn)}</option>`).join('')}</select></label><button class="mw-button" type="button" data-tg-apply>Поставить карту</button></div>
      ${card.referenceIds.length ? `<p class="tg-refs">${referenceLinks(card.referenceIds)}</p>` : ''}</div>`;
  }
  function render() {
    if (!spread) return;
    result.hidden = false;
    title.value = spread.title;
    const deckName = spread.options.mode === 'dungeon' ? `Подземелье${spread.options.prologue ? ' с предысторией' : ''}` : `Приключение · ${spread.options.deck === 'all' ? '66' : '22'} карты в колоде`;
    find('[data-tg-caption]').textContent = `${deckName} · испытаний: ${spread.options.challenges} · вытянуто карт: ${spread.cards.length}. Выберите карту для чтения и заметок.`;
    renderViews();
    renderDetail();
  }
  function replace(cardId?: string) {
    if (!spread) return;
    if (cardId === spread.cards.find(card => card.key === selected)?.cardId) return;
    spread = replaceSpreadCard(spread, selected, cardId);
    announce('Карта заменена. Заметка этой позиции очищена.');
    render(); persist();
    find('[data-tg-detail-heading]').focus({ preventScroll: true });
  }
  function download(content: string, extension: string, type: string) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const a = document.createElement('a');
    a.href = url; a.download = `adventure-tarot.${extension}`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  form.addEventListener('change', () => syncOptions());
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    try {
      spread = createTarotSpread({ mode: data.get('mode') as SpreadOptions['mode'], deck: data.get('deck') as SpreadOptions['deck'], challenges: Number(data.get('challenges')), reversals: data.has('reversals'), prologue: data.has('prologue') });
      selected = spread.cards[0].key;
      announce(`Расклад готов: ${spread.cards.length} карт без повторений.`);
      render(); persist();
    } catch { announce('Не удалось создать расклад. Проверьте параметры.', true); }
  });
  root.addEventListener('click', async event => {
    const button = (event.target as Element).closest<HTMLElement>('button');
    if (!button || !spread) return;
    const next = button.dataset.tgSelect;
    if (next) {
      selected = next; renderViews(); renderDetail();
      detail.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      find('[data-tg-detail-heading]').focus({ preventScroll: true });
    } else if (button.hasAttribute('data-tg-view')) { listView = !listView; renderViews(); }
    else if (button.hasAttribute('data-tg-redraw')) replace();
    else if (button.hasAttribute('data-tg-apply')) replace(find<HTMLSelectElement>('[data-tg-manual]').value);
    else if (button.hasAttribute('data-tg-flip')) {
      const card = spread.cards.find(c => c.key === selected)!;
      if (card.literal || !spread.options.reversals) return;
      card.reversed = !card.reversed;
      renderViews(); renderDetail(); persist();
      announce(`Карта «${cardsById.get(card.cardId)!.name}»: ${orientation(card).toLowerCase()}.`);
      find('[data-tg-detail-heading]').focus({ preventScroll: true });
    } else if (button.hasAttribute('data-tg-text')) download(exportTarotText(spread), 'txt', 'text/plain;charset=utf-8');
    else if (button.hasAttribute('data-tg-json')) download(JSON.stringify(spread, null, 2), 'json', 'application/json');
    else if (button.hasAttribute('data-tg-copy')) {
      try { await navigator.clipboard.writeText(exportTarotText(spread)); announce('Текст расклада скопирован.'); }
      catch { announce('Браузер не разрешил копирование. Воспользуйтесь кнопкой «Скачать текст».', true); }
    }
  });
  title.addEventListener('input', () => { if (spread) { spread.title = title.value; scheduleSave(); } });
  detail.addEventListener('input', event => {
    const input = event.target as HTMLTextAreaElement;
    if (!input.hasAttribute('data-tg-notes') || !spread) return;
    spread.cards.find(card => card.key === selected)!.notes = input.value;
    const note = list.querySelector(`[data-tg-note-for="${selected}"]`);
    if (note) note.textContent = input.value;
    scheduleSave();
  });
  detail.addEventListener('change', event => {
    const input = event.target as HTMLInputElement;
    if (!input.hasAttribute('data-tg-meaning') || !spread) return;
    spread.cards.find(card => card.key === selected)!.meaning = input.value as Meaning;
    renderViews();
    detail.querySelectorAll('.tg-meaning').forEach(label => label.classList.toggle('tg-chosen', !!label.querySelector('input:checked')));
    persist();
  });
  find<HTMLInputElement>('[data-tg-import]').addEventListener('change', async event => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    try {
      if (file.size > tarotImportLimit) throw new Error('Файл слишком большой. Максимум — 1 МБ.');
      const imported = parseTarotSpread(JSON.parse(await file.text()));
      clearTimeout(saveTimer);
      spread = imported; selected = spread.cards[0].key;
      syncOptions(spread.options); render(); announce('Расклад загружен.'); persist();
    } catch (error) { announce(error instanceof SyntaxError ? 'В файле некорректный JSON.' : error instanceof Error ? error.message : 'Не удалось прочитать расклад.', true); }
    input.value = '';
  });
  root.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) event.target.closest<HTMLElement>('.tg-art')?.setAttribute('data-failed', 'true');
  }, true);
  window.addEventListener('pagehide', () => { clearTimeout(saveTimer); persist(); });
  syncOptions(defaultSpreadOptions);
  try {
    const saved = localStorage.getItem(key);
    if (saved) { spread = parseTarotSpread(JSON.parse(saved)); selected = spread.cards[0].key; syncOptions(spread.options); render(); announce('Восстановлен последний расклад из этого браузера.'); }
  } catch { announce('Сохранённый расклад недоступен или повреждён. Можно создать новый либо загрузить JSON.', true); }
}
