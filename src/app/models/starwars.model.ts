export interface IStarWarsResource {
  created: string;
  edited: string;
  url: string;
};

export interface IStarWarsResourceResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarWarsResource[];
};
