import React from "react";
import { IVisualData3 } from "../types";
import PianoRoll from "./PianoRoll";
import DetailTable from "./DetailTable";

const MelodyItem = ({ data, viewAll }: { data: IVisualData3; viewAll: boolean }) => {
  return (
    <div className={`flex flex-col gap-6 w-full`}>
      <PianoRoll
        testNotes={data.test_note}
        compNotes={data.comp_note}
        minNote={data.min_note}
        maxNote={data.max_note}
      />
      <DetailTable
        comp_chord={data.comp_chord}
        comp_link={data.comp_link}
        comp_time={data.comp_time}
        plag_ratio={data.plag_ratio}
        test_chord={data.test_chord}
        test_link={data.test_link}
        test_time={data.test_time}
        test_title={data.test_title}
        comp_title={data.comp_title}
      />
    </div>
  );
};

export default MelodyItem;
