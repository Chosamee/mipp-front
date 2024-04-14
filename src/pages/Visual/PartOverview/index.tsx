import React from "react";
import { IVisualData2 } from "../types";
import PlagiarismGraph from "./GraphComp";

const PartOverview = (data2: IVisualData2) => {
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <h2 className="text-xl font-semibold">Ratio Overview</h2>
      <PlagiarismGraph {...data2} />
      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default PartOverview;
