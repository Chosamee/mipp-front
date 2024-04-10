interface INotice {
  id: string;
  ko_title: string;
  en_title: string;
  created_at: string;
}

interface INoticeList {
  notices: INotice[];
  total_pages: number;
}
