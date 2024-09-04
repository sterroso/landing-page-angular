import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsStarship extends IStarWarsResource {
  name: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capadity?: string;
  consumables?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  starship_class?: string;
  pilots?: string[];
  films?: string[];
}

export interface IStarWarsStarshipResponse extends IStarWarsResourceResponse {
  results: IStarWarsStarship[];
};
