import useWindowWidth from "components/utils/useWindowWidth";
import React, { useMemo, useState } from "react";
import NoteBlock from "./NoteBlock";
import { getNoteName, isBlackKey } from "./utils";
import { useTranslation } from "react-i18next";

interface PianoRollProps {
  testNotes: number[][];
  compNotes: number[][];
  minNote: number;
  maxNote: number;
  inst: string;
}

const PianoRoll = ({ testNotes, compNotes, minNote, maxNote, inst }: PianoRollProps) => {
  const [view, setView] = useState("all"); // all, test, comp, overlaps

  const gap = maxNote - minNote + 1;
  const height = 500;
  // const width = 1024;
  const width = Math.min(useWindowWidth() - 100, 1200);

  const keysBackground = useMemo(() => {
    return Array.from({ length: maxNote - minNote + 1 }).map((_, index) => {
      const midiNumber = maxNote - index;
      const backgroundColor = isBlackKey(midiNumber) ? "neutral-200" : "neutral-100"; // 검은 건반과 흰 건반의 색상 지정
      return (
        <div
          key={index}
          className={`absolute w-full bg-${backgroundColor} ring-1 ring-neutral-300 `}
          style={{
            top: `${index * (height / gap)}px`,
            height: `${height / gap}px`,
            zIndex: 0,
          }}
        />
      );
    });
  }, [maxNote, minNote, gap, height]);

  // 겹치는 노트 식별 및 계산
  const calculateOverlaps = useMemo(() => {
    const overlaps = [];
    for (let testNote of testNotes) {
      for (let compNote of compNotes) {
        if (testNote[1] === compNote[1]) {
          // 같은 음 높이 확인
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
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex gap-2">
        {["all", "test", "comp", "overlaps"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`bg-blue-500 text-white p-1 rounded ${
              view === v ? "opacity-75" : ""
            } w-1/4 break-keep`}>
            {t(`visual.${v}`)}
          </button>
        ))}
      </div>
      <div
        className="flex flex-col bg-gray-50 overflow-clip"
        style={{ width: `${width + 40}px`, height: `${height + 40}px` }}>
        <div className="ml-9 h-10 flex items-center border-b" style={{ width: `${width + 40}px` }}>
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="text-xs" style={{ width: `${width / 16}px` }}>
              {i}
            </div> // 시간 축
          ))}
        </div>
        <div className="flex flex-row w-full" style={{ height: `${height}px` }}>
          <div className="w-10 flex flex-col items-center justify-between">
            {Array.from({ length: maxNote - minNote + 1 }, (_, i) => (
              <span
                key={i}
                className="text-xs flex items-center"
                style={{ height: `${height / gap}px` }}>
                {getNoteName(maxNote - i)}
              </span> // 음 높이 축
            ))}
          </div>
          <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
            {testNotes.length === 0 && (
              <div
                className={`absolute z-20 w-96 text-center p-3 text-lg bg-blue-600 text-white rounded-lg`}
                style={{ left: `${(width - 384) / 2}px`, bottom: `${height / 2}px` }}>
                {i18n.language === "en"
                  ? `No ${inst} Notes found.`
                  : `발견된 ${inst} 음이 없습니다.`}
              </div>
            )}

            <div className="relative z-0">{keysBackground}</div>

            {Array.from({ length: 65 }, (_, i) => {
              if (i % 4 === 0) {
                return (
                  <div
                    key={i}
                    style={{ left: `${(width / 64) * i}px` }}
                    className="absolute top-0 ring-neutral-400 ring-1 h-full"
                  />
                );
              }
              return (
                <div
                  key={i}
                  style={{ left: `${(width / 64) * i}px` }}
                  className="absolute top-0 ring-neutral-300 ring-1 h-full md:block hidden"
                />
              );
            })}

            {/* Note Blocks */}
            <div className="relative z-10">
              {(view === "all" || view === "test") &&
                testNotes.map((note, index) => (
                  <NoteBlock
                    key={`test-${index}`}
                    note={note}
                    color="bg-blue-600"
                    gap={gap}
                    maxNote={maxNote}
                    height={height}
                    width={width}
                  />
                ))}
              {(view === "all" || view === "comp") &&
                compNotes.map((note, index) => (
                  <NoteBlock
                    key={`comp-${index}`}
                    note={note}
                    color="bg-green-600"
                    gap={gap}
                    maxNote={maxNote}
                    height={height}
                    width={width}
                  />
                ))}
              {(view === "all" || view === "overlaps") &&
                overlaps.map((note, index) => (
                  <NoteBlock
                    key={`overlap-${index}`}
                    note={note}
                    color="bg-purple-600"
                    gap={gap}
                    maxNote={maxNote}
                    height={height}
                    width={width}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PianoRoll;
