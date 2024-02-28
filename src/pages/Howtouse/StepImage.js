const StepImage = ({ contents }) => {
  return (
    <div className="flex w-full h-[420px] bg-[#F5F6F8] desktop:rounded-[30px]">
      <div className="desktop:w-[493px] desktop:h-[341px] mx-auto mt-auto rounded-t-[10px] bg-white shadow-[0px_-11px_17px_2px_rgba(0,0,0,0.03)]">
        <div className="w-full h-7 flex-shrink-0 bg-[#E9EAED] pl-[13px] pt-[10px] rounded-t-[10px]">
          <CircleTab />
        </div>
        {contents}
      </div>
    </div>
  );
};

const CircleTab = () => {
  return (
    <div className="flex gap-1">
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

const Circle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#D1D1D1" />
    </svg>
  );
};
export default StepImage;
