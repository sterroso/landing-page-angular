import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TipoComponent } from './contacto/tipo/tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InicioComponent,
    ProductosComponent,
    DetalleProductoComponent,
    LoginComponent,
    TipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          // Para formularios de tipo plantilla.
    ReactiveFormsModule,  // Para formularios reactivos.
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
