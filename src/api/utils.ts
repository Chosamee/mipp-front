export interface ISearchParams {
  currentPage: number;
  pageSize: number;
  searchKeyword: string;
  searchType: string;
}
export const getSearchQueryKey = (
  key: string,
  { currentPage, pageSize, searchKeyword, searchType }: ISearchParams
) => [key, { currentPage, pageSize, searchKeyword, searchType }];
