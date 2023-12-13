import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FileUploadComp = (props) => {
  const apiUrl = props.apiUrl;
  const [uploadFile, setUploadFile] = useState();
  const navigate = useNavigate();

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
    <div>
      <h2>File Upload</h2>
      <input
        type="file"
        accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>서버에 전송</button>
    </div>
  );
};

export default FileUploadComp;
