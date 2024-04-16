import React from "react";

// 데이터 타입 정의
// interface Note {
//   time: number; // 시작 시간
//   pitch: number; // 음 높이
//   length: number; // 음 길이
// }

interface PianoRollProps {
  testNotes: number[][];
  compNotes: number[][];
}

const NoteBlock: React.FC<{ note: number[]; color: string }> = ({ note, color }) => {
  const style = {
    left: `${note[0] * 10}px`,
    top: `${(127 - note[1]) * 10}px`,
    width: `${note[2] * 10}px`,
    height: "10px",
    backgroundColor: color,
  };

  return <div className="absolute" style={style}></div>;
};

const PianoRoll: React.FC<PianoRollProps> = ({ testNotes, compNotes }) => {
  const safeTestNotes = Array.isArray(testNotes) ? testNotes : [];
  const safeCompNotes = Array.isArray(compNotes) ? compNotes : [];
  return (
    <div className="relative w-full h-[1208px] bg-gray-50 overflow-scroll">
      {safeTestNotes.map((note, index) => (
        <NoteBlock key={`test-${index}`} note={note} color="blue" />
      ))}
      {safeCompNotes.map((note, index) => (
        <NoteBlock key={`comp-${index}`} note={note} color="red" />
      ))}
    </div>
  );
};

export default PianoRoll;
