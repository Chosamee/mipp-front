import React, { useState } from "react";
import { checkNameDuplicate } from "../api";
import { useTranslation } from "react-i18next";

interface NameEditorProps {
  name: string;
  setName: (name: string) => void;
  nameAvailable: boolean;
  setNameAvailable: (nameAvailable: boolean) => void;
}

const regex = /^[\p{L}\p{N}\s]{2,30}$/u;
const errorMessage: { [key: string]: string } = {
  duplicate: "중복된 닉네임입니다",
  needCheck: "중복 검사가 필요합니다",
  regexError: "errorNicknameRegex",
};

const NameEditor = ({ name, setName, nameAvailable, setNameAvailable }: NameEditorProps) => {
  const { t } = useTranslation();
  const [errorCode, setErrorCode] = useState<string>(""); // 에러 메시지 [duplicate: 중복, needCheck: 중복 검사 필요, regexError: 정규식 오류
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameAvailable(false);
    setName(e.target.value);
    if (!regex.test(e.target.value)) {
      setErrorCode("regexError");
    } else {
      setErrorCode("needCheck");
    }
  };

  const handleCheckNameDuplicate = async () => {
    if (!regex.test(name)) {
      setNameAvailable(false);
      return;
    }
    const response = await checkNameDuplicate(name);
    setErrorCode(response ? "duplicate" : "needCheck");
    setNameAvailable(response);
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
          {nameAvailable ? t("profile.사용 가능") : t("profile.사용 불가능")}
        </div>
        <button
          type="button"
          onClick={handleCheckNameDuplicate}
          className="border-2 p-2 rounded-lg bg-blue-600 text-white text-sm">
          {t("profile.checkDuplicate")}
        </button>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="text-sm" style={{ color: nameAvailable ? "green" : "red" }}>
          {nameAvailable ? "" : t(`profile.${errorMessage[errorCode]}`)}
        </div>
      </div>
    </div>
  );
};
export default NameEditor;
