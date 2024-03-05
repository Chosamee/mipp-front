import circle3 from "assets/index/section2/cont3/Ellipse 37.svg";
import arrow from "assets/index/section2/Polygon 14.svg";

const IncomeImg = () => {
  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px]  bg-white">
      <div className="desktop:top-[52px] desktop:left-[34px] top-[35px] left-[25px] absolute">
        <img src={circle3} alt="Circle 3" className="desktop:w-[28px] w-[22px]"></img>
        <div className="text-white desktop:text-[20px] text-[14px] font-medium absolute top-[2px] desktop:left-[8px] left-[7px]">
          $
        </div>
      </div>
      <div className="desktop:left-[72px] desktop:top-[51px] left-[55px] top-[36px] absolute desktop:text-[25px] text-[17px] font-medium">
        Total Income
      </div>
      <div className="w-[119px] h-9 desktop:left-[373px] desktop:top-[48px] left-[179px] top-[27px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F]">This Week</div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="desktop:w-[455px] desktop:h-[251px] w-[280px] h-[166px] desktop:left-[37px] left-[24px] desktop:top-[116px] top-[83px] absolute">
        <div className="desktop:left-[331px] desktop:top-[230px] left-[177px] top-[148px] absolute text-[#7E7E7E] desktop:text-[18px] text-[15px]">
          1.10 - 1.17, 2024
        </div>
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[42px] top-[27px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[84px] top-[54px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[126px] top-[81px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[168px] top-[108px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[210px] top-[135px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 top-0 absolute bg-[#E8E8E8]" />
        <div className="desktop:left-[0.50px] desktop:top-[11px] left-[2px] top-[12px] absolute desktop:text-[42px] text-[28px] font-semibold z-2">
          $18,756
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="455"
          height="163"
          viewBox="0 0 455 163"
          fill="none"
          className="absolute desktop:top-[36px] top-[12px] desktop:w-[453px] w-[280px]">
          <path
            d="M1 161.256L83.5381 113.364L160.318 103.786L231.339 48.2318L302.36 78.8824L377.22 17.5812L454 2.25586"
            stroke="#3553F3"
            strokeWidth="4"
          />
        </svg>
        <div className="desktop:left-[0.50px] desktop:top-[63px] left-[4px] top-[54px] absolute text-blue-600 desktop:text-[20px] text-[16px] font-semibold">
          +35.2%
        </div>
      </div>
    </div>
  );
};
export default IncomeImg;
