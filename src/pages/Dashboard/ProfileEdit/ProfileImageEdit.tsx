import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage";
import { Area } from "react-easy-crop/types";
import { updateProfileImage } from "../api";

// 이미지 파일을 읽어서 Data URL로 변환
const readFile = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const ImageCropUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const showCroppedImage = useCallback(async () => {
    try {
      if (croppedAreaPixels && imageSrc) {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        setCroppedImage(croppedImage);
      }
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imageSrc]);

  const submit = async () => {
    if (croppedImage) {
      const image = await urlToImage(croppedImage);
      await updateProfileImage(image);
    }
  };

  const urlToImage = async (url: string): Promise<File> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], "croppedImage.png", { type: "image/png" });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {imageSrc && (
        <div style={{ position: "relative", width: 400, height: 400 }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      )}
      <button onClick={showCroppedImage}>Crop Image</button>
      {croppedImage && (
        <>
          <img src={croppedImage} alt="Cropped" width={200} />
          <button onClick={submit}>Upload</button>
        </>
      )}
    </div>
  );
};

export default ImageCropUpload;
