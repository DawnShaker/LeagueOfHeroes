import { clamp, drawToken, initialFrameTransform, initialTransform, TOKEN_SIZE, tokenFilename } from '../utils/tokenEditor.ts';
import type { FrameTransform, TokenTransform } from '../utils/tokenEditor.ts';

type Asset = { blob: Blob; name: string; image: HTMLImageElement; svg: string | null };
type BorderFill = 'solid' | 'gradient' | 'texture' | 'original';
type TextureKind = 'stone' | 'noise' | 'stripes' | 'dots' | 'scales';
type State = {
  art: Asset | null;
  custom: Asset | null;
  border: string;
  borderColor: string;
  recolor: boolean;
  borderFill: BorderFill;
  gradientColors: string[];
  gradientAngle: number;
  textureKind: TextureKind;
  textureScale: number;
  textureContrast: number;
  textureOffsetX: number;
  textureOffsetY: number;
  frameTransform: FrameTransform;
  tokenSize: number;
  background: 'transparent' | 'color';
  backgroundColor: string;
  transform: TokenTransform;
  size: number;
  filename: string;
};
type SavedAsset = { blob: Blob; name: string };
type Draft = Omit<State, 'art' | 'custom'> & { version: 1 | 2; art: SavedAsset | null; custom: SavedAsset | null };

const emptyState = (): State => ({
  art: null, custom: null, border: 'none', borderColor: '#ffffff', recolor: false, borderFill: 'solid',
  gradientColors: ['#ffffff', '#64748b'], gradientAngle: 0,
  textureKind: 'stone', textureScale: 32, textureContrast: 55, textureOffsetX: 0, textureOffsetY: 0,
  frameTransform: initialFrameTransform(), tokenSize: 100,
  background: 'transparent', backgroundColor: '#1e293b', transform: initialTransform(), size: 512, filename: 'token',
});
const copyState = (state: State): State => ({ ...state, transform: { ...state.transform }, frameTransform: { ...state.frameTransform }, gradientColors: [...state.gradientColors] });
const isTextField = (target: EventTarget | null) => target instanceof HTMLElement &&
  (target.isContentEditable || !!target.closest('input, textarea, select'));

async function decodeImage(blob: Blob): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(blob);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    if (!image.naturalWidth || !image.naturalHeight) throw new Error('empty image');
    return image;
  } finally { URL.revokeObjectURL(url); }
}

function parseSvg(text: string): Document {
  const document = new DOMParser().parseFromString(text, 'image/svg+xml');
  if (document.querySelector('parsererror') || document.documentElement.localName !== 'svg') {
    throw new Error('SVG повреждён. Выберите другой файл.');
  }
  // External resources can make a canvas impossible to export. Keep uploaded SVGs self-contained.
  document.querySelectorAll('script, foreignObject').forEach(element => element.remove());
  document.querySelectorAll('*').forEach(element => {
    for (const attribute of Array.from(element.attributes)) {
      if (attribute.name.toLowerCase().startsWith('on')) element.removeAttribute(attribute.name);
      if (attribute.localName === 'href' && !attribute.value.startsWith('#') && !attribute.value.startsWith('data:image/')) {
        throw new Error('SVG содержит внешние изображения. Встройте их в SVG или загрузите PNG.');
      }
    }
  });
  return document;
}

function svgBlob(document: Document): Blob {
  return new Blob([new XMLSerializer().serializeToString(document.documentElement)], { type: 'image/svg+xml' });
}

function generatedTexture(kind: TextureKind, scale: number, contrast: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = TOKEN_SIZE;
  const context = canvas.getContext('2d')!;
  const base = context.createLinearGradient(0, 0, TOKEN_SIZE, TOKEN_SIZE);
  base.addColorStop(0, '#1f2937');
  base.addColorStop(1, '#9ca3af');
  context.fillStyle = base;
  context.fillRect(0, 0, TOKEN_SIZE, TOKEN_SIZE);
  context.save();
  context.globalAlpha = contrast / 100;
  context.strokeStyle = '#f8fafc';
  context.fillStyle = '#f8fafc';
  context.lineWidth = Math.max(1, scale / 7);
  if (kind === 'noise' || kind === 'stone') {
    const resolution = clamp(Math.round(TOKEN_SIZE / scale * 8), 32, 256);
    const noise = document.createElement('canvas');
    noise.width = noise.height = resolution;
    const noiseContext = noise.getContext('2d')!;
    const pixels = noiseContext.createImageData(resolution, resolution);
    let seed = 1987;
    for (let index = 0; index < pixels.data.length; index += 4) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const value = seed >>> 24;
      pixels.data[index] = pixels.data[index + 1] = pixels.data[index + 2] = value;
      pixels.data[index + 3] = 255;
    }
    noiseContext.putImageData(pixels, 0, 0);
    context.globalAlpha *= kind === 'stone' ? 0.28 : 0.65;
    context.imageSmoothingEnabled = true;
    context.drawImage(noise, 0, 0, TOKEN_SIZE, TOKEN_SIZE);
    if (kind === 'stone') {
      context.globalAlpha = contrast / 100 * 0.7;
      context.lineWidth = Math.max(1, scale / 16);
      for (let x = -TOKEN_SIZE; x < TOKEN_SIZE * 2; x += scale * 2) {
        context.beginPath();
        context.moveTo(x, 0);
        context.bezierCurveTo(x + scale, 150, x - scale, 340, x + scale * 0.5, TOKEN_SIZE);
        context.stroke();
      }
    }
  } else if (kind === 'stripes') {
    context.translate(TOKEN_SIZE / 2, TOKEN_SIZE / 2);
    context.rotate(-Math.PI / 4);
    for (let offset = -TOKEN_SIZE; offset <= TOKEN_SIZE; offset += scale) {
      context.beginPath(); context.moveTo(offset, -TOKEN_SIZE); context.lineTo(offset, TOKEN_SIZE); context.stroke();
    }
  } else if (kind === 'dots') {
    for (let y = scale / 2; y < TOKEN_SIZE; y += scale) for (let x = scale / 2; x < TOKEN_SIZE; x += scale) {
      context.beginPath(); context.arc(x, y, Math.max(1, scale / 7), 0, Math.PI * 2); context.fill();
    }
  } else {
    for (let row = -1; row < TOKEN_SIZE / scale + 1; row++) {
      const y = row * scale;
      for (let column = -1; column < TOKEN_SIZE / scale + 1; column++) {
        const x = column * scale + (row % 2 ? scale / 2 : 0);
        context.beginPath(); context.arc(x, y, scale / 2, 0, Math.PI); context.stroke();
      }
    }
  }
  context.restore();
  return canvas;
}

