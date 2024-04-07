import React from "react";
import { IResult } from "../dashboardType";

interface ResultProp {
  result: IResult;
}
// truncate css {
//   width: 100%; /* 부모 컨테이너의 너비에 따라 조절될 수 있도록 설정 */
//   white-space: nowrap; /* 텍스트를 한 줄로 표시 */
//   overflow: hidden; /* 넘치는 내용은 숨김 */
//   text-overflow: ellipsis; /* 넘치는 텍스트를 '...'으로 표시 */
// }
const ResultContent = ({ result }: ResultProp) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 gap-y-3 gap-x-10 items-center p-1 md:w-fit w-full">
      {[...Array(result.results_rates.length)].map((_, index) => (
        <div key={index} className="flex flex-col gap-1 w-full md:max-w-80">
          <h4 className="w-full truncate" title={result.results_title[index]}>
            {result.results_title[index]}
          </h4>
          <div className="w-full h-5 bg-slate-200 rounded-full relative">
            <div
              style={{
                width: result.results_rates[index] + "%",
                height: "100%",
                backgroundColor: "slategray",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left:
                  (result.results_rates[index] <= 80
                    ? 2 + result.results_rates[index]
                    : result.results_rates[index] - 20) + "%",
                color: result.results_rates[index] <= 80 ? "black" : "white",
              }}>
              {result.results_rates[index]}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultContent;
