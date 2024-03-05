import arrow from "assets/index/section2/Polygon 14.svg";
import left_elipse from "assets/index/section2/cont1/Ellipse 33.svg";
import right_elipse from "assets/index/section2/cont1/Ellipse 34.svg";

const TestReportImg = () => {
  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative rounded-[22px] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] bg-white">
      <div
        className="absolute desktop:text-[22px] text-[17px] desktop:left-[37px] desktop:top-[53px]
          left-[23px] top-[25px] font-medium leading-[22px] desktop:leading-[normal] ">
        Music Plagiarism <br className="desktop:hidden" /> Test Report
      </div>
      <div className="w-[119px] h-9 desktop:left-[373px] desktop:top-[48px] left-[186px] top-[29px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F] desktop:text-[16px] text-[14px]">
          Full status
        </div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="w-[159px] h-[236px] desktop:left-[37px] desktop:top-[131px] left-[23px] top-[87px] absolute">
        <div className="left-0 top-0 absolute text-[#ACACAC] desktop:text-[18px] text-[14px]">
          Original music
          <br />
          plagiarism section
        </div>
        <div className="left-0 desktop:top-[62px] top-[42px] absolute text-[#3553F3] desktop:text-[33px] text-[22px] font-medium">
          137
        </div>
        <div className="desktop:left-[67px] desktop:top-[68px] left-[43px] top-[50px] absolute text-[#CCC] desktop:text-[25px] text-[15px] font-medium">
          / 212
        </div>
        <div className="left-0 desktop:top-[140px] top-[90px] absolute text-[#ACACAC] desktop:text-[18px] text-[14px]">
          Comarative Music
          <br />
          Plagiarism Section
        </div>
        <div className="left-0 desktop:top-[197px] top-[130px] absolute text-[#3553F3] desktop:text-[33px] text-[22px] font-medium">
          154
        </div>
        <div className="desktop:left-[63px] desktop:top-[202px] left-[43px] top-[136px] absolute text-[#CCC] desktop:text-[25px] text-[15px] font-medium">
          / 224
        </div>
      </div>
      <div className="desktop:w-[188px] desktop:h-[188px] w-[113px] h-[113px] desktop:left-[264.5px] desktop:top-[131px] left-[177px] top-[93px] absolute">
        <img
          src={left_elipse}
          alt="Left elipse"
          className="top-0 absolute flex-shrink-0 desktop:w-[110px] w-[66px]"
        />
        <div
          className="desktop:w-[109px] desktop:h-[72px] desktop:left-[46.5px] desktop:top-[60px]
                          w-[61px] h-[42px] left-[29px] top-[36px] absolute">
          <div className="left-0 top-0 absolute text-[#3553F3] desktop:text-[60px] text-[35px] desktop:font-bold font-semibold">
            52
          </div>
          <div
            className="desktop:left-[75px] desktop:top-[24px] left-[43px] top-[14px] absolute text-[#3553F3]
                            desktop:text-[35px] text-[21px] desktop:font-bold font-semibold">
            %
          </div>
        </div>
        <img
          src={right_elipse}
          alt="Right elipse"
          className="right-0 top-0 absolute flex-shrink-0 desktop:w-[110px] w-[66px]"
        />
      </div>
      <div className="desktop:left-[275.50px] desktop:top-[344px] left-[182px] top-[227px] absolute text-center desktop:text-[18px] text-[11px] font-medium">
        Total Plagiarism Rate
      </div>
    </div>
  );
};

export default TestReportImg;
