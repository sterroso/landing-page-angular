import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsVehicle extends IStarWarsResource {
  name: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capacity?: string;
  consumables?: string;
  vehicle_class?: string;
  pilots?: string[];
  films?: string[];
};

export interface IStarWarsVehicleResponse extends IStarWarsResourceResponse {
  results: IStarWarsVehicle[];
};
