import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsSpecie extends IStarWarsResource {
  name?: string;
  classification?: string;
  designation?: string;
  average_height?: string;
  skin_colors?: string;
  hair_colors?: string;
  eye_colors?: string;
  average_lifespan?: string;
  homeworld?: string;
  language?: string;
  people?: string[];
  films?: string[];
};

export interface IStarWarsSpecieResponse extends IStarWarsResourceResponse {
  results: IStarWarsSpecie[];
};
