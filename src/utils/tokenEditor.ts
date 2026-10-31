export const TOKEN_SIZE = 512;
export const TOKEN_RADIUS = 256;
// The built-in outer rim occupies radii 232–256. Keep a 2 px overlap beneath it.
export const BUILTIN_FRAME_APERTURE = 234;
export type TokenTransform = { x: number; y: number; zoom: number; rotation: number; fit: 'fill' | 'contain' };
export type FrameTransform = { x: number; y: number; scale: number; rotation: number };

export function initialTransform(): TokenTransform {
  return { x: 0, y: 0, zoom: 100, rotation: 0, fit: 'fill' };
}

export function initialFrameTransform(): FrameTransform {
  return { x: 0, y: 0, scale: 100, rotation: 0 };
}

export function imageScale(width: number, height: number, transform: TokenTransform, radius = TOKEN_RADIUS): number {
  const dimension = transform.fit === 'fill' ? Math.min(width, height) : Math.hypot(width, height);
  return (radius * 2 / dimension) * (transform.zoom / 100);
}

export function tokenFilename(value: string): string {
  const name = value.trim().replace(/\.png$/i, '').replace(/[<>:"/\\|?*\u0000-\u001f]/g, '-').replace(/[. ]+$/g, '').slice(0, 80);
  return `${name || 'token'}.png`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function drawToken(context: CanvasRenderingContext2D, size: number, image: HTMLImageElement | null, border: CanvasImageSource | null, transform: TokenTransform, background: string | null, tokenSize = 100, frameTransform: FrameTransform = initialFrameTransform(), frameApertureRadius = BUILTIN_FRAME_APERTURE) {
  context.clearRect(0, 0, size, size);
  context.save();
  context.scale(size / TOKEN_SIZE, size / TOKEN_SIZE);
  const radius = TOKEN_RADIUS * tokenSize / 100;
  const frameScale = tokenSize / 100 * frameTransform.scale / 100;
  context.save();
  context.beginPath();
  context.arc(
    TOKEN_SIZE / 2 + (border ? frameTransform.x : 0),
    TOKEN_SIZE / 2 + (border ? frameTransform.y : 0),
    border ? frameApertureRadius * frameScale : radius, 0, Math.PI * 2,
  );
  context.clip();
  if (background) { context.fillStyle = background; context.fillRect(0, 0, TOKEN_SIZE, TOKEN_SIZE); }
  if (image) {
    context.translate(TOKEN_SIZE / 2 + transform.x, TOKEN_SIZE / 2 + transform.y);
    context.rotate(transform.rotation * Math.PI / 180);
    const scale = imageScale(image.naturalWidth, image.naturalHeight, transform, radius);
    context.scale(scale, scale);
    context.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
  }
  context.restore();
  if (border) {
    context.save();
    context.translate(TOKEN_SIZE / 2 + frameTransform.x, TOKEN_SIZE / 2 + frameTransform.y);
    context.rotate(frameTransform.rotation * Math.PI / 180);
    context.scale(frameScale, frameScale);
    context.drawImage(border, -TOKEN_SIZE / 2, -TOKEN_SIZE / 2, TOKEN_SIZE, TOKEN_SIZE);
    context.restore();
  }
  context.restore();
}
