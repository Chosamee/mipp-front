const Section2 = () => {
  return (
    <div className="flex flex-col desktop:py-[230px]">
      <h2>MIPP 서비스는 고객의 일상을 바꿉니다</h2>
    </div>
  );
};

const Card = ({ who, text }) => {
  return (
    <div>
      <h3>{who}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Section2;
