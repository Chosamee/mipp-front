import React from "react";
import { IVisualData3 } from "../types";
import MelodyItem from "./MelodyItem";

const MelodyDetails = ({
  data3,
  testTitle,
  compTitle,
  inst,
}: {
  data3: { [key: string]: IVisualData3 };
  testTitle: string;
  compTitle: string;
  inst: string;
}) => {
  const [viewAll, setViewAll] = React.useState(true);
  const data = Object.values(data3);

  return (
    <div className="flex flex-col px-5 mx-auto gap-6 w-full">
      <div className="flex flex-row items-center gap-6 max-w-96 justify-between">
        <h2 className="text-xl font-semibold flex-shrink-0">Melody Details</h2>
        <button
          className={`bg-blue-500 text-white py-1 px-2 rounded ${
            viewAll ? "opacity-100" : ""
          } break-keep flex-shrink-0 w-40`}
          onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "View All" : "View Only Overlaps"}
        </button>
      </div>
      <div className="flex flex-row gap-2 w-full min-w-0 md:max-w-full  items-center">
        <div className="w-4 h-4 bg-blue-600 flex-shrink-0"></div>
        <div className=" truncate">{testTitle}</div>
      </div>
      <div className="flex flex-row gap-2 w-full min-w-0 max-w-full  items-center">
        <div className="w-4 h-4 bg-green-600 flex-shrink-0"></div>
        <div className=" truncate">{compTitle}</div>
      </div>
      <div className="flex flex-row gap-2 w-full min-w-0 max-w-full  items-center">
        <div className="w-4 h-4 bg-purple-600 flex-shrink-0"></div>
        <div className=" truncate">Overlaps</div>
      </div>
      <div className="flex flex-col w-full gap-16">
        {data.map((item, index) => {
          const isRender = viewAll || item.test_title !== item.comp_title;
          return (
            <div
              key={index}
              className={`flex flex-col gap-16 w-full ${isRender ? "block" : "hidden"}`}>
              <div className="h-px w-full bg-black"></div>
              <MelodyItem data={{ ...item }} inst={inst} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-10 w-full justify-between"></div>
    </div>
  );
};

export default MelodyDetails;
