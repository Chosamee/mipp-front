import React, { useState } from "react";
import { IVisualData2 } from "../types";
import Graph from "./GraphComp";

const PartOverview = (data2: IVisualData2) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <div className="flex flex-row gap-5">
        <h2 className="text-xl font-semibold">Ratio Overview</h2>
        <button
          className="bg-blue-400 px-2 rounded-lg"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          {isOpen ? "Hide" : "View"}
        </button>
      </div>
      {isOpen ? <Graph data={data2} /> : null}
      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default PartOverview;
