import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { DetallesEmpresaComponent } from './detalles-empresa/detalles-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresasComponent,
    RegistrarEmpresaComponent,
    ActualizarEmpresaComponent,
    DetallesEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
