import React, { useState } from "react";
import ImageCropUpload from "./ImageEditor";
import { useUserInfo } from "stateStore/useUserInfo";
import NameEditor from "./NameEditor";
import { updateProfile } from "../api";
import { useNavigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "hooks/useAuth";

export interface ProfileEditorResponse {
  info: {
    nickname: string;
  };
  profileImage: string;
}
const regex = /^[\p{L}\p{N}\s]{2,30}$/u;

const ProfileEditor = () => {
  const queryClient = useQueryClient();
  const { updateUserInfo, userInfo, profileUpdateMutation } = useAuth();
  const [name, setName] = useState(userInfo?.nickname || "");
  const [nameAvailable, setNameAvailable] = useState<boolean>(true); // 닉네임 중복 검사 결과 [true: 사용 가능, false: 중복]
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [croppedImageFile, setCroppedImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameAvailable) return;
    if (!name || !regex.test(name)) {
      alert("닉네임을 확인해주세요");
      return;
    }
    profileUpdateMutation.mutate({
      nickname: name,
      imageFile: croppedImageFile || imageFile || null,
    });
    navigate(getLangUrl("/dashboard"));
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-4xl mx-auto justify-center items-center gap-10 py-20">
      <h1 className="text-3xl font-bold">{t("profile.title")}</h1>
      <form onSubmit={handleEditSubmit} className="flex flex-col gap-16">
        <NameEditor
          name={name}
          setName={setName}
          nameAvailable={nameAvailable}
          setNameAvailable={setNameAvailable}
        />
        <ImageCropUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          croppedImage={croppedImage}
          setCroppedImage={setCroppedImage}
          croppedImageFile={croppedImageFile}
          setCroppedImageFile={setCroppedImageFile}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-2xl">
          {t("profile.submit")}
        </button>
      </form>
    </div>
  );
};
export default ProfileEditor;
