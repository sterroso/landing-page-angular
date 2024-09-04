import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsFilm extends IStarWarsResource {
  title: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
};

export interface IStarWarsFilmResponse extends IStarWarsResourceResponse {
  results: IStarWarsFilm[];
}
