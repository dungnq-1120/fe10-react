export interface IProductResponse {
  data: [];
  pagination: IPagination;
}

export interface IPagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}