function fillFrame(source: CanvasImageSource, state: State, texture: HTMLCanvasElement | null): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = TOKEN_SIZE;
  const context = canvas.getContext('2d')!;
  if (state.borderFill === 'solid') {
    context.fillStyle = state.borderColor;
    context.fillRect(0, 0, TOKEN_SIZE, TOKEN_SIZE);
  } else if (state.borderFill === 'gradient') {
    const angle = state.gradientAngle * Math.PI / 180;
    const dx = Math.cos(angle) * TOKEN_SIZE / 2;
    const dy = Math.sin(angle) * TOKEN_SIZE / 2;
    const gradient = context.createLinearGradient(TOKEN_SIZE / 2 - dx, TOKEN_SIZE / 2 - dy, TOKEN_SIZE / 2 + dx, TOKEN_SIZE / 2 + dy);
    state.gradientColors.forEach((color, index) => gradient.addColorStop(index / Math.max(1, state.gradientColors.length - 1), color));
    context.fillStyle = gradient;
    context.fillRect(0, 0, TOKEN_SIZE, TOKEN_SIZE);
  } else if (state.borderFill === 'texture' && texture) {
    for (let x = -TOKEN_SIZE; x <= TOKEN_SIZE; x += TOKEN_SIZE) for (let y = -TOKEN_SIZE; y <= TOKEN_SIZE; y += TOKEN_SIZE) {
      context.drawImage(texture, x + state.textureOffsetX, y + state.textureOffsetY);
    }
  }
  context.globalCompositeOperation = 'destination-in';
  context.drawImage(source, 0, 0, TOKEN_SIZE, TOKEN_SIZE);
  return canvas;
}

async function readAsset(file: Blob, name: string, border = false): Promise<Asset> {
  const limit = (border ? 5 : 20) * 1024 * 1024;
  if (file.size > limit) throw new Error(`Файл слишком большой. Максимум — ${border ? 5 : 20} МБ.`);
  const extension = name.split('.').pop()?.toLowerCase();
  const svg = file.type === 'image/svg+xml' || extension === 'svg';
  const supported = border ? ['image/png', 'image/svg+xml'] : ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'];
  const supportedExtensions = border ? ['png', 'svg'] : ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
  if (!supported.includes(file.type) && !(file.type === '' && supportedExtensions.includes(extension || ''))) {
    throw new Error(border ? 'Для рамки выберите PNG или SVG.' : 'Выберите изображение PNG, JPG, WebP, GIF или SVG.');
  }
  let blob = file;
  let text: string | null = null;
  if (svg) {
    const document = parseSvg(await file.text());
    blob = svgBlob(document);
    text = await blob.text();
  }
  try {
    const image = await decodeImage(blob);
    // Store a stable frame of animated images so preview and export always match.
    const stable = document.createElement('canvas');
    stable.width = image.naturalWidth;
    stable.height = image.naturalHeight;
    if (stable.width * stable.height > 40_000_000) throw new Error('Изображение слишком большое: максимум 40 мегапикселей.');
    const context = stable.getContext('2d');
    if (!context) throw new Error('Canvas недоступен в этом браузере.');
    context.drawImage(image, 0, 0);
    const png = await new Promise<Blob>((resolve, reject) => stable.toBlob(result => result ? resolve(result) : reject(new Error('Не удалось прочитать изображение.')), 'image/png'));
    return { blob: file.type === 'image/gif' || extension === 'gif' ? png : blob, name, image: await decodeImage(png), svg: text };
  } catch (error) {
    if (error instanceof Error && /максимум|Canvas/.test(error.message)) throw error;
    throw new Error('Не удалось прочитать изображение. Файл повреждён или его формат не поддерживается.');
  }
}

function openDraftDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('league-of-heroes-tokenator', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('drafts');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('Хранилище занято другой вкладкой.'));
  });
}

