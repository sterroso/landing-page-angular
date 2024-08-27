import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto, ProductosService } from '../productos.service';

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
  producto: IProducto = {} as IProducto;
  error?: IError;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = Number.parseInt(params['productId'], 10);
      if (!isNaN(productId) && productId > 0) {
        console.log('productId', productId);
        const producto = this.productosService.getOneById(productId);
        if (producto) {
          this.producto = producto;
        } else {
          this.error = {
            code: 404,
            message: `No se encontró el producto con ID ${productId}.`
          }
        }
      }
    });
  }
}
