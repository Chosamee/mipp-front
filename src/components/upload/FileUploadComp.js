import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileSelect from "../../assets/file_select.svg";
import fileSelected from "../../assets/file_selected.svg";
import fileSelectHover from "../../assets/file_select_hover.svg";

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
      <div className="w-[420px]">
        <label
          className="group mb-6 mx-auto w-full flex flex-col items-center px-4 py-10 text-blue rounded-[12px]
      border-2 border-[#C7CCD9] border-dashed bg-[#F8F9FC] cursor-pointer hover:bg-[#E1EBFF] hover:text-[#3B59FA] hover:border-[#A1B5E8]">
          {!fileName ? (
            <React.Fragment>
              <img src={fileSelect} alt="File Select" className="group-hover:hidden" />
              <img
                src={fileSelectHover}
                alt="File Select Hover"
                className="hidden group-hover:block"
              />
            </React.Fragment>
          ) : (
            <img src={fileSelected} alt="File Selected" />
          )}

          <div
            className={`mt-[14px] text-[16px] font-medium leading-[24px] ${
              fileName && "text-[#3B59FA]"
            }`}>
            {fileName || t("home.uploadGuide")}
          </div>
          <input
            type="file"
            accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="w-[420px] px-4 py-[20px] bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 ">
        {t("home.submit")}
      </button>
    </React.Fragment>
  );
};

export default FileUploadComp;
