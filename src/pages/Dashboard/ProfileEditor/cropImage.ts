import { Area } from "react-easy-crop";
export async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<string> {
  const image = new Image();
  image.src = imageSrc;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas not supported");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x * scaleX,
    pixelCrop.y * scaleY,
    pixelCrop.width * scaleX,
    pixelCrop.height * scaleY,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        // reject(new Error('Canvas is empty'));
        console.error("Canvas is empty");
        return;
      }
      window.URL.revokeObjectURL(imageSrc);
      resolve(window.URL.createObjectURL(blob));
    }, "image/jpeg");
  });
}
