export interface IAlert {
  content: string;
  date: string;
  status: string;
  data: { inst: string; music_title: string };
  form: string;
}

export interface IResult {
  music_title: string;
  results_rates: number[];
  results_title: string[];
}

export interface ICommunity {
  id: number;
  title: string;
  created_at: string;
  username: string;
  like_num: number;
}
