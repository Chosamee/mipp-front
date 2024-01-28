import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileImg from "../../assets/file_select.svg";
import { uploadMedia } from "../../api/uploadService";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";

const FileUploadComp = ({ inst, bpm }) => {
  const [uploadFile, setUploadFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    if (file) {
      // 파일 확장자 체크
      const allowedExtensions = ["wav", "mp3", "aiff", "aif", "flac", "ogg"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert(t("uploadError"));
        return;
      } else {
        setUploadFile(file);
      }
    }
  };

  const handleSubmit = async () => {
    if (uploadFile && !isSubmit) {
      setIsSubmit(true);
      try {
        await uploadMedia({ file: uploadFile, inst: inst });
        navigate(getLangUrl("/result"));
      } catch (error) {
        navigate(getLangUrl("/home"));
      }
    } else {
      alert(t("home.uploadGuide"));
      return;
    }
  };

  return (
    <React.Fragment>
      <label className="mb-6 mx-auto w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-blue-500">
        <img className="" src={fileImg} alt="Select File"></img>
        <span className="mt-2 text-base leading-normal">{fileName || t("home.uploadGuide")}</span>
        <input
          type="file"
          accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="w-[500px] px-4 py-[20px] bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 ">
        {t("home.submit")}
      </button>
    </React.Fragment>
  );
};

export default FileUploadComp;
