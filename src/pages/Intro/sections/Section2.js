import composerImg from "assets/intro/composer.png";
import singerImag from "assets/intro/singer.png";
import fanImg from "assets/intro/fan.png";
import investorImg from "assets/intro/investor.png";

const data = [
  {
    image: composerImg,
    who: "작곡가",
    text: (
      <>
        앨범 발매, 곡 판매 전 표절 검사를 통해
        <br />
        표절 리스크 및 표절 소송을
        <br className="desktop:hidden" /> 미리 대비할 수 있습니다.
        <br />내 노래를 무단으로 표절한 노래를 <br className="desktop:hidden" />
        AI가 자동으로
        <br className="hidden desktop:block" />
        찾아내어 <br className="desktop:hidden" />내 음악 IP를 보호할 수 있습니다.
      </>
    ),
  },
  {
    image: singerImag,
    who: "가수",
    text: (
      <>
        다른 작곡가에게 곡을 구매할 때<br />
        다른 곡을 표절하지는 않았는지 <br className="desktop:hidden" />
        표절검사로 확인해
        <br />
        나중에 발생할 수 있는 표절 논란을
        <br />
        앨범 발매 전 미리 예방할 수 있습니다.
      </>
    ),
  },
  {
    image: fanImg,
    who: "팬",
    text: (
      <>
        내가 좋아하는 뮤지션의 노래를
        <br />
        무단으로 표절한 것으로
        <br className="desktop:hidden" /> 의심되는 노래를 발견했거나
        <br />
        찾아보고 싶을 때 검사를 통해 표절 여부를
        <br />
        확인할 수 있습니다.
      </>
    ),
  },
  {
    image: investorImg,
    who: "음악 저작권 투자자",
    text: (
      <>
        내가 투자하려는 노래가 표절인지 아닌지
        <br />
        표절검사로 확인한 뒤 투자해서
        <br />
        표절 리스크로 인한 투자금 손실을
        <br />
        미리 예방할 수 있습니다.
      </>
    ),
  },
];

function Section2() {
  return (
    <div className="w-full bg-[#F4F6FA]">
      <div className="flex flex-col py-[60px] desktop:py-[230px] w-[326px] desktop:w-[1340px] desktop:px-5 mx-auto">
        <h2 className="text-xl desktop:text-2xl font-semibold leading-9 desktop:leading-[normal]">
          MIPP 서비스는
          <br className="desktop:hidden" /> 고객의 일상을 바꿉니다
        </h2>
        <div
          className="mt-[60px] desktop:mt-[120px]
        desktop:grid desktop:grid-cols-2 desktop:grid-rows-2 gap-5
        flex flex-col ">
          {data.map((item, index) => {
            return <Card key={index} image={item.image} who={item.who} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Card = ({ image, who, text }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-[326px] h-[400px] desktop:w-[640px] desktop:h-[460px] bg-white rounded-[30px]"
      style={{ boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.05)" }}>
      <div className="flex desktop:w-[46px] desktop:h-[46px] items-center justify-center">
        <img src={image} alt="usertypes" />
      </div>
      <h3 className="mt-5 text-[40px] font-bold leading-[normal]">{who}</h3>
      <p className="mt-[30px] text-center desktop:text-[22px] leading-7 desktop:leading-10">
        {text}
      </p>
    </div>
  );
};

export default Section2;
