import { useTranslation } from "react-i18next";
import image1 from "img/intro/icons8-name-tag-100.png";
import image2 from "img/intro/icons8-ophthalmology-100.png";
import image3 from "img/intro/icons8-music-100-2.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";
import FadeInComp from "components/views/FadeInComp";

const Intro = () => {
  const { t } = useTranslation();
  const images = { image1, image2, image3 };
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <div className="flex h-full items-center justify-center my-auto xl:pt-32 md:pt-48 pt-32 max-w-[1500px] mx-auto">
      <div className="p-5 w-full">
        <div className="text-4xl md:mb-20 mb-10 font-bold md:text-left text-center p-2">
          {t("nav.intro")}
        </div>
        <div className="mx-auto flex flex-col mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {Object.keys(images).map((key, i) => (
              <FadeInComp
                data={
                  <div className="p-4 h-full" key={i}>
                    <div className="flex flex-col px-10 mb-10 text-center items-center border-4 border-blue-300 bg-blue-50 rounded-2xl shadow-2xl h-full">
                      <img src={images[key]} alt={`img ${i}`} className="w-12 h-12 mb-4 mt-10" />
                      <div className="md:text-3xl text-xl mb-5 font-bold">
                        {t(`index.3.subtitle${i + 1}`)}
                      </div>
                      <div className="md:text-xl text-sm">{t(`index.3.content${i + 1}`)}</div>
                    </div>
                  </div>
                }
                animate={`fade-in-up-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Call to Action Button */}
        <div className="flex justify-center mb-10 md:mt-20 mt-10">
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
