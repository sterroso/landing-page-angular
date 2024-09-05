import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProducto } from './models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlBase: string = 'https://fakestoreapi.com/products';

  constructor(private client: HttpClient) { }

  create(product: IProducto): Observable<IProducto> {
    return this.client.post<IProducto>(`${this.urlBase}`, product);
  }

  getCategories(): Observable<string[]> {
    return this.client.get<string[]>(`${this.urlBase}/categories`);
  }

  getAll(category?: string, limit?: number, sort?: string): Observable<IProducto[]> {
    const params = {
      limit: limit ? limit : null,
      sort: sort ? sort : null,
    };

    const categoryPath = category ? `/category/${category}` : '';

    let queryParams = '';

    for (const [key, value] of Object.entries(params)) {
      if (value) {
        queryParams += queryParams.length === 0 ?
                       `?${key}=${encodeURI(value.toString())}` :
                       `&${key}=${encodeURI(value.toString())}`
      }
    }

    const requestUrl: string = `${this.urlBase}${encodeURI(categoryPath)}${queryParams}`;

    return this.client.get<IProducto[]>(requestUrl);
  }

  getOneById(productId: number): Observable<IProducto> {
    return this.client.get<IProducto>(`${this.urlBase}/${productId}`);
  }

  update(productId: number, data: IProducto): Observable<IProducto> {
    return this.client.put<IProducto>(`${this.urlBase}/${productId}`, data);
  }

  delete(productId: number): Observable<IProducto> {
    return this.client.delete<IProducto>(`${this.urlBase}/${productId}`);
  }
}
