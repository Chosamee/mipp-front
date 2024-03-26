import React, { useState } from "react";
import { checkNameDuplicate } from "../api";
import { useTranslation } from "react-i18next";

interface NameEditorProps {
  name: string;
  setName: (name: string) => void;
  nameAvailable: boolean;
  setNameAvailable: (nameAvailable: boolean) => void;
}

const regex = /^[ㄱ-힣a-zA-Z0-9]{0,8}$/;

const NameEditor = ({ name, setName, nameAvailable, setNameAvailable }: NameEditorProps) => {
  const { t } = useTranslation();
  const [checkStatus, setCheckStatus] = useState<boolean>(false); // 닉네임 중복 검사 여부 [true: 검사 완료, false: 미검사]
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex.test(e.target.value)) return;
    setNameAvailable(false);
    setCheckStatus(false);
    setName(e.target.value);
  };

  const handleCheckNameDuplicate = async () => {
    const response = await checkNameDuplicate(name);
    setNameAvailable(response);
    setCheckStatus(true);
  };

  return (
    <div className="flex flex-col w-[700px] gap-[14px] items-center justify-between">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row gap-6 items-center">
          <div className="text-xl font-semibold text-center">{t("profile.name")}</div>
          <input
            className="overflow-ellipsis text-[14px] font-medium w-80 border-[#E0E4E8] border-2 p-2 rounded-lg"
            type="text"
            placeholder={`name`}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="text-sm" style={{ color: nameAvailable ? "green" : "red" }}>
          {nameAvailable
            ? t("profile.사용 가능")
            : checkStatus
            ? t("profile.중복된 닉네임입니다")
            : t("profile.중복 검사가 필요합니다")}
        </div>
        <button
          type="button"
          onClick={handleCheckNameDuplicate}
          className="border-2 p-2 rounded-lg bg-blue-600 text-white text-sm">
          {t("profile.checkDuplicate")}
        </button>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="text-sm">{t("profile.errorNickname")}</div>
      </div>
    </div>
  );
};
export default NameEditor;
