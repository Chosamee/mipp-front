import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import useWindowWidth from "components/utils/useWindowWidth";

const Step4 = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={t("howtouse.step4.title")}
        text={width < 550 ? t("howtouse.step4.textMobile") : t("howtouse.step4.text")}
      />
      <StepImage
        contents={
          <div className="flex flex-col p-[10px] items-center gap-[21.38px]">
            <div
              style={{
                WebkitMaskImage:
                  "conic-gradient(from -30deg at 50% 50%, #ffffff 0%, transparent 80%)",
                maskImage: "conic-gradient(from -30deg at 50% 50%, #ffffff 0%, transparent 80%)",
                width: "100px",
                height: "100px",
              }}>
              {/*위 코드에서 -30deg는 11시 방향에서 시작하도록 각도를 조정한 것이고, transparent 75%는 9시 방향에서 완전히 투명해지도록 설정 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none">
                <path
                  d="M5.32593 61.9704C3.32543 62.5064 2.12473 64.5688 2.80914 66.5235C5.64902 74.6344 10.54 81.898 17.0327 87.592C24.4677 94.1123 33.6692 98.2815 43.4737 99.5722C53.2782 100.863 63.2452 99.2175 72.1144 94.8436C80.9837 90.4698 88.3567 83.5642 93.3013 75C98.2458 66.4358 100.54 56.5977 99.8929 46.7298C99.2462 36.8619 95.6877 27.4074 89.6677 19.5619C83.6476 11.7164 75.4362 5.83223 66.072 2.65349C57.8945 -0.122399 49.1585 -0.726249 40.7143 0.869776C38.6793 1.25442 37.4936 3.32543 38.0296 5.32593C38.5656 7.32643 40.6207 8.49616 42.6606 8.13849C49.6658 6.91027 56.8888 7.45655 63.6612 9.75547C71.6208 12.4574 78.6004 17.4589 83.7175 24.1276C88.8346 30.7963 91.8592 38.8327 92.409 47.2204C92.9588 55.6081 91.0089 63.9704 86.8061 71.25C82.6032 78.5295 76.3361 84.3993 68.7973 88.1171C61.2584 91.8348 52.7864 93.2336 44.4526 92.1364C36.1188 91.0392 28.2976 87.4955 21.9778 81.9532C16.6007 77.2376 12.5161 71.2554 10.0772 64.5747C9.36696 62.6292 7.32643 61.4344 5.32593 61.9704Z"
                  fill="url(#paint0_angular_317_3212)"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_317_3212"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(50 50) rotate(164.055) scale(45.5007 42.5317)">
                    <stop stop-color="white" />
                    <stop offset="0.302083" stop-color="#1455FE" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="text-[#3B59FA] text-lg">
              {i18n.language === "en" ? "Plagiarism Checking..." : "표절 검사 중"}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Step4;
