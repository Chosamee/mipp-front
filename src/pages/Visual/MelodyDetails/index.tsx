import React from "react";
import { IVisualData3 } from "../types";
import MelodyItem from "./MelodyItem";

const MelodyDetails = (data3: { [key: string]: IVisualData3 }) => {
  const data = Object.values(data3);
  console.log(data3);
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <h2 className="text-xl font-semibold">Melody Details</h2>
      {data.map((item, index) => (
        <MelodyItem key={index} {...item} />
      ))}
      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default MelodyDetails;
