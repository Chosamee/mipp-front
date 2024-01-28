import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMedia } from "../../api/uploadService";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";

const YoutubeLinkComp = ({ inst, bpm }) => {
  // 유튜브 링크 값 입력 인식
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const { t } = useTranslation();
  // routing을 위한 함수
  const navigate = useNavigate();

  // 서버에 전송하는 함수
  const handleSubmit = async () => {
    if (!inputValue) {
      alert(t("home.linkInputGuide"));
      return;
    }
    if (!isSubmit) {
      setIsSubmit(true);
      try {
        await uploadMedia({ url: inputValue, inst: inst });
        navigate(getLangUrl("/result"));
      } catch (error) {
        console.log(error);
        navigate(getLangUrl("/home"));
      }
    }
  };

  return (
    <React.Fragment>
      <div className="mb-5 w-[420px] text-start">{t("home.linkGuide")}</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t("home.linkInputGuide")}
        className="px-4 py-2 border rounded-full mb-4 w-full border-black"
      />
      <button
        onClick={handleSubmit}
        className="w-[420px] py-[20px] bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
        {t("home.submit")}
      </button>
    </React.Fragment>
  );
};

export default YoutubeLinkComp;
