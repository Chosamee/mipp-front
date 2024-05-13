import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import fileSelect from "assets/file_select.svg";
import fileSelected from "assets/file_selected.svg";
import fileSelectHover from "assets/file_select_hover.svg";

import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import LoadingSpinner from "components/views/LoadingSpinner";
import { IUploadProps } from "./types";
import { uploadMedia } from "../api";

const FileUploadComp = ({ inst, bpm }: IUploadProps) => {
  const [uploadFile, setUploadFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleFileChange = useCallback(
    (file: any) => {
      if (file) {
        // 파일 확장자 체크
        const allowedExtensions = ["wav", "mp3", "aiff", "aif", "flac", "ogg"];
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
          alert(t("home.uploadError"));
          return;
        } else {
          setFileName(file.name);
          setUploadFile(file);
        }
      }
    },
    [t]
  );
  const [isDragOver, setIsDragOver] = useState(false); // 드래그 상태 관리

  const onDragOver = (event: any) => {
    event.preventDefault(); // 기본 이벤트 방지
    setIsDragOver(true); // 드래그 상태를 true로 설정
  };

  const onDragLeave = () => {
    setIsDragOver(false); // 드래그 상태를 false로 설정
  };

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      const file = event.dataTransfer.files[0]; // 드래그된 파일 중 첫 번째 파일 사용
      handleFileChange(file);
    },
    [handleFileChange]
  );

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
    }
  };

  return (
    <React.Fragment>
      <div className="md:w-[420px] w-[335px]">
        <label
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`group mb-6 mx-auto w-full flex flex-col items-center px-4 py-10 text-blue rounded-[12px]
  ${isDragOver || fileName ? "bg-[#E1EBFF] border-[#A1B5E8] text-[#3B59FA]" : "bg-[#F8F9FC]"}
  ${isDragOver ? "border-[#A1B5E8]" : "border-[#C7CCD9]"}
  border-2 border-dashed cursor-pointer hover:bg-[#E1EBFF] hover:text-[#3B59FA] hover:border-[#A1B5E8]`}>
          {!fileName ? (
            <React.Fragment>
              {/* 드래그 상태일 때 항상 호버 이미지 표시 */}
              {isDragOver && <img src={fileSelectHover} alt="File Select Hover" />}

              {/* 드래그 상태가 아닐 때만 기본 이미지와 호버 이미지 전환 로직 적용 */}
              {!isDragOver && (
                <React.Fragment>
                  <img src={fileSelect} alt="File Select" className="group-hover:hidden" />
                  <img
                    src={fileSelectHover}
                    alt="File Select Hover"
                    className="hidden group-hover:block"
                  />
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <img src={fileSelected} alt="File Selected" />
          )}

          <div
            className={`mt-[14px] text-[16px] font-medium leading-[24px] gap-[3px] ${
              fileName && "text-[#3B59FA]"
            }`}>
            {fileName || (
              <>
                <p>{t("home.uploadGuide")}</p>
                <p className="text-center text-[14px] underline leading-[24px] text-[#3553F3]">
                  {t("home.uploadGuide2")}
                </p>
              </>
            )}
          </div>
          <input
            type="file"
            accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
            onChange={(event) => {
              if (event.target.files) handleFileChange(event.target.files[0]);
            }}
            className="hidden"
          />
        </label>
      </div>
      {isSubmit ? (
        <LoadingSpinner />
      ) : (
        <button
          onClick={handleSubmit}
          className="w-[326px] md:w-[420px] px-4 py-[20px] bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 ">
          {t("home.submit")}
        </button>
      )}
    </React.Fragment>
  );
};

export default FileUploadComp;
