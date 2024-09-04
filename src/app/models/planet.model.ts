import { IStarWarsResource, IStarWarsResourceResponse } from "./starwars.model";

export interface IStarWarsPlanet extends IStarWarsResource {
  name?: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter?: string;
  climate?: string;
  gravity?: string;
  terrain?: string;
  surface_water?: string;
  population?: string;
  residents?: string[];
  films?: string[];
};

export interface IStarWarsPlanetResponse extends IStarWarsResourceResponse {
  results: IStarWarsPlanet[];
};
