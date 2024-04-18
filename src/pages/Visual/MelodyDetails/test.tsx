import React, { useMemo, useState } from "react";

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

const NoteBlock = ({ note, color }: { note: number[]; color: string }) => {
  const style = {
    left: `${note[0] * 10}px`,
    top: `${(127 - note[1]) * 10}px`,
    width: `${note[2] * 10}px`,
    height: "10px",
    backgroundColor: color,
  };

  return <div className="absolute" style={style}></div>;
};

const PianoRoll = ({ testNotes, compNotes }: PianoRollProps) => {
  const [view, setView] = useState("all"); // all, test, comp, overlaps

  // 겹치는 노트 식별 및 계산
  const calculateOverlaps = useMemo(() => {
    const overlaps = [];
    for (let testNote of testNotes) {
      for (let compNote of compNotes) {
        if (testNote[1] === compNote[1]) {
          // 같은 음 높이 확인
          console.log("?");
          const startMax = Math.max(testNote[0], compNote[0]); // 겹치는 시작 시간
          const endMin = Math.min(testNote[0] + testNote[2], compNote[0] + compNote[2]); // 겹치는 끝 시간

          if (startMax < endMin) {
            // 실제로 겹치는지 확인
            overlaps.push([startMax, testNote[1], endMin - startMax]);
          }
        }
      }
    }
    return overlaps;
  }, [testNotes, compNotes]);

  const overlaps = calculateOverlaps;
  // 노트 렌더링 선택
  const getNotesToRender = useMemo(() => {
    switch (view) {
      case "test":
        return testNotes.map((note, index) => (
          <NoteBlock key={`test-${index}`} note={note} color="blue" />
        ));
      case "comp":
        return compNotes.map((note, index) => (
          <NoteBlock key={`comp-${index}`} note={note} color="red" />
        ));
      case "overlaps":
        return overlaps.map((note, index) => (
          <NoteBlock key={`overlap-${index}`} note={note} color="purple" />
        ));
      default:
        // Render all with overlaps marked
        return [
          ...testNotes.map((note, index) => (
            <NoteBlock key={`test-${index}`} note={note} color="blue" />
          )),
          ...compNotes.map((note, index) => (
            <NoteBlock key={`comp-${index}`} note={note} color="red" />
          )),
          ...overlaps.map((note, index) => (
            <NoteBlock key={`overlap-${index}`} note={note} color="purple" />
          )),
        ];
    }
  }, [view, testNotes, compNotes, overlaps]);

  return (
    <div className="relative w-full h-[1280px] bg-gray-50 overflow-scroll">
      <div className="flex gap-4 p-4">
        <button onClick={() => setView("all")} className="bg-gray-200 p-2 rounded">
          Show All
        </button>
        <button onClick={() => setView("test")} className="bg-gray-200 p-2 rounded">
          Test Only
        </button>
        <button onClick={() => setView("comp")} className="bg-gray-200 p-2 rounded">
          Comp Only
        </button>
        <button onClick={() => setView("overlaps")} className="bg-gray-200 p-2 rounded">
          Overlaps Only
        </button>
      </div>
      {getNotesToRender}
    </div>
  );
};

export default PianoRoll;
