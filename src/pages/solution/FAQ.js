import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FAQ_DATA_KR = [
  {
    question: "로그인이 안돼요. 어떻게 해야 하나요?",
    answer:
      "로그인 문제는 주로 쿠키 설정에 의해 생길 수 있습니다. 크롬 브라우저를 이용하시고, 시크릿탭에서 로그인을 시도해 보세요.",
  },
  {
    question: "'링크 혹은 파일에 오류가 있습니다'라는 메시지가 나타나는데, 어떻게 해결하나요?",
    answer:
      "제공된 파일이나 링크가 유효한지 다시 확인해 주세요. 현재 Youtube와 Soundcloud 링크만 지원되며, Tiktok이나 Apple Music과 같은 다른 링크는 지원되지 않습니다.",
  },
  {
    question: "'처리 대기 중' 상태에서 진행이 안 됩니다. 어떻게 해야 하나요?",
    answer:
      "처리 대기 중 상태는 다른 사용자의 작업이 처리되고 있을 때 발생할 수 있습니다. 그러나 1시간 이상 동일 상태가 지속된다면 시스템 문제일 수 있으니, 다시 시도해 주세요.",
  },
  {
    question: "'해당 악기가 없습니다'라는 메시지가 나왔어요. 이유가 무엇인가요?",
    answer:
      "이 메시지는 보컬만 있는 트랙에 악기 모드를 선택하거나, 악기만 있는 트랙에 보컬 모드를 선택했을 때 발생할 수 있습니다. 또한, 곡 길이가 너무 짧아 모델이 분석하기 어려웠을 가능성도 있습니다.",
  },
  {
    question: "'표절곡이 없거나 파일 생성에 문제가 있습니다'라고 나와요. 어떻게 해야 하나요?",
    answer:
      "저희 데이터베이스에서 유사한 음원을 찾지 못했을 때 이 메시지가 나타납니다. 더 나은 분석 데이터를 제공하기 위해 서비스를 지속적으로 업데이트 중입니다.",
  },
  {
    question: "검사 시작 버튼을 클릭해도 검사를 시작할 수 없어요. 어떻게 해야 하나요?",
    answer:
      "저희 서버에 문제가 있을 가능성이 높습니다. 추후에 다시 시도해 주세요. 혹은 1대1 문의를 통해 음원을 보내주시면 직접 파일을 보내드리겠습니다.",
  },
  {
    question: "'오류가 발생했습니다'라는 메시지가 나타나요. 어떻게 해야 하나요?",
    answer:
      "이유를 알 수 없는 오류로 인해 문제가 발생한 경우입니다. 해당 문제가 지속된다면, 1대1 문의를 통해 음원을 보내주시면 직접 email로 파일을 보내드리겠습니다.",
  },
];

const FAQ_DATA_EN = [
  {
    question: "I can't log in. What should I do?",
    answer:
      "If you're experiencing login issues, it may be related to your cookie settings. Please try using Chrome browser and attempt to log in using incognito mode.",
  },
  {
    question: "I get a 'link error' message. How can I fix this?",
    answer:
      "Please ensure that the provided file or link is valid. Currently, only Youtube and Soundcloud links are supported. Other links, such as Tiktok or Apple Music, are not supported.",
  },
  {
    question: "My result stays 'In Queue' and doesn't proceed. What should I do?",
    answer:
      "The 'In Queue' status might occur when other users' requests are being processed. However, if this status persists for more than an hour, it might be in a system issue, so please try checking again.",
  },
  {
    question: "I received an 'Instrument Not Found' message. Why is this happening?",
    answer:
      "This message can appear if you select instrument mode for a vocals-only track, select vocal mode for a instrument-only track, or if the track is too short for analysis.",
  },
  {
    question: "It says 'No plagiarism or file generation error.' What should I do?",
    answer:
      "This message appears when no similar tracks are found in our database. We are continuously updating our service to provide analysis data even in such cases.",
  },
  {
    question: "I clicked start checking button, but I can't start the check. What should I do?",
    answer:
      "It's likely an issue with our server. Please try again later, or use our Support feature to send us the track directly.",
  },
  {
    question: "I'm getting an 'Error Occurred' message. What should I do?",
    answer:
      "This message indicates an issue due to unknown reasons. If the problem persists, please use our Support feature to send us the track directly, and we will send the file to you via email.",
  },
];

const FAQ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedItem, setExpandedItem] = useState(null);
  const ITEMS_PER_PAGE = 5;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const [FAQData, setFAQData] = useState(FAQ_DATA_EN);
  const { i18n } = useTranslation();
  const currentItems = FAQData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (i18n.language === "ko") setFAQData(FAQ_DATA_KR);
    else setFAQData(FAQ_DATA_EN);
  }, [i18n.language]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedItem(null); // 현재 열린 항목 닫기
  };

  return (
    <div className="px-2 desktop:w-[750px] w-[375px] pt-16 pb-16 mx-auto">
      <h1 className="text-2xl font-bold pt-2 pb-2 mt-4 mb-6">FAQ</h1>

      {currentItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`${
              expandedItem === index ? "bg-blue-100" : "bg-gray-100"
            } p-4 cursor-pointer rounded-md flex justify-between items-center`}
            onClick={() => setExpandedItem(expandedItem === index ? null : index)}>
            <h3 className="text-lg font-semibold">
              Q . <span className="ml-2">{item.question}</span>
            </h3>
            {expandedItem === index ? (
              <span className="text-blue-500 ml-5">&#x25B2;</span>
            ) : (
              <span className="text-blue-500 ml-5">&#x25BC;</span>
            )}
          </div>
          {expandedItem === index && (
            <div className="bg-white p-4 mt-2 rounded-md shadow">
              <p className="ml-2">
                A .<span className="ml-2">{item.answer}</span>
              </p>
            </div>
          )}
        </div>
      ))}
      {/* Pagination */}
      {FAQ && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          {[...Array(Math.ceil(FAQData.length / ITEMS_PER_PAGE)).keys()].map((page, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
