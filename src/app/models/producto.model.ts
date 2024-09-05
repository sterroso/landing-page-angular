export interface IProducto {
  id: number;
  title: string;
  price?: number;
  category?: Category;
  description?: string;
  image?: string;
  rating?: IProductoRating;
};

export interface IProductoRating {
  rate: number;
  count: number;
};

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
};
