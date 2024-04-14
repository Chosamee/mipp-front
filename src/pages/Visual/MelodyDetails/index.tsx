import React from "react";
import { IVisualData3 } from "../types";

const MelodyDetails = (data1: IVisualData3[]) => {
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <h2 className="text-xl font-semibold">Melody Details</h2>

      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default MelodyDetails;
