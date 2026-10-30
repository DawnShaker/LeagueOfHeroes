import { clamp, TOKEN_RADIUS, TOKEN_SIZE } from './tokenEditor.ts';
import type { FrameTransform } from './tokenEditor.ts';

export type BorderFill = 'solid' | 'gradient' | 'texture' | 'original';
export type TextureKind = 'stone' | 'noise' | 'stripes' | 'dots' | 'scales';
export type FramePaint = {
  borderFill: BorderFill;
  borderColor: string;
  gradientColors: string[];
  gradientAngle: number;
  textureKind: TextureKind;
  textureScale: number;
  textureContrast: number;
  textureOffsetX: number;
  textureOffsetY: number;
};

export function normalizeBuiltinFrame(document: Document): Document {
  const root = document.documentElement;
  if (root.getAttribute('data-token-frame-outline') === 'circle') return document;
  const namespace = 'http://www.w3.org/2000/svg';
  const element = (name: string, attributes: Record<string, string>) => {
    const node = document.createElementNS(namespace, name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  // Constrain vector geometry before SVG decoding can crop it to its rectangular viewport.
  const defs = element('defs', {});
  const clip = element('clipPath', { id: 'token-frame-outline', clipPathUnits: 'userSpaceOnUse' });
  clip.append(element('circle', { cx: '256', cy: '256', r: '256' }));
  defs.append(clip);
  const decoration = element('g', { 'clip-path': 'url(#token-frame-outline)' });
  for (const child of Array.from(root.children)) {
    if (['defs', 'title', 'desc', 'metadata'].includes(child.localName)) continue;
    // Replace rims whose centred stroke can extend outside the SVG viewport.
    if (child.localName === 'circle' && Number(child.getAttribute('cx')) === TOKEN_RADIUS &&
      Number(child.getAttribute('cy')) === TOKEN_RADIUS && Number(child.getAttribute('r')) >= 244) {
      child.remove();
    } else decoration.append(child);
  }
  const rim = element('path', {
    'data-token-frame-rim': '', fill: '#fff', 'fill-rule': 'evenodd',
    // A filled annulus has explicit inside/outside bounds; its paint never exceeds 0–512.
    d: 'M256 0a256 256 0 1 0 0 512a256 256 0 1 0 0-512Z M256 24a232 232 0 1 0 0 464a232 232 0 1 0 0-464Z',
  });
  root.setAttribute('width', String(TOKEN_SIZE));
  root.setAttribute('height', String(TOKEN_SIZE));
  root.setAttribute('viewBox', '0 0 512 512');
  root.setAttribute('data-token-frame-outline', 'circle');
  root.append(defs, decoration, rim);
  return document;
}

export function frameResolution(size: number, tokenSize: number, transform: FrameTransform): number {
  // Reuse raster sizes during dragging; a 1536 px export at 200% needs 3072 px.
  return clamp(Math.ceil(size * tokenSize / 100 * transform.scale / 100 / TOKEN_SIZE) * TOKEN_SIZE, TOKEN_SIZE, 3072);
}

function surface(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  return canvas;
}

function generatedTexture(kind: TextureKind, scale: number, contrast: number, size: number): HTMLCanvasElement {
  const canvas = surface(size);
  const context = canvas.getContext('2d')!;
  context.scale(size / TOKEN_SIZE, size / TOKEN_SIZE);
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
    const noise = surface(resolution);
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
    for (let row = -1; row < TOKEN_SIZE / scale + 1; row++) for (let column = -1; column < TOKEN_SIZE / scale + 1; column++) {
      const x = column * scale + (row % 2 ? scale / 2 : 0);
      context.beginPath(); context.arc(x, row * scale, scale / 2, 0, Math.PI); context.stroke();
    }
  }
  context.restore();
  return canvas;
}

export class TokenFrameRenderer {
  private rasters = new Map<HTMLImageElement, Map<number, HTMLCanvasElement>>();
  private rasterOrder: Array<{ source: HTMLImageElement; size: number; canvas: HTMLCanvasElement }> = [];
  private rasterPixels = 0;
  private apertures = new WeakMap<HTMLImageElement, number>();
  private textures = new Map<string, HTMLCanvasElement>();
  private output = surface(TOKEN_SIZE);
  private paintedSource: HTMLImageElement | null = null;
  private paintedKey = '';

  private raster(source: HTMLImageElement, size: number): HTMLCanvasElement {
    const cached = this.rasters.get(source)?.get(size);
    if (cached) {
      const index = this.rasterOrder.findIndex(entry => entry.canvas === cached);
      this.rasterOrder.push(...this.rasterOrder.splice(index, 1));
      return cached;
    }
    // Bound memory across all presets, including large export masks (about 48 MiB).
    while (this.rasterOrder.length && this.rasterPixels + size * size > 12 * 1024 * 1024) {
      const oldest = this.rasterOrder.shift()!;
      const sizes = this.rasters.get(oldest.source)!;
      sizes.delete(oldest.size);
      if (!sizes.size) this.rasters.delete(oldest.source);
      this.rasterPixels -= oldest.size * oldest.size;
    }
    const canvas = surface(size);
    const context = canvas.getContext('2d')!;
    context.imageSmoothingQuality = 'high';
    context.drawImage(source, 0, 0, size, size);
    let sizes = this.rasters.get(source);
    if (!sizes) { sizes = new Map(); this.rasters.set(source, sizes); }
    sizes.set(size, canvas);
    this.rasterOrder.push({ source, size, canvas });
    this.rasterPixels += size * size;
    return canvas;
  }

  texture(paint: FramePaint, size = TOKEN_SIZE): HTMLCanvasElement {
    const key = `${paint.textureKind}:${paint.textureScale}:${paint.textureContrast}:${size}`;
    let canvas = this.textures.get(key);
    if (!canvas) {
      // Keep only the latest parameters at each resolution, within the same pixel budget.
      for (const [oldKey, oldCanvas] of this.textures) if (oldCanvas.width === size) this.textures.delete(oldKey);
      let pixels = Array.from(this.textures.values()).reduce((sum, item) => sum + item.width * item.height, 0);
      while (this.textures.size && pixels + size * size > 12 * 1024 * 1024) {
        const oldestKey = this.textures.keys().next().value!;
        const oldest = this.textures.get(oldestKey)!;
        pixels -= oldest.width * oldest.height;
        this.textures.delete(oldestKey);
      }
      canvas = generatedTexture(paint.textureKind, paint.textureScale, paint.textureContrast, size);
      this.textures.set(key, canvas);
      if (this.textures.size > 3) this.textures.delete(this.textures.keys().next().value!);
    }
    return canvas;
  }

  apertureRadius(source: HTMLImageElement): number {
    const cached = this.apertures.get(source);
    if (cached !== undefined) return cached;
    const pixels = this.raster(source, TOKEN_SIZE).getContext('2d')!.getImageData(0, 0, TOKEN_SIZE, TOKEN_SIZE).data;
    const alpha = (r: number, angle: number) => {
      const x = clamp(Math.floor(TOKEN_RADIUS + Math.cos(angle) * r), 0, TOKEN_SIZE - 1);
      const y = clamp(Math.floor(TOKEN_RADIUS + Math.sin(angle) * r), 0, TOKEN_SIZE - 1);
      return pixels[(y * TOKEN_SIZE + x) * 4 + 3];
    };
    let radius = TOKEN_RADIUS - 2;
    let hits = 0;
    // Find the inside of the outer rim, rather than internal decorative rings.
    for (let degree = 0; degree < 360; degree++) {
      const angle = degree * Math.PI / 180;
      let outer = 0;
      for (let r = TOKEN_RADIUS - 1; r > 0; r--) {
        const a = alpha(r, angle);
        if (!outer && a >= 64) outer = r;
        if (outer && a < 32) {
          radius = Math.min(radius, Math.max(1, Math.min(r + 2, outer - 1)));
          hits++;
          break;
        }
      }
    }
    if (hits < 270) radius = TOKEN_RADIUS - 2;
    this.apertures.set(source, radius);
    return radius;
  }

  paint(source: HTMLImageElement, paint: FramePaint, size: number): HTMLCanvasElement {
    const raster = this.raster(source, size);
    if (paint.borderFill === 'original') return raster;
    const key = JSON.stringify([size, paint.borderFill, paint.borderColor, paint.gradientColors, paint.gradientAngle,
      paint.textureKind, paint.textureScale, paint.textureContrast, paint.textureOffsetX, paint.textureOffsetY]);
    if (this.paintedSource === source && this.paintedKey === key) return this.output;
    const canvas = this.output;
    if (canvas.width !== size) canvas.width = canvas.height = size;
    const context = canvas.getContext('2d')!;
    context.globalCompositeOperation = 'source-over';
    context.clearRect(0, 0, size, size);
    if (paint.borderFill === 'texture') {
      const pattern = context.createPattern(this.texture(paint, size), 'repeat')!;
      pattern.setTransform(new DOMMatrix().translate(paint.textureOffsetX * size / TOKEN_SIZE, paint.textureOffsetY * size / TOKEN_SIZE));
      context.fillStyle = pattern;
    } else if (paint.borderFill === 'gradient') {
      const angle = paint.gradientAngle * Math.PI / 180;
      const dx = Math.cos(angle) * size / 2;
      const dy = Math.sin(angle) * size / 2;
      const gradient = context.createLinearGradient(size / 2 - dx, size / 2 - dy, size / 2 + dx, size / 2 + dy);
      paint.gradientColors.forEach((color, index) => gradient.addColorStop(index / (paint.gradientColors.length - 1), color));
      context.fillStyle = gradient;
    } else context.fillStyle = paint.borderColor;
    context.fillRect(0, 0, size, size);
    context.globalCompositeOperation = 'destination-in';
    context.drawImage(raster, 0, 0);
    context.globalCompositeOperation = 'source-over';
    this.paintedSource = source;
    this.paintedKey = key;
    return canvas;
  }
}
