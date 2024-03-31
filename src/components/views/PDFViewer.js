import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css"; // TextLayer 스타일
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // AnnotationLayer 스타일
import { downloadPDF } from "api/pdfService";
import LoadingSpinner from "./LoadingSpinner";

// PDF.js에서 사용되는 worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ filepath, title }) => {
  const [fileUrl, setFileUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.8);

  useEffect(() => {
    const updatePageWidth = () => {
      setPageWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", updatePageWidth);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updatePageWidth);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handlePreview = async () => {
    if (!fileUrl && !isLoading) {
      setIsLoading(true);
      try {
        const url = await downloadPDF(filepath); // 서버로부터 PDF 파일 받아오기
        setFileUrl(url); // 받아온 URL을 상태에 저장
      } catch (error) {
        console.error("Preview error:", error);
      }
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const url = await downloadPDF(filepath);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  const onLinkClick = (e) => {
    const href = e.target.getAttribute("href");
    if (href) {
      window.open(href, "_blank");
      e.preventDefault();
    }
  };
  return (
    <div className="m-4">
      <div>{title}</div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          handlePreview();
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
        Preview
      </button>
      <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
        Download
      </button>
      {isLoading && <LoadingSpinner />}
      {isOpen && fileUrl && (
        <div className="flex flex-col items-center overflow-auto md:h-[600px] h-[500px] md:h-[700px] lg:[h-900px]">
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div>Loading PDF...</div>}>
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className="border-2 border-gray-300 m-2 p-2 bg-white shadow-lg">
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={Math.min(pageWidth, 1000)} // 동적으로 계산된 페이지 너비 사용
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                  onClick={onLinkClick}
                />
              </div>
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
