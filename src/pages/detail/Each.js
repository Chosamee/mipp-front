const Each = ({ file, handleCheckboxChange, index }) => {
  return (
    <li
      className={`flex w-full h-[70px] items-center border-b-[1px] border-[#E5E8EB] font-medium ${
        file.checked ? "bg-[#ECF2F8]" : ""
      }`}>
      <div className="flex px-5 items-center h-full">
        <input
          type="checkbox"
          checked={file.checked}
          onChange={() => handleCheckboxChange(index)}
          className="checked:bg-blue-600"
        />
      </div>
      <div className="flex px-3 w-[550px] h-full items-center text-[#171923]">{file.name}</div>
      <div className="flex px-3 w-[123px] h-full items-center text-[#171923] gap-[6px]">
        <div className={`w-4 h-4 rounded-[90px] bg-[${getColorScore(file.score)}]`} />
        <div>{file.score} %</div>
      </div>
      <div className="flex pl-3 pr-5 h-full items-center">
        <button className="flex h-[30px] px-[11px] gap-[7px] flex-shrink-0 items-center justify-center bg-white border-[1px] border-[#D9DADB] rounded-md">
          <div className="text-[#31353B] text-[12px] text-nowrap">확인하기</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none">
            <path d="M1 1L5 5L1 9" stroke="#31353B" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </li>
  );
};

const getColorScore = (score) => {
  if (score < 30) return "#3553F3";
  else if (score < 40) return "#BDC4FF";
  else if (score < 50) return "#F3D3FF";
  else if (score < 60) return "#FFA3FB";
  else return "#FE5BBD"; // 60 이상 100 이하
};

export default Each;
