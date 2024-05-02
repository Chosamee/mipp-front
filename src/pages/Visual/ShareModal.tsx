import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { shareVisualResult } from "./api";
import { useAuth } from "hooks/useAuth";

const ShareModal = ({ numericId }: { numericId: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const { isLoggedIn } = useAuth();

  const { data } = useQuery({
    queryKey: ["shareToken", numericId],
    queryFn: () => shareVisualResult(numericId),
    enabled: numericId !== 0 && isLoggedIn, // id가 존재할 때만 쿼리 실행
    staleTime: Infinity,
  });

  const url = window.location.href.split("?")[0];
  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Text copied to clipboard!"); // 성공 메시지
    } catch (error) {
      console.error("Failed to copy:", error); // 실패 메시지
    }
  };

  return (
    <div className="fixed flex flex-col top-20 right-5 z-20">
      <button
        className="relative w-20 h-10 text-white bg-blue-500 rounded-xl z-20 justify-end items-end ml-auto"
        onClick={toggleModal}>
        Share
      </button>
      {data && isOpen && (
        <div className="relative flex flex-col w-80 md:w-96 text-white bg-gray-600 rounded-xl z-20 p-5 gap-3">
          <p>Please click or copy the link below:</p>
          <a
            href={`${url}?token=${data.share_token}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all">
            {`${url}?token=${data.share_token}`}
          </a>
          <button
            onClick={() => {
              copyToClipboard(`${url}?token=${data.share_token}`);
            }}>
            Copy
          </button>
          <button onClick={toggleModal} className="">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareModal;
