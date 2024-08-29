import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio' },
  { path: 'login', component: LoginComponent, title: 'Acceso' },
  { path: 'productos', component: ProductosComponent, title: 'Productos' },
  { path: 'productos/:productId', component: DetalleProductoComponent, title: 'Detalle de Producto' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
