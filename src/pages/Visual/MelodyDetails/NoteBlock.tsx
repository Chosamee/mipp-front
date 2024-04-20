import React from "react";

interface NoteBlockProps {
  note: number[];
  color: string;
  gap: number;
  maxNote: number;
  height: number;
  width: number;
}

const NoteBlock = ({ note, color, gap, maxNote, height, width }: NoteBlockProps) => {
  const style = {
    left: `${note[0] * (width / 192)}px`,
    top: `${(maxNote - note[1]) * (height / gap)}px`,
    width: `${note[2] * (width / 192)}px`,
    height: `${height / gap}px`,
  };
  return <div className={`absolute ring-white ring-1 z-10 ${color}`} style={style}></div>;
};

export default React.memo(NoteBlock);
