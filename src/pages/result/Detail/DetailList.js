import React, { useEffect, useState } from "react";
import Each from "./Each";
import { useTranslation } from "react-i18next";

const DetailList = ({ files, sendCountFunc, checkedFiles, setCheckedFiles }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // files 배열에 변화가 있을 때마다 실행
    const initializedFiles = files.map((file) => ({
      ...file,
      checked: false, // 초기 체크 상태는 false로 설정
    }));
    setCheckedFiles(initializedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleSelectAll = (event) => {
    const newChecked = event.target.checked;
    setIsAllChecked(newChecked);
    const newCheckedFiles = checkedFiles.map((file) => ({ ...file, checked: newChecked }));
    setCheckedFiles(newCheckedFiles);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedFiles = [...checkedFiles];
    newCheckedFiles[index].checked = !newCheckedFiles[index].checked;
    setCheckedFiles(newCheckedFiles);

    // 모든 항목이 체크되었는지 확인
    setIsAllChecked(newCheckedFiles.every((file) => file.checked));
  };
  const checkedCount = checkedFiles.filter((file) => file.checked).length;

  const calculateResult = () => {
    sendCountFunc(checkedCount);
  };

  useEffect(() => {
    calculateResult();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCount]);

  return (
    <React.Fragment>
      {/* 비교 결과 목차 */}
      <div className="flex w-full h-10 mt-4 items-center border-y-[1px] border-[#E5E8EB]">
        <div className="flex px-0 md:px-5 items-center h-full font-medium w-[30px] md:w-fit justify-center">
          <input type="checkbox" checked={isAllChecked} onChange={handleSelectAll} />
        </div>
        <div className="flex px-3 w-[184px] md:w-[520px] h-full items-center">
          {t("detail.이름")}
        </div>
        <div className="flex px-3 w-[108px] md:w-[153px] h-full items-center">
          {t("detail.표절률")}
        </div>
        <div className="hidden md:flex pl-3 pr-5 h-full items-center">{t("detail.결과자료")}</div>
      </div>
      {/* 찐 결과 */}
      {checkedFiles.map((file, index) => (
        <Each key={index} file={file} handleCheckboxChange={handleCheckboxChange} index={index} />
      ))}
    </React.Fragment>
  );
};
export default DetailList;
