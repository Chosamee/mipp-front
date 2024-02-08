import React, { useState, useEffect } from "react";
import { addAsks } from "../../api/askService";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import { useAuth } from "components/auth/AuthContext";

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

const AskCreate = () => {
  const [inquiry, setInquiry] = useState({
    title: "",
    contents: "",
    files: [],
  });
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleFileChange = (e) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf|\.docx)$/i;
    const newFiles = Array.from(e.target.files).filter((file) => {
      if (!allowedExtensions.exec(file.name)) {
        alert(`${file.name} ${t("ask.create.extensionError")}`);
        return false;
      }
      return true;
    });

    let totalSize = newFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize + inquiry.files.reduce((acc, file) => acc + file.size, 0) > MAX_FILE_SIZE) {
      alert(t("ask.create.volumeError"));
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
  const { updateAuthState } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inquiry.title || !inquiry.contents) {
      // 사용자에게 문의 제목과 내용이 필수임을 알립니다.
      alert(t("ask.create.requireError"));
      return;
    }
    const confirmSubmit = window.confirm(t("ask.create.confirm"));
    if (confirmSubmit) {
      try {
        const response = await addAsks({
          title: inquiry.title,
          contents: inquiry.contents,
          files: inquiry.files,
        });
      } catch (error) {
        console.error("add asks error:", error);
        updateAuthState({ isLoggedIn: false });
      }
      setIsDirty(false);
      navigate(getLangUrl("/asks"));
    } else {
      console.log("cancelled");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        const message = t("ask.create.confirmExit");
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">{t("ask.nofile")}</p>
        )}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 min-w-96 mx-auto p-8 bg-white rounded shadow-lg my-20">
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
          {t("ask.title")}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder={t("ask.titleGuide")}
          value={inquiry.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="contents" className="block mb-2 text-sm font-medium text-gray-900">
          {t("ask.content")}
        </label>
        <textarea
          id="contents"
          name="contents"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder={t("ask.contentGuide")}
          value={inquiry.contents}
          onChange={handleInputChange}></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">
          {t("ask.file")}
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
        {t("ask.submit")}
      </button>
    </form>
  );
};

export default AskCreate;
