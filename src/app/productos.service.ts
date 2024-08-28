import { Injectable } from '@angular/core';

export interface IProducto {
  id: number;
  title: string;
  description?: string;
  price: number;
  pexelsPictureId?: number;
};

export interface IPexelPhotoResponse {
  id: number;
  width?: number;
  height?: number;
  url: string;
  photographer?: string;
  photographer_url?: string;
  photographer_id?: string;
  avg_color?: string;
  src: {
    original?: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
    portrait?: string;
    landscape?: string;
    tiny?: string;
  },
  liked?: boolean;
  alt?: string;
};

const listaProductos: IProducto[] = [
  {
    id: 1,
    title: 'Pay de Frutos del Bosque',
    description: 'Delicioso Pay de moras (fresa, frambuesa, arándanos y zarzamora), sobre una base crujiente con mantequilla y una cubierta de pasta de hojaldre en reja.',
    price: 350.00,
    pexelsPictureId: 2693447,
  },
  {
    id: 2,
    title: 'Pay de Piña',
    description: 'Delicioso Pay de dulce piña miel, sobre una base crujiente con mantequilla y una cubierta de pasta de hojaldre en reja.',
    price: 450.00,
    pexelsPictureId: 2035741,
  },
  {
    id: 3,
    title: 'Pay de Manzana',
    description: 'Delicioso Pay de diversas manzanas (red delicious, verde, amarilla, etc.), sobre una base crujiente con mantequilla y una cubierta de pasta de hojaldre en reja.',
    price: 220.00,
    pexelsPictureId: 14892629,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  create(product: IProducto) {
    if (!listaProductos.find((producto) => producto.id === product.id)) {
      listaProductos.push(product);
    }

    throw new Error('Ya existe un producto con ese ID');
  }

  getAll() {
    return listaProductos;
  }

  getPage(page?: number, limit?: number) {
    page = page ?? 1;
    limit = limit ?? 10;
    const indexStart = limit * (page - 1);
    const indexEnd = Math.min(indexStart + limit, listaProductos.length);

    return listaProductos.slice(indexStart, indexEnd);
  }

  getOneById(productId: number) {
    return listaProductos.find((producto) => producto.id === productId) || null;
  }

  update(productId: number, data: IProducto) {
    throw new Error('Not implemented.');
  }

  delete(productId: number) {
    throw new Error('Not implemented.');
  }

  getPexelPictureUrl(productId: number) {
    throw new Error('Not implemented.');
  }
}
