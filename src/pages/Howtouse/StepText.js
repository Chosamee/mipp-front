const StepText = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[28px] font-semibold">{title}</h2>
      <p className="text-[20px] leading-[34px] font-medium text-[#777A80]">{text}</p>
    </div>
  );
};

export default StepText;
