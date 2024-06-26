import React, { useState } from "react";
import ResultContent from "./ResultContent";
import { IResult } from "../dashboardType";

interface ResultsProps {
  songs_results?: {
    result_list: IResult[];
  };
}

const ResultDropdown = ({ songs_results }: ResultsProps) => {
  const [selectedItem, setSelectedItem] = useState<IResult | null>(
    songs_results?.result_list[0] || null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: IResult) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-8 w-full">
        <button
          className="flex bg-slate-300 w-full py-2 px-4 rounded-md items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="p-2 truncate">
            {selectedItem ? selectedItem.music_title : "Select a title"}
          </span>
          <span className="p-2">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="flex flex-col gap-2 absolute w-full z-50 bg-slate-100 p-2 rounded-md ">
            {songs_results?.result_list?.map((item) => (
              <button key={item.music_title} onClick={() => handleItemClick(item)} className="p-1">
                {item.music_title}
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedItem && <ResultContent result={selectedItem} />}
    </div>
  );
};

export default ResultDropdown;
