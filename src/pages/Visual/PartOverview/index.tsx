import React, { useState } from "react";
import { IVisualData2 } from "../types";
import Graph from "./GraphComp";

const PartOverview = ({
  data2,
  testTitle,
  compTitle,
}: {
  data2: IVisualData2;
  testTitle: string;
  compTitle: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <div className="flex flex-row gap-5">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <button
          className="bg-blue-500 px-2 rounded-lg text-white"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          {isOpen ? "Hide" : "View"}
        </button>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full text-center truncate">{testTitle}</div>
        {isOpen ? <Graph data={data2} /> : null}
        <div className="w-full text-center truncate">{compTitle}</div>
      </div>
      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default PartOverview;
