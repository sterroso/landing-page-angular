import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { IProducto } from '../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos?: IProducto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getAll().subscribe((data: IProducto[]) => {
      this.productos = data;
    });
  }

  hasProducts(): boolean {
    return !!this.productos && this.productos.length > 0;
  }
}
