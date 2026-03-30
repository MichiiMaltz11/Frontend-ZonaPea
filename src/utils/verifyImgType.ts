export function getImageSrc(img: File | string | null, fallback?: string): string {
  if (!img) return "";
  return img instanceof File ? URL.createObjectURL(img) : img;
}