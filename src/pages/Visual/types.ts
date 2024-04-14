export interface IVisualData3 {
  comp_chord: string;
  comp_link: string;
  comp_note: number[][];
  comp_time: string;
  max_note: number; // 음 높이
  min_note: number; // 음 높이
  plag_ratio: number;
  test_chord: string;
  test_link: string;
  test_note: number[][];
  test_time: string;
}

export interface IVisualData1 {
  comp_title: string;
  paired_duration_song1: number;
  paired_duration_song2: number;
  test_title: string;
  total_duration_song1: number;
  total_duration_song2: number;
  total_ratio: number;
}

export interface IVisualData2 {
  comp_gap: number;
  comp_plag: number[]; // 색칠
  comp_start: number;
  plag_pair: number[][]; // mapping
  test_gap: number;
  test_plag: number[]; // 색칠
  test_start: number;
}

// comp가 아래, test가 위
export interface IVisualData {
  message: string;
  data1: IVisualData1;
  data2: IVisualData2;
  data3: IVisualData3[];
}
