import React from "react";
import { IVisualData2 } from "../types";

const Graph = ({ data }: { data: IVisualData2 }) => {
  const { test_plag, comp_plag, plag_pair, test_start, comp_start, test_gap, comp_gap } = data;

  let testLabels = test_plag.map((_, idx) => Math.round(test_start + idx * test_gap));
  let compLabels = comp_plag.map((_, idx) => Math.round(comp_start + idx * comp_gap));
  const testWidth = 100 / test_plag.length;
  const compWidth = 100 / comp_plag.length;
  return (
    <div className="flex flex-row h-[1500px] mx-auto">
      <div className="flex flex-col h-full">
        {testLabels.map((label, idx) => (
          <div
            key={idx}
            className={`mr-2`}
            style={{ lineHeight: "32px", textAlign: "center", height: `${testWidth}%` }}>
            {label}
          </div>
        ))}
        <div>{Math.round(test_start + test_gap * test_plag.length)}</div>
      </div>

      <div className="flex flex-col h-full mt-2">
        {test_plag.map((filled, idx) => (
          <div
            key={idx}
            className={`w-7 md:w-20 border ${filled ? "bg-blue-500" : "bg-transparent"}`}
            style={{ lineHeight: "32px", textAlign: "center", height: `${testWidth}%` }}></div>
        ))}
      </div>

      <svg width="200" height={1500}>
        {plag_pair.map(([tIdx, cIdx]) => (
          <line
            key={`${tIdx}-${cIdx}`}
            x1={0}
            y1={`${testWidth * (tIdx + 0.5)}%`}
            x2={200}
            y2={`${compWidth * (cIdx + 0.5)}%`}
            stroke="black"
          />
        ))}
      </svg>

      <div className="flex flex-col h-full">
        {comp_plag.map((filled, idx) => (
          <div
            key={idx}
            className={`w-7 md:w-20 border ${filled ? "bg-green-500" : "bg-transparent"}`}
            style={{
              lineHeight: "32px",
              textAlign: "center",
              height: `${compWidth}%`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col h-full">
        {compLabels.map((label, idx) => (
          <div
            key={idx}
            className={`relative top-[-2] mr-2`}
            style={{ lineHeight: "32px", textAlign: "center", height: `${testWidth}%` }}>
            {label}
          </div>
        ))}
        <div>{Math.round(comp_start + comp_gap * comp_plag.length)}</div>
      </div>
    </div>
  );
};

export default Graph;
