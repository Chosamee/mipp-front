import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage";
import { Area } from "react-easy-crop/types";
import { updateProfileImage } from "../api";
import { useTranslation } from "react-i18next";

interface ImageEditorProps {
  imageFile: File | null;
  setImageFile: (imageSrc: File) => void;
  imageSrc: string | null;
  setImageSrc: (imageSrc: string) => void;
  croppedImage?: string | null;
  setCroppedImage: (croppedImage: string) => void;
  croppedImageFile?: File | null;
  setCroppedImageFile: (croppedImageFile: File) => void;
}

// 이미지 파일을 읽어서 Data URL로 변환
const readFile = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const ImageCropUpload = ({
  imageFile,
  setImageFile,
  imageSrc,
  setImageSrc,
  croppedImageFile,
  setCroppedImage,
  setCroppedImageFile,
  croppedImage,
}: ImageEditorProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const showCroppedImage = useCallback(async () => {
    if (!imageSrc) window.alert("Please upload image");
    try {
      if (croppedAreaPixels && imageSrc) {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        setCroppedImage(croppedImage);
        const croppedImageFile = await urlToImage(croppedImage);
        setCroppedImageFile(croppedImageFile);
      }
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imageSrc]);

  const urlToImage = async (url: string): Promise<File> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], "croppedImage.png", { type: "image/png" });
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">{t("profile.프로필 이미지")}</h2>
      <p className="text-sm">{t("profile.profileImageGuide")}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center gap-5">
          <label className="cursor-pointer border-2 w-[300px] p-2 rounded-xl">
            <div className="text-xl text-center">{t("profile.이미지 업로드")}</div>
            <input type="file" accept="image/*" onChange={onFileChange} className="hidden"></input>
          </label>

          {imageSrc ? (
            <div style={{ position: "relative", width: 300, height: 300 }}>
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
          ) : (
            <div className="flex items-center justify-center relative w-[300px] h-[300px] border-4">
              <div>{t("profile.이미지를 업로드 해주세요")}</div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-5">
          <button
            type="button"
            onClick={showCroppedImage}
            className="cursor-pointer border-2 w-[300px] p-2 text-xl rounded-xl">
            {t("profile.이미지 자르기")}
          </button>

          {croppedImage ? (
            <>
              <img src={croppedImage} alt="Cropped" width={300} />
            </>
          ) : (
            <div className="flex items-center justify-center relative w-[300px] h-[300px] border-4">
              {t("profile.잘린 이미지")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCropUpload;
