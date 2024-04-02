import circle3 from "assets/index/section2/cont3/Ellipse 37.svg";
import arrow from "assets/index/section2/Polygon 14.svg";

const IncomeImg = () => {
  return (
    <div className="flex-shrink-0 md:w-[529px] md:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px]  bg-white">
      <div className="md:top-[52px] md:left-[34px] top-[35px] left-[25px] absolute">
        <img src={circle3} alt="Circle 3" className="md:w-[28px] w-[22px]"></img>
        <div className="text-white md:text-[20px] text-[14px] font-medium absolute top-[2px] md:left-[8px] left-[7px]">
          $
        </div>
      </div>
      <div className="md:left-[72px] md:top-[51px] left-[55px] top-[36px] absolute md:text-[25px] text-[17px] font-medium">
        Total Income
      </div>
      <div className="w-[119px] h-9 md:left-[373px] md:top-[48px] left-[179px] top-[27px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F]">This Week</div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="md:w-[455px] md:h-[251px] w-[280px] h-[166px] md:left-[37px] left-[24px] md:top-[116px] top-[83px] absolute">
        <div className="md:left-[331px] md:top-[230px] left-[177px] top-[148px] absolute text-[#7E7E7E] md:text-[18px] text-[15px]">
          1.10 - 1.17, 2024
        </div>
        <div className="md:w-[453px] w-[278.769px] h-px left-0 md:top-[42px] top-[27px] absolute bg-[#E8E8E8]" />
        <div className="md:w-[453px] w-[278.769px] h-px left-0 md:top-[84px] top-[54px] absolute bg-[#E8E8E8]" />
        <div className="md:w-[453px] w-[278.769px] h-px left-0 md:top-[126px] top-[81px] absolute bg-[#E8E8E8]" />
        <div className="md:w-[453px] w-[278.769px] h-px left-0 md:top-[168px] top-[108px] absolute bg-[#E8E8E8]" />
        <div className="md:w-[453px] w-[278.769px] h-px left-0 md:top-[210px] top-[135px] absolute bg-[#E8E8E8]" />
        <div className="md:w-[453px] w-[278.769px] h-px left-0 top-0 absolute bg-[#E8E8E8]" />
        <div className="md:left-[0.50px] md:top-[11px] left-[2px] top-[12px] absolute md:text-[42px] text-[28px] font-semibold z-2">
          $18,756
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="455"
          height="163"
          viewBox="0 0 455 163"
          fill="none"
          className="absolute md:top-[36px] top-[12px] md:w-[453px] w-[280px]">
          <path
            d="M1 161.256L83.5381 113.364L160.318 103.786L231.339 48.2318L302.36 78.8824L377.22 17.5812L454 2.25586"
            stroke="#3553F3"
            strokeWidth="4"
          />
        </svg>
        <div className="md:left-[0.50px] md:top-[63px] left-[4px] top-[54px] absolute text-blue-600 md:text-[20px] text-[16px] font-semibold">
          +35.2%
        </div>
      </div>
    </div>
  );
};
export default IncomeImg;
