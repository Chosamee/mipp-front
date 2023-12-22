import React, { useState } from "react";
import axios from "axios";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ filepath }) => {
  const [fileUrl, setfileUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = async () => {
    const downUrl = process.env.REACT_APP_MIPP_API_URL + "/download";
    const formData = new FormData();
    formData.append("filepath", filepath);
    axios
      .post(downUrl, formData, {
        responseType: "blob", // 중요: 서버의 응답을 Blob으로 처리',
      })
      .then((response) => {
        // Blob 데이터를 이용하여 다운로드 링크 생성
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filepath + ".pdf"); // 파일명 설정
        document.body.appendChild(link);
        link.click();

        // 사용 후 링크 제거 및 URL 해제
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download error:", error));
  };

  const handlePreview = async () => {
    const downUrl = process.env.REACT_APP_MIPP_API_URL + "/download";
    const formData = new FormData();
    formData.append("filepath", filepath);
    await axios
      .post(downUrl, formData, {
        responseType: "blob", // 중요: 서버의 응답을 Blob으로 처리',
      })
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );
        setfileUrl(url);
      })
      .catch((error) => console.error("Download error:", error));
  };

  return (
    <div>
      <div className="m-4">
        <button
          onClick={() => {
            if (isOpen) setIsOpen(false);
            else {
              handlePreview();
              setIsOpen(true);
            }
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
          미리보기
        </button>
        <button onClick={handleDownload} className="px-4 py-2 bg-green-500 text-white rounded">
          다운로드
        </button>

        {isOpen && (
          <div className="relative border rounded overflow-hidden">
            <iframe src={fileUrl} className="w-full" title={filepath} height={1000}></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
