import { Component, OnInit } from '@angular/core';
import { IProducto, ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos?: IProducto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    const productos = this.productosService.getAll();

    this.productos = productos;
  }

  hasProducts(): boolean {
    return !!this.productos && this.productos.length > 0;
  }
}
