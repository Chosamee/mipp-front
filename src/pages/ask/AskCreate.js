import React, { useState, useEffect } from "react";
import { addAsks } from "../../api/askService";
import { useNavigate } from "react-router-dom";

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

const AskCreate = () => {
  const [inquiry, setInquiry] = useState({
    title: "",
    contents: "",
    files: [],
  });
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleFileChange = (e) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf|\.docx)$/i;
    const newFiles = Array.from(e.target.files).filter((file) => {
      if (!allowedExtensions.exec(file.name)) {
        alert(`${file.name} 파일은 허용되지 않는 확장자를 가지고 있습니다.`);
        return false;
      }
      return true;
    });

    let totalSize = newFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize + inquiry.files.reduce((acc, file) => acc + file.size, 0) > MAX_FILE_SIZE) {
      alert("첨부파일 총 용량은 30MB를 초과할 수 없습니다.");
      return;
    }

    const nonDuplicateFiles = newFiles.filter(
      (newFile) => !inquiry.files.some((existingFile) => existingFile.name === newFile.name)
    );

    setInquiry((prev) => ({
      ...prev,
      files: [...prev.files, ...nonDuplicateFiles],
    }));
    setIsDirty(true);
  };

  const handleFileDelete = (index) => {
    const newFiles = inquiry.files.filter((_, fileIndex) => fileIndex !== index);
    setInquiry({ ...inquiry, files: newFiles });
  };

  const handleSubmit = async (e) => {
    console.log(inquiry);
    e.preventDefault();
    if (!inquiry.title || !inquiry.contents) {
      // 사용자에게 문의 제목과 내용이 필수임을 알립니다.
      alert("문의 제목과 내용을 모두 입력해주세요.");
      return;
    }
    try {
      const response = await addAsks({
        title: inquiry.title,
        contents: inquiry.contents,
        files: inquiry.files,
      });
      console.log(response);
    } catch (error) {
      console.log("add asks error:", error);
    }
    setIsDirty(false);
    navigate("/asks");
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "작성 중인 내용이 있습니다. 페이지를 벗어나시겠습니까?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const renderFileList = () => {
    return (
      <div className="overflow-y-auto h-32 w-full bg-gray-100 border border-gray-300 rounded p-2">
        {inquiry.files.length > 0 ? (
          <ul>
            {inquiry.files.map((file, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex justify-between items-center py-1">
                {file.name}
                <button
                  onClick={() => handleFileDelete(index)}
                  className="text-red-500 text-xs ml-4">
                  삭제
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">첨부된 파일이 없습니다.</p>
        )}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 min-w-96 mx-auto my-10 p-8 bg-white rounded shadow-lg xl:pt-32 md:pt-48 pt-32 ">
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
          문의 제목
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="문의 제목을 입력해주세요."
          value={inquiry.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="contents" className="block mb-2 text-sm font-medium text-gray-900">
          문의 내용
        </label>
        <textarea
          id="contents"
          name="contents"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="여기에 문의 내용을 작성해주세요."
          value={inquiry.contents}
          onChange={handleInputChange}></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">
          첨부 파일
        </label>
        <input
          type="file"
          id="file"
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer focus:outline-none"
          onChange={handleFileChange}
          multiple
        />
        {renderFileList()}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
        문의하기
      </button>
    </form>
  );
};

export default AskCreate;
