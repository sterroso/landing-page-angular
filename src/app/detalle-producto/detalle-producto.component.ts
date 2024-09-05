import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductosService } from '../productos.service';
import { IProducto } from '../models/producto.model';

interface IError {
  code: number,
  message: string,
}

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto?: IProducto;
  error?: IError;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next: (params: Params) => {
          const productId = Number.parseInt(params['productId'], 10);
          if (!isNaN(productId) && productId > 0) {
            this.productosService.getOneById(productId).subscribe((data: IProducto) => {
              this.producto = data;
            });
          }
        }
    });
  }
}
