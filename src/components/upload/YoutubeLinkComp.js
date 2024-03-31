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
        console.error(error);
        navigate(getLangUrl("/home"));
      }
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t("home.linkInputGuide")}
        className=" h-[60px] px-[33px] py-3 border rounded-[12px] mb-[14px] w-full border-black"
      />
      <div className="flex mb-12 w-[326px] md:w-[420px] text-start">
        <div className="text-[#D95E59] text-[14px] md:text-[16px] mr-[3px]">*</div>
        <div className="text-[#A0A0A0] text-[13px] md:text-[14px]">{t("home.linkGuide")}</div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-[326px] md:w-[420px] py-[20px] bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
        {t("home.submit")}
      </button>
    </React.Fragment>
  );
};

export default YoutubeLinkComp;
