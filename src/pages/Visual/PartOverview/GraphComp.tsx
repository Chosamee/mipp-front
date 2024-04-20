import React from "react";
import { IVisualData2 } from "../types";

const Graph = ({ data }: { data: IVisualData2 }) => {
  const { test_plag, comp_plag, plag_pair, test_start, comp_start, test_gap, comp_gap } = data;

  let testLabels = test_plag.map((_, idx) => Math.round(test_start + idx * test_gap));
  let compLabels = comp_plag.map((_, idx) => Math.round(comp_start + idx * comp_gap));
  const testWidth = 100 / test_plag.length;
  const compWidth = 100 / comp_plag.length;
  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="flex flex-row w-full justify-between">
        {testLabels.map((label, idx) => (
          <div
            key={idx}
            className={`mb-2 md:block ${idx % 4 !== 0 ? "hidden" : ""}`}
            style={{ width: `${testWidth}%` }}>
            {label}
          </div>
        ))}
        <div>{Math.round(test_start + test_gap * test_plag.length)}</div>
      </div>

      <div className="flex flex-row w-full mt-2">
        {test_plag.map((filled, idx) => (
          <div
            key={idx}
            className={`h-7 md:h-20 border ${filled ? "bg-blue-500" : "bg-transparent"}`}
            style={{ lineHeight: "32px", textAlign: "center", width: `${testWidth}%` }}></div>
        ))}
      </div>

      <div className="w-full md:h-[200px] h-[100px]">
        <svg width={`100%`} height={`100%`}>
          {plag_pair.map(([tIdx, cIdx]) => (
            <line
              key={`${tIdx}-${cIdx}`}
              x1={`${testWidth * (tIdx + 0.5)}%`}
              y1={0}
              x2={`${compWidth * (cIdx + 0.5)}%`}
              y2={`100%`}
              stroke="black"
            />
          ))}
        </svg>
      </div>

      <div className="flex flex-row w-full">
        {comp_plag.map((filled, idx) => (
          <div
            key={idx}
            className={`h-7 md:h-20 border ${filled ? "bg-green-500" : "bg-transparent"}`}
            style={{
              width: `${compWidth}%`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-row w-full justify-between">
        {compLabels.map((label, idx) => (
          <div
            key={idx}
            className={`mt-2 md:block ${idx % 4 !== 0 ? "hidden" : ""}`}
            style={{ width: `${compWidth}%` }}>
            {label}
          </div>
        ))}
        <div className="mt-2">{Math.round(comp_start + comp_gap * comp_plag.length)}</div>
      </div>
    </div>
  );
};

export default Graph;
