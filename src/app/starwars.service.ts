import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private apiBaseUrl: string = 'https://swapi.dev/api';

  private apiPaths: string[] = [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles',
  ];

  constructor(private client: HttpClient) { }

  getMany(resource: string, search?: string) {
    if(!this.apiPaths.includes(resource)) {
      throw new Error(`Resource '${resource}' does not exist.`);
    }

    return this.client.get(`${this.apiBaseUrl}/${resource}`);
  }

  getOneByid(resource: string, id: number) {
    if (!this.apiPaths.includes(resource)) {
      throw new Error(`Resource '${resource}' does not exist.`);
    }

    if (id <= 0) {
      throw new Error(`'id' parameter value (${id}) is not valid.`);
    }

    return this.client.get(`${this.apiBaseUrl}/${resource}/${id}`);
  }
}
