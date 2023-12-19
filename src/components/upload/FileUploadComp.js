import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadTokenFromLocalStorage } from "../../util/HandleToken";

const FileUploadComp = (props) => {
  const apiUrl = props.apiUrl;
  const [uploadFile, setUploadFile] = useState();
  const navigate = useNavigate();
  const token = loadTokenFromLocalStorage();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // 파일 확장자 체크
      const allowedExtensions = ["wav", "mp3", "aiff", "aif", "flac", "ogg"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert("허용되지 않는 파일 형식입니다. 음악 파일만 업로드 가능합니다.");
        return;
      } else {
        setUploadFile(file);
      }
    }
  };

  const handleSubmit = async () => {
    if (uploadFile) {
      // 업로드 준비
      const formData = new FormData();
      formData.append("file", uploadFile);
      formData.append("token", token);
      formData.append("inst", props.inst);
      // 서버 엔드포인트에 파일 전송
      await axios
        .post(apiUrl, formData)
        .then((response) => {
          console.log(response.data);
          navigate("/result", { state: { result: response.data.result } });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      alert("파일을 업로드해주세요");
      return;
    }
  };

  return (
    <div className="flex flex-col mx-auto">
      <input
        type="file"
        accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
        onChange={handleFileChange}
      />
      <button
        onClick={handleSubmit}
        className="p-1 mt-4  rounded-lg
        bg-blue-300 hover:bg-blue-500">
        서버에 전송
      </button>
    </div>
  );
};

export default FileUploadComp;
