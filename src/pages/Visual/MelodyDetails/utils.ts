// MIDI 넘버가 검은 건반인지 확인
export const isBlackKey = (midiNumber: number): boolean => {
  const blackKeys = [1, 3, 6, 8, 10]; // C#(1), D#(3), F#(6), G#(8), A#(10)은 검은 건반
  const noteIndex = midiNumber % 12;
  return blackKeys.includes(noteIndex);
};

// MIDI 넘버를 음 이름으로 변환
export const getNoteName = (midiNumber: number): string => {
  const scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const octave = Math.floor(midiNumber / 12);
  const noteIndex = midiNumber % 12;
  return `${scale[noteIndex]}${octave}`;
};
