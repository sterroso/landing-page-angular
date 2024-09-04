import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsCharacter extends IStarWarsResource {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
}

export interface IStarWarsCharacterResponse extends IStarWarsResourceResponse {
  results: IStarWarsCharacter[];
};
