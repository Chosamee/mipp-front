import { useTranslation } from "react-i18next";
import image1 from "img/intro/icons8-name-tag-100.png";
import image2 from "img/intro/icons8-ophthalmology-100.png";
import image3 from "img/intro/icons8-music-100-2.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";

const Intro = () => {
  const { t } = useTranslation();
  const images = { image1, image2, image3 };
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <div className="flex h-full items-center justify-center my-auto pt-32 max-w-[1500px] mx-auto">
      <div className="p-10 w-full">
        <div className="text-4xl mb-20 font-bold">{t("nav.intro")}</div>
        <div className="mx-auto flex flex-col mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {Object.keys(images).map((key, i) => (
              <div className="p-4" key={i}>
                <div className="flex flex-col px-10 mb-10 text-center items-center border-4 border-blue-300 bg-blue-50 rounded-2xl shadow-2xl h-full">
                  <img src={images[key]} alt={`img ${i}`} className="w-12 h-12 mb-4 mt-10" />
                  <div className="text-3xl mb-5 font-bold">{t(`index.3.subtitle${i + 1}`)}</div>
                  <div className="text-xl">{t(`index.3.content${i + 1}`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action Button */}
        <div className="flex justify-center mb-10 mt-20">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-xl"
            onClick={() =>
              authState.isLoggedIn ? navigate(getLangUrl("/home")) : navigate(getLangUrl("/login"))
            }>
            {t("startChecking")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
