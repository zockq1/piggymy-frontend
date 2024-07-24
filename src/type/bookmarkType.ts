export interface BookmarkListResponseJson {
  totalCount: number;
  list: BookmarkResponseJson[];
}

export interface BookmarkResponseJson {
  id: number;
  type: string;
  content: string;
  hit: number;
  createdDate: string;
  modifiedDate: string;
}
