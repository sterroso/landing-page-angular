export interface IStarWarsStarship {
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
  created: string;
  edited: string;
  url: string;
}

export interface IStarWarsStarshipResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarWarsStarship[];
};
