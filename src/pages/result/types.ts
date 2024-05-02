export interface IResultItem {
  musicId: string;
  inst: string;
  requestedAt: string;
  status: string;
  title: string;
}

export interface IFile {
  music_id: number;
  id: number;
  title: string;
  checked: boolean;
  plagiarism_rate: number;
  ko_path: string;
  en_path: string;
}

export interface IDetailListProps {
  files: IFile[];
  sendCountFunc: (count: number) => void;
  checkedFiles: IFile[];
  setCheckedFiles: (files: IFile[]) => void;
}