async function draftTransaction(mode: IDBTransactionMode, value?: Draft): Promise<Draft | undefined> {
  const database = await openDraftDatabase();
  try {
    return await new Promise<Draft | undefined>((resolve, reject) => {
      const transaction = database.transaction('drafts', mode);
      const store = transaction.objectStore('drafts');
      const request = mode === 'readonly' ? store.get('current') : value ? store.put(value, 'current') : store.delete('current');
      transaction.oncomplete = () => resolve(mode === 'readonly' ? request.result : undefined);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally { database.close(); }
}

export function initializeTokenEditor(root: HTMLElement) {
  const get = <T extends HTMLElement>(id: string): T => {
    const element = root.querySelector<T>(`#${id}`);
    if (!element) throw new Error(`Missing token editor element: ${id}`);
    return element;
  };
  const canvas = get<HTMLCanvasElement>('token-canvas');
  const context = canvas.getContext('2d');
  const status = get('token-status');
  const error = get('token-error');
  const draftStatus = get('token-draft-status');
  const imageFile = get<HTMLInputElement>('token-image-file');
  const borderFile = get<HTMLInputElement>('token-border-file');
  const download = get<HTMLButtonElement>('token-download');
  const undo = get<HTMLButtonElement>('token-undo');
  const redo = get<HTMLButtonElement>('token-redo');
  const clear = get<HTMLButtonElement>('token-clear');
  const restore = get<HTMLButtonElement>('token-restore');
  const scale = get<HTMLInputElement>('token-scale');
  const scaleNumber = get<HTMLInputElement>('token-scale-number');
  const rotation = get<HTMLInputElement>('token-rotation');
  const rotationNumber = get<HTMLInputElement>('token-rotation-number');
  const tokenSize = get<HTMLInputElement>('token-size');
  const tokenSizeNumber = get<HTMLInputElement>('token-size-number');
  const frameRanges = {
    scale: [get<HTMLInputElement>('token-frame-scale'), get<HTMLInputElement>('token-frame-scale-number')],
    rotation: [get<HTMLInputElement>('token-frame-rotation'), get<HTMLInputElement>('token-frame-rotation-number')],
    x: [get<HTMLInputElement>('token-frame-x'), get<HTMLInputElement>('token-frame-x-number')],
    y: [get<HTMLInputElement>('token-frame-y'), get<HTMLInputElement>('token-frame-y-number')],
  } as const;
  const borderColor = get<HTMLInputElement>('token-border-color');
  const borderFillMode = get<HTMLSelectElement>('token-border-fill-mode');
  const gradientAngle = get<HTMLInputElement>('token-gradient-angle');
  const textureKind = get<HTMLSelectElement>('token-texture-kind');
  const textureScale = get<HTMLInputElement>('token-texture-scale');
  const textureContrast = get<HTMLInputElement>('token-texture-contrast');
  const textureOffsetX = get<HTMLInputElement>('token-texture-x');
  const textureOffsetY = get<HTMLInputElement>('token-texture-y');
  const texturePreview = get<HTMLCanvasElement>('token-texture-preview');
  const background = get<HTMLSelectElement>('token-background');
  const backgroundColor = get<HTMLInputElement>('token-bg-color');
  const exportSize = get<HTMLSelectElement>('token-export-size');
  const filename = get<HTMLInputElement>('token-filename');
  const recolor = get<HTMLInputElement>('token-recolor');
  const dropZone = get('token-drop-zone');
  const retryDraft = get<HTMLButtonElement>('token-retry-draft');
  if (!context) { error.textContent = 'Canvas недоступен. Откройте страницу в браузере с поддержкой Canvas.'; error.hidden = false; return; }

  let state = emptyState();
  let history: State[] = [copyState(state)];
  let historyIndex = 0;
  let borderImage: CanvasImageSource | null = null;
  let textureCache: HTMLCanvasElement | null = null;
  let textureCacheKey = '';
  let borderVersion = 0;
  let artVersion = 0;
  let revision = 0;
  let borderBusy = false;
  let artBusy = false;
  let exporting = false;
  let restoring = true;
  let lastClearIndex: number | null = null;
  let draftTimer: ReturnType<typeof setTimeout> | undefined;
  let saveQueue: Promise<unknown> = Promise.resolve();
  const presets = new Map<string, Promise<string>>();
  let thumbnailAsset: Asset | null = null;
  let thumbnailUrl: string | null = null;

  function showError(message: string) { error.textContent = message; error.hidden = false; }
  function dismissError() { error.hidden = true; error.textContent = ''; }
  function showStatus(message: string) { status.textContent = message; }

  function currentTexture(): HTMLCanvasElement {
    const key = `${state.textureKind}:${state.textureScale}:${state.textureContrast}`;
    if (!textureCache || key !== textureCacheKey) {
      textureCache = generatedTexture(state.textureKind, state.textureScale, state.textureContrast);
      textureCacheKey = key;
    }
    return textureCache;
  }

  function render() {
    drawToken(context!, canvas.width, state.art?.image || null, borderImage, state.transform, state.background === 'color' ? state.backgroundColor : null, state.tokenSize, state.frameTransform);
    const busy = restoring || artBusy || exporting;
    root.dataset.hasImage = String(!!state.art);
    root.setAttribute('aria-busy', String(busy || borderBusy));
    get('token-empty').hidden = !!state.art;
    get<HTMLFieldSetElement>('token-image-controls').disabled = !state.art || busy;
    get<HTMLFieldSetElement>('token-frame-controls').disabled = state.border === 'none' || busy;
    download.disabled = !state.art || busy || borderBusy;
    clear.disabled = busy || (!state.art && state.border === 'none' && !state.custom);
    undo.disabled = historyIndex === 0 || busy;
    redo.disabled = historyIndex === history.length - 1 || busy;
    restore.hidden = lastClearIndex !== historyIndex || historyIndex === 0;
    restore.disabled = busy;
    root.querySelectorAll<HTMLButtonElement>('[data-upload-art]').forEach(button => {
      button.disabled = busy;
      if (button.closest('.token-image-actions')) button.textContent = state.art ? 'Заменить изображение' : 'Выбрать изображение';
    });
    root.querySelectorAll<HTMLButtonElement>('[data-border]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.border === state.border));
      button.disabled = busy;
    });
    get<HTMLButtonElement>('token-replace-border').disabled = busy;
    [borderColor, borderFillMode, background, backgroundColor, exportSize, filename, recolor, gradientAngle, textureKind, textureScale, textureContrast, textureOffsetX, textureOffsetY].forEach(element => element.disabled = busy);
    Object.values(frameRanges).flat().forEach(element => element.disabled = state.border === 'none' || busy);
    get('token-image-name').textContent = state.art?.name || 'Изображение не выбрано';
    get('token-border-name').textContent = state.custom?.name || '';
    get('token-custom-options').hidden = state.border !== 'custom';
    get('token-recolor-label').hidden = !state.custom?.svg;
    const tintingAllowed = state.border !== 'custom' || !state.custom?.svg || state.recolor;
    get('token-frame-fill').hidden = state.border === 'none' || !tintingAllowed;
    get('token-gradient-controls').hidden = state.borderFill !== 'gradient';
    get('token-texture-controls').hidden = state.borderFill !== 'texture';
    get('token-border-color-label').hidden = state.borderFill !== 'solid';
    get('token-gradient-add').toggleAttribute('disabled', state.gradientColors.length >= 5 || busy);
    get('token-gradient-remove').toggleAttribute('disabled', state.gradientColors.length <= 2 || busy);
    get('token-gradient-stops').querySelectorAll<HTMLElement>('[data-gradient-stop]').forEach((stop, index) => {
      stop.hidden = index >= state.gradientColors.length;
      const input = stop.querySelector<HTMLInputElement>('input');
      if (input) { input.value = state.gradientColors[index] || '#ffffff'; input.disabled = busy; }
    });
    get('token-bg-color-label').hidden = state.background !== 'color';
    scale.value = scaleNumber.value = String(Math.round(state.transform.zoom));
    rotation.value = rotationNumber.value = String(Math.round(state.transform.rotation));
    tokenSize.value = tokenSizeNumber.value = String(Math.round(state.tokenSize));
    for (const key of Object.keys(frameRanges) as Array<keyof typeof frameRanges>) {
      frameRanges[key][0].value = frameRanges[key][1].value = String(Math.round(state.frameTransform[key]));
    }
    borderColor.value = state.borderColor;
    borderFillMode.value = state.borderFill;
    gradientAngle.value = String(state.gradientAngle);
    get('token-gradient-angle-value').textContent = `${state.gradientAngle}°`;
    textureKind.value = state.textureKind;
    textureScale.value = String(state.textureScale);
    textureContrast.value = String(state.textureContrast);
    textureOffsetX.value = String(state.textureOffsetX);
    textureOffsetY.value = String(state.textureOffsetY);
    get('token-texture-scale-value').textContent = String(state.textureScale);
    get('token-texture-contrast-value').textContent = `${state.textureContrast}%`;
    get('token-texture-x-value').textContent = `${state.textureOffsetX} px`;
    get('token-texture-y-value').textContent = `${state.textureOffsetY} px`;
    if (!get('token-texture-controls').hasAttribute('hidden')) {
      const previewContext = texturePreview.getContext('2d');
      if (previewContext) { previewContext.clearRect(0, 0, texturePreview.width, texturePreview.height); previewContext.drawImage(currentTexture(), 0, 0, texturePreview.width, texturePreview.height); }
    }
    background.value = state.background;
    backgroundColor.value = state.backgroundColor;
    exportSize.value = String(state.size);
    if (document.activeElement !== filename) filename.value = state.filename;
    recolor.checked = state.recolor;
    get('token-export-summary').textContent = `${state.size} × ${state.size} px · ${state.background === 'transparent' ? 'прозрачный' : 'цветной'} фон`;
    const thumb = get<HTMLImageElement>('token-custom-thumb');
    thumb.hidden = !state.custom;
    get('token-custom-plus').hidden = !!state.custom;
    if (thumbnailAsset !== state.custom) {
      if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
      thumbnailAsset = state.custom;
      thumbnailUrl = state.custom ? URL.createObjectURL(state.custom.blob) : null;
      if (thumbnailUrl) thumb.src = thumbnailUrl;
      else thumb.removeAttribute('src');
    }
  }

  function saveDraft() {
    clearTimeout(draftTimer);
    draftTimer = undefined;
    const snapshot = copyState(state);
    const savedRevision = revision;
    const asset = (value: Asset | null): SavedAsset | null => value ? { blob: value.blob, name: value.name } : null;
    const draft: Draft = { ...snapshot, version: 2, art: asset(snapshot.art), custom: asset(snapshot.custom) };
    draftStatus.textContent = 'Сохранение черновика…';
    saveQueue = saveQueue.catch(() => {}).then(async () => {
      try {
        await draftTransaction('readwrite', snapshot.art || snapshot.custom || snapshot.border !== 'none' ? draft : undefined);
        if (savedRevision === revision) {
          draftStatus.textContent = snapshot.art || snapshot.custom || snapshot.border !== 'none' ? 'Черновик сохранён в этом браузере.' : '';
          retryDraft.hidden = true;
        }
      } catch {
        draftStatus.textContent = 'Не удалось сохранить черновик. Проверьте доступ к хранилищу и свободное место в браузере.';
        retryDraft.hidden = false;
      }
    });
  }

  function scheduleDraft() {
    clearTimeout(draftTimer);
    draftStatus.textContent = 'Сохранение черновика…';
    draftTimer = setTimeout(saveDraft, 350);
  }

  function commit() {
    revision++;
    const previous = history[historyIndex];
    const equivalent = previous.art === state.art && previous.custom === state.custom &&
      JSON.stringify({ ...previous, art: null, custom: null }) === JSON.stringify({ ...state, art: null, custom: null });
    if (!equivalent) {
      history = history.slice(0, historyIndex + 1);
      history.push(copyState(state));
      if (history.length > 30) history.shift();
      historyIndex = history.length - 1;
      lastClearIndex = null;
    }
    render();
    scheduleDraft();
  }

  async function updateBorder() {
    const version = ++borderVersion;
    const snapshot = copyState(state);
    borderBusy = snapshot.border !== 'none';
    borderImage = null;
    render();
    if (snapshot.border === 'none') return true;
    try {
      let image: HTMLImageElement;
      if (snapshot.border === 'custom' && snapshot.custom && (!snapshot.custom.svg || !snapshot.recolor)) {
        image = snapshot.custom.image;
      } else {
        let svg: string;
        if (snapshot.border === 'custom') {
          if (!snapshot.custom?.svg) throw new Error('Выберите свою рамку.');
          svg = snapshot.custom.svg;
        } else {
          if (!presets.has(snapshot.border)) {
            presets.set(snapshot.border, fetch(`/images/borders/${snapshot.border.replace('-', '')}.svg`).then(async response => {
              if (!response.ok) throw new Error('Не удалось загрузить рамку. Повторите выбор.');
              return response.text();
            }).catch(error => { presets.delete(snapshot.border); throw error; }));
          }
          svg = await presets.get(snapshot.border)!;
        }
        image = await decodeImage(svgBlob(parseSvg(svg)));
      }
      if (version !== borderVersion) return false;
      const tintingAllowed = snapshot.border !== 'custom' || !snapshot.custom?.svg || snapshot.recolor;
      borderImage = snapshot.borderFill === 'original' || !tintingAllowed
        ? image
        : fillFrame(image, snapshot, snapshot.borderFill === 'texture' ? currentTexture() : null);
      return true;
    } catch (failure) {
      if (version !== borderVersion) return false;
      showError(failure instanceof Error ? failure.message : 'Не удалось загрузить рамку.');
      state.border = 'none';
      return false;
    } finally {
      if (version === borderVersion) { borderBusy = false; render(); }
    }
  }

  async function loadArt(file: File) {
    if (restoring || exporting) return;
    const version = ++artVersion;
    artBusy = true;
    dismissError();
    showStatus('Загрузка изображения…');
    render();
    try {
      const asset = await readAsset(file, file.name || 'portrait.png');
      if (version !== artVersion) return;
      state.art = asset;
      state.transform = initialTransform();
      state.filename = tokenFilename(asset.name.replace(/\.[^.]+$/, '')).replace(/\.png$/, '');
      artBusy = false;
      commit();
      showStatus('Портрет загружен. Перетащите его, чтобы выбрать кадр.');
      canvas.focus({ preventScroll: true });
    } catch (failure) {
      if (version === artVersion) {
        showError(failure instanceof Error ? failure.message : 'Не удалось загрузить портрет.');
        showStatus(state.art ? 'Предыдущее изображение сохранено.' : 'Выберите другое изображение.');
      }
    } finally { if (version === artVersion) { artBusy = false; render(); } }
  }

  async function loadBorder(file: File) {
    const version = ++artVersion;
    artBusy = true;
    dismissError();
    showStatus('Загрузка своей рамки…');
    render();
    try {
      const asset = await readAsset(file, file.name, true);
      if (version !== artVersion) return;
      state.custom = asset;
      state.border = 'custom';
      state.recolor = false;
      state.borderFill = asset.svg ? 'solid' : 'original';
      await updateBorder();
      artBusy = false;
      commit();
      showStatus('Своя рамка загружена.');
    } catch (failure) {
      if (version === artVersion) {
        showError(failure instanceof Error ? failure.message : 'Не удалось загрузить рамку.');
        showStatus('Предыдущая рамка сохранена. Выберите другой PNG или SVG.');
      }
    }
    finally { if (version === artVersion) { artBusy = false; render(); } }
  }

  function changeTransform(change: Partial<TokenTransform>) {
    if (!state.art || artBusy || restoring || exporting) return;
    state.transform = { ...state.transform, ...change };
    commit();
  }

  async function travel(direction: number) {
    const next = historyIndex + direction;
    if (next < 0 || next >= history.length || restoring || artBusy || exporting) return;
    historyIndex = next;
    revision++;
    state = copyState(history[next]);
    await updateBorder();
    render();
    scheduleDraft();
    showStatus(direction < 0 ? 'Действие отменено.' : 'Действие повторено.');
  }

  root.querySelectorAll<HTMLButtonElement>('[data-upload-art]').forEach(button => button.addEventListener('click', () => imageFile.click()));
  imageFile.addEventListener('change', () => {
    const file = imageFile.files?.[0];
    imageFile.value = '';
    if (file) void loadArt(file);
  });
  borderFile.addEventListener('change', () => {
    const file = borderFile.files?.[0];
    borderFile.value = '';
    if (file) void loadBorder(file);
  });
  get('token-replace-border').addEventListener('click', () => borderFile.click());
  root.querySelectorAll<HTMLButtonElement>('[data-border]').forEach(button => button.addEventListener('click', async () => {
    const border = button.dataset.border!;
    if (border === 'custom' && !state.custom) { borderFile.click(); return; }
    dismissError();
    state.border = border;
    if (border !== 'custom' && state.borderFill === 'original') state.borderFill = 'solid';
    if (await updateBorder()) { commit(); showStatus(border === 'none' ? 'Рамка убрана.' : 'Рамка выбрана.'); }
    else if (state.border === 'none') commit();
  }));
  borderColor.addEventListener('input', () => { state.borderColor = borderColor.value; void updateBorder(); });
  borderColor.addEventListener('change', commit);
  borderFillMode.addEventListener('change', async () => { state.borderFill = borderFillMode.value as BorderFill; await updateBorder(); commit(); });
  for (let index = 0; index < 5; index++) {
    const color = get<HTMLInputElement>(`token-gradient-color-${index}`);
    color.addEventListener('input', () => { state.gradientColors[index] = color.value; void updateBorder(); });
    color.addEventListener('change', commit);
  }
  get('token-gradient-add').addEventListener('click', () => {
    if (state.gradientColors.length < 5) { state.gradientColors.push(state.gradientColors[state.gradientColors.length - 1]); commit(); void updateBorder(); }
  });
  get('token-gradient-remove').addEventListener('click', () => {
    if (state.gradientColors.length > 2) { state.gradientColors.pop(); commit(); void updateBorder(); }
  });
  gradientAngle.addEventListener('input', () => { state.gradientAngle = Number(gradientAngle.value); render(); void updateBorder(); });
  gradientAngle.addEventListener('change', commit);
  textureKind.addEventListener('change', async () => { state.textureKind = textureKind.value as TextureKind; textureCacheKey = ''; await updateBorder(); commit(); });
  textureScale.addEventListener('input', () => { state.textureScale = Number(textureScale.value); textureCacheKey = ''; render(); void updateBorder(); });
  textureScale.addEventListener('change', commit);
  textureContrast.addEventListener('input', () => { state.textureContrast = Number(textureContrast.value); textureCacheKey = ''; render(); void updateBorder(); });
  textureContrast.addEventListener('change', commit);
  textureOffsetX.addEventListener('input', () => { state.textureOffsetX = Number(textureOffsetX.value); void updateBorder(); });
  textureOffsetX.addEventListener('change', commit);
  textureOffsetY.addEventListener('input', () => { state.textureOffsetY = Number(textureOffsetY.value); void updateBorder(); });
  textureOffsetY.addEventListener('change', commit);
  recolor.addEventListener('change', async () => { state.recolor = recolor.checked; await updateBorder(); commit(); });
  background.addEventListener('change', () => { state.background = background.value === 'color' ? 'color' : 'transparent'; commit(); });
  backgroundColor.addEventListener('input', () => { state.backgroundColor = backgroundColor.value; render(); });
  backgroundColor.addEventListener('change', commit);
  exportSize.addEventListener('change', () => { state.size = Number(exportSize.value); commit(); });
  filename.addEventListener('input', () => { state.filename = filename.value; scheduleDraft(); });
  filename.addEventListener('change', commit);
  retryDraft.addEventListener('click', saveDraft);

  function bindTransform(range: HTMLInputElement, number: HTMLInputElement, key: 'zoom' | 'rotation', min: number, max: number) {
    range.addEventListener('input', () => { state.transform[key] = Number(range.value); render(); });
    range.addEventListener('change', commit);
    number.addEventListener('input', () => {
      const value = number.valueAsNumber;
      if (Number.isFinite(value) && value >= min && value <= max) {
        state.transform[key] = value;
        range.value = String(value);
        render();
      }
    });
    number.addEventListener('change', () => {
      state.transform[key] = clamp(Number.isFinite(number.valueAsNumber) ? number.valueAsNumber : state.transform[key], min, max);
      commit();
    });
  }
  bindTransform(scale, scaleNumber, 'zoom', 10, 500);
  bindTransform(rotation, rotationNumber, 'rotation', -180, 180);
  tokenSize.addEventListener('input', () => { state.tokenSize = Number(tokenSize.value); render(); });
  tokenSize.addEventListener('change', commit);
  tokenSizeNumber.addEventListener('input', () => {
    const value = tokenSizeNumber.valueAsNumber;
    if (Number.isFinite(value) && value >= 25 && value <= 100) { state.tokenSize = value; tokenSize.value = String(value); render(); }
  });
  tokenSizeNumber.addEventListener('change', () => { state.tokenSize = clamp(Number.isFinite(tokenSizeNumber.valueAsNumber) ? tokenSizeNumber.valueAsNumber : state.tokenSize, 25, 100); commit(); });
  for (const key of Object.keys(frameRanges) as Array<keyof typeof frameRanges>) {
    const [range, number] = frameRanges[key];
    const min = Number(range.min); const max = Number(range.max);
    range.addEventListener('input', () => { state.frameTransform[key] = Number(range.value); render(); });
    range.addEventListener('change', commit);
    number.addEventListener('input', () => {
      const value = number.valueAsNumber;
      if (Number.isFinite(value) && value >= min && value <= max) { state.frameTransform[key] = value; range.value = String(value); render(); }
    });
    number.addEventListener('change', () => { state.frameTransform[key] = clamp(Number.isFinite(number.valueAsNumber) ? number.valueAsNumber : state.frameTransform[key], min, max); commit(); });
  }
  get('token-reset-frame').addEventListener('click', () => { state.frameTransform = initialFrameTransform(); commit(); });
  get('token-center').addEventListener('click', () => changeTransform({ x: 0, y: 0 }));
  get('token-reset-scale').addEventListener('click', () => changeTransform({ zoom: 100 }));
  get('token-reset-rotation').addEventListener('click', () => changeTransform({ rotation: 0 }));
  get('token-fill').addEventListener('click', () => changeTransform({ fit: 'fill', zoom: 100, x: 0, y: 0 }));
  get('token-fit').addEventListener('click', () => changeTransform({ fit: 'contain', zoom: 100, x: 0, y: 0 }));
  get('token-reset').addEventListener('click', () => changeTransform(initialTransform()));
  undo.addEventListener('click', () => void travel(-1));
  redo.addEventListener('click', () => void travel(1));
  restore.addEventListener('click', () => void travel(-1));
  clear.addEventListener('click', () => {
    artVersion++;
    borderVersion++;
    borderBusy = false;
    borderImage = null;
    state = emptyState();
    dismissError();
    commit();
    lastClearIndex = historyIndex;
    render();
    showStatus('Редактор очищен. Можно отменить очистку.');
  });

  type GestureMode = 'image-move' | 'image-scale' | 'image-rotate' | 'frame-move' | 'frame-scale' | 'frame-rotate';
  let drag: { pointer: number; x: number; y: number; mode: GestureMode; image: TokenTransform; frame: FrameTransform } | null = null;
  let wheelCommitTimer: ReturnType<typeof setTimeout> | undefined;
  const point = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) * TOKEN_SIZE / rect.width, y: (event.clientY - rect.top) * TOKEN_SIZE / rect.height };
  };
  canvas.addEventListener('pointerdown', event => {
    if (!state.art || event.button !== 0 || artBusy || restoring || exporting || drag) return;
    if (event.altKey && state.border === 'none') return;
    const position = point(event);
    const mode: GestureMode = event.altKey
      ? event.ctrlKey || event.metaKey ? 'frame-scale' : event.shiftKey ? 'frame-rotate' : 'frame-move'
      : event.ctrlKey || event.metaKey ? 'image-scale' : event.shiftKey ? 'image-rotate' : 'image-move';
    drag = { pointer: event.pointerId, ...position, mode, image: { ...state.transform }, frame: { ...state.frameTransform } };
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    canvas.focus({ preventScroll: true });
  });
  canvas.addEventListener('pointermove', event => {
    if (!drag || drag.pointer !== event.pointerId) return;
    const position = point(event);
    const dx = position.x - drag.x;
    const dy = position.y - drag.y;
    if (drag.mode === 'image-move') {
      state.transform.x = drag.image.x + dx;
      state.transform.y = drag.image.y + dy;
    } else if (drag.mode === 'image-scale') {
      state.transform.zoom = clamp(drag.image.zoom - dy * 1.5, 10, 500);
    } else if (drag.mode === 'image-rotate') {
      state.transform.rotation = clamp(drag.image.rotation + dx * 0.7, -180, 180);
    } else if (drag.mode === 'frame-move') {
      state.frameTransform.x = drag.frame.x + dx;
      state.frameTransform.y = drag.frame.y + dy;
    } else if (drag.mode === 'frame-scale') {
      state.frameTransform.scale = clamp(drag.frame.scale - dy, 25, 200);
    } else {
      state.frameTransform.rotation = clamp(drag.frame.rotation + dx * 0.7, -180, 180);
    }
    render();
  });
  function stopDrag(event: PointerEvent) {
    if (!drag || drag.pointer !== event.pointerId) return;
    drag = null;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    commit();
  }
  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);
  canvas.addEventListener('lostpointercapture', stopDrag);
  canvas.addEventListener('wheel', event => {
    if (!state.art || artBusy || restoring || exporting || (!event.ctrlKey && !event.metaKey && !event.shiftKey)) return;
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) state.transform.zoom = clamp(state.transform.zoom - event.deltaY * 0.25, 10, 500);
    else state.transform.rotation = clamp(state.transform.rotation + event.deltaY * 0.12, -180, 180);
    render();
    clearTimeout(wheelCommitTimer);
    wheelCommitTimer = setTimeout(commit, 220);
  }, { passive: false });
  canvas.addEventListener('keydown', event => {
    if (!state.art || !event.key.startsWith('Arrow')) return;
    event.preventDefault();
    const step = event.shiftKey ? 10 : 1;
    if (event.altKey && state.border !== 'none') {
      state.frameTransform.x += event.key === 'ArrowRight' ? step : event.key === 'ArrowLeft' ? -step : 0;
      state.frameTransform.y += event.key === 'ArrowDown' ? step : event.key === 'ArrowUp' ? -step : 0;
      commit();
    } else changeTransform({ x: state.transform.x + (event.key === 'ArrowRight' ? step : event.key === 'ArrowLeft' ? -step : 0), y: state.transform.y + (event.key === 'ArrowDown' ? step : event.key === 'ArrowUp' ? -step : 0) });
  });
  root.addEventListener('keydown', event => {
    if (isTextField(event.target) || (!event.ctrlKey && !event.metaKey) || event.key.toLowerCase() !== 'z') return;
    event.preventDefault();
    void travel(event.shiftKey ? 1 : -1);
  });

  let dragDepth = 0;
  const hasFiles = (event: DragEvent) => Array.from(event.dataTransfer?.types || []).includes('Files');
  dropZone.addEventListener('dragenter', event => { if (hasFiles(event)) { event.preventDefault(); dragDepth++; dropZone.classList.add('is-dragging'); } });
  dropZone.addEventListener('dragover', event => { if (hasFiles(event)) { event.preventDefault(); if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy'; } });
  dropZone.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) dropZone.classList.remove('is-dragging'); });
  dropZone.addEventListener('drop', event => {
    event.preventDefault();
    dragDepth = 0;
    dropZone.classList.remove('is-dragging');
    const file = event.dataTransfer?.files[0];
    if (file) void loadArt(file);
  });
  document.addEventListener('dragover', event => { if (hasFiles(event)) event.preventDefault(); });
  document.addEventListener('drop', event => {
    if (hasFiles(event) && event.target instanceof Node && !dropZone.contains(event.target)) {
      event.preventDefault();
      showStatus('Перетащите изображение на область предпросмотра.');
    }
  });
  document.addEventListener('paste', event => {
    if (isTextField(event.target)) return;
    const item = Array.from(event.clipboardData?.items || []).find(item => item.kind === 'file' && item.type.startsWith('image/'));
    const file = item?.getAsFile();
    if (file) { event.preventDefault(); void loadArt(file); }
  });

  download.addEventListener('click', async () => {
    if (!state.art || artBusy || borderBusy || restoring || exporting) return;
    const snapshot = copyState(state);
    const frame = borderImage;
    exporting = true;
    dismissError();
    download.textContent = 'Подготовка PNG…';
    showStatus('Подготовка PNG…');
    render();
    try {
      const output = document.createElement('canvas');
      output.width = output.height = snapshot.size;
      const outputContext = output.getContext('2d');
      if (!outputContext) throw new Error('Не удалось создать PNG.');
      drawToken(outputContext, snapshot.size, snapshot.art!.image, frame, snapshot.transform, snapshot.background === 'color' ? snapshot.backgroundColor : null, snapshot.tokenSize, snapshot.frameTransform);
      const blob = await new Promise<Blob>((resolve, reject) => output.toBlob(blob => blob ? resolve(blob) : reject(new Error('Не удалось создать PNG.')), 'image/png'));
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = tokenFilename(snapshot.filename);
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      // Let browsers finish starting the download before releasing the URL.
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      showStatus(`Готово: ${anchor.download}, ${snapshot.size} × ${snapshot.size} px. Скачивание начато.`);
    } catch { showError('Не удалось экспортировать PNG. Попробуйте меньший размер или замените свою рамку.'); }
    finally { exporting = false; download.textContent = 'Скачать PNG'; render(); }
  });

  const resize = () => {
    const displaySize = canvas.getBoundingClientRect().width;
    const pixels = Math.max(1, Math.round(displaySize * Math.min(window.devicePixelRatio || 1, 2)));
    if (canvas.width !== pixels) { canvas.width = canvas.height = pixels; render(); }
  };
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(resize).observe(canvas);
  else window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && draftTimer) saveDraft(); });
  window.addEventListener('pagehide', () => { if (draftTimer) saveDraft(); });

  render();
  showStatus('Проверка сохранённого черновика…');
  void (async () => {
    try {
      const draft = await draftTransaction('readonly');
      if (draft?.version === 1 || draft?.version === 2) {
        const validColor = (value: string) => /^#[\da-f]{6}$/i.test(value);
        const frameTransform = draft.frameTransform || initialFrameTransform();
        const gradientColors = draft.gradientColors || ['#ffffff', '#64748b'];
        const borderFill = draft.borderFill || (draft.border === 'custom' && !draft.custom?.name.toLowerCase().endsWith('.svg') ? 'original' : 'solid');
        const tokenSize = draft.tokenSize ?? 100;
        if (!['none', 'preset-1', 'preset-2', 'preset-3', 'preset-4', 'preset-5', 'preset-6', 'preset-7', 'preset-8', 'preset-9', 'preset-10', 'custom'].includes(draft.border) ||
          ![512, 1024, 1536].includes(draft.size) || !validColor(draft.borderColor) || !validColor(draft.backgroundColor) ||
          typeof draft.filename !== 'string' || typeof draft.recolor !== 'boolean' ||
          !['fill', 'contain'].includes(draft.transform?.fit) || !['transparent', 'color'].includes(draft.background) ||
          ![draft.transform.x, draft.transform.y, draft.transform.zoom, draft.transform.rotation].every(Number.isFinite) ||
          !['solid', 'gradient', 'texture', 'original'].includes(borderFill) || !Array.isArray(gradientColors) || gradientColors.length < 2 || gradientColors.length > 5 || !gradientColors.every(validColor) ||
          !['stone', 'noise', 'stripes', 'dots', 'scales'].includes(draft.textureKind || 'stone') ||
          ![draft.gradientAngle ?? 0, draft.textureScale ?? 32, draft.textureContrast ?? 55, draft.textureOffsetX ?? 0, draft.textureOffsetY ?? 0, tokenSize, frameTransform.x, frameTransform.y, frameTransform.scale, frameTransform.rotation].every(Number.isFinite)) {
          throw new Error('invalid draft');
        }
        const art = draft.art ? await readAsset(draft.art.blob, draft.art.name) : null;
        const custom = draft.custom ? await readAsset(draft.custom.blob, draft.custom.name, true) : null;
        const { version: _version, art: _art, custom: _custom, ...settings } = draft;
        state = {
          ...emptyState(), ...settings, art, custom,
          borderFill, gradientColors,
          gradientAngle: draft.gradientAngle ?? 0,
          textureKind: draft.textureKind || 'stone',
          textureScale: clamp(draft.textureScale ?? 32, 8, 80),
          textureContrast: clamp(draft.textureContrast ?? 55, 0, 100),
          textureOffsetX: clamp(draft.textureOffsetX ?? 0, -128, 128),
          textureOffsetY: clamp(draft.textureOffsetY ?? 0, -128, 128),
          tokenSize: clamp(tokenSize, 25, 100),
          frameTransform: { x: clamp(frameTransform.x, -128, 128), y: clamp(frameTransform.y, -128, 128), scale: clamp(frameTransform.scale, 25, 200), rotation: clamp(frameTransform.rotation, -180, 180) },
          transform: { ...draft.transform, zoom: clamp(draft.transform.zoom, 10, 500), rotation: clamp(draft.transform.rotation, -180, 180) },
        };
        if (state.border === 'custom' && !custom) state.border = 'none';
        await updateBorder();
        history = [emptyState(), copyState(state)];
        historyIndex = 1;
        draftStatus.textContent = 'Черновик восстановлен из этого браузера.';
        showStatus('Продолжайте работу с сохранённым токеном.');
      } else showStatus('Выберите изображение, чтобы начать.');
    } catch {
      draftStatus.textContent = 'Черновик недоступен. Можно начать новый токен; сохранение будет проверено после изменений.';
      showStatus('Выберите изображение, чтобы начать.');
    } finally { restoring = false; render(); resize(); }
  })();
}
