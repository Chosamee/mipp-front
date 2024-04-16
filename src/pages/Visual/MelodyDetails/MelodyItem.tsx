import React from "react";
import { IVisualData3 } from "../types";
import PianoRoll from "./test";

const MelodyItem = (data: IVisualData3) => {
  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <PianoRoll testNotes={data.test_note} compNotes={data.comp_note} />
    </div>
  );
};

export default MelodyItem;
