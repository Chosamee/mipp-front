import React, { useState } from "react";
import { downloadPDF } from "../../api/pdfService";

const PDFViewer = ({ filepath, title }) => {
  const [fileUrl, setfileUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = async () => {
    try {
      const url = await downloadPDF(filepath);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filepath + ".pdf");
      document.body.appendChild(link);
      link.click();
      // 사용 후 링크 제거 및 URL 해제
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  const handlePreview = async () => {
    try {
      const url = await downloadPDF(filepath);
      setfileUrl(url);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <div>
      <div className="m-4">
        <div className="">{title}</div>
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
