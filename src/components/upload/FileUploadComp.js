import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadTokenFromLocalStorage } from "../../util/HandleToken";
import fileImg from "../../img/file_select.png";

const FileUploadComp = (props) => {
  const apiUrl = props.apiUrl;
  const [uploadFile, setUploadFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  const token = loadTokenFromLocalStorage();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
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
          navigate("/home");
        });
    } else {
      alert("파일을 업로드해주세요");
      return;
    }
  };

  return (
    <div className="flex flex-col mx-auto">
      <label className="mb-6 mx-auto w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-blue-500">
        <img className="" src={fileImg} alt="Select File"></img>
        <span className="mt-2 text-base leading-normal">{fileName || "파일을 선택하세요"}</span>
        <input
          type="file"
          accept=".wav, .mp3, .aiff, .aif, .flac, .ogg"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
        서버에 전송
      </button>
    </div>
  );
};

export default FileUploadComp;
