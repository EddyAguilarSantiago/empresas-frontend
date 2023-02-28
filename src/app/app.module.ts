import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpresasComponent } from './components/empresa/lista-empresas/lista-empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpresaComponent } from './components/empresa/registrar-empresa/registrar-empresa.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpresaComponent } from './components/empresa/actualizar-empresa/actualizar-empresa.component';
import { DetallesEmpresaComponent } from './components/empresa/detalles-empresa/detalles-empresa.component';
import { ListaUsuariosComponent } from './components/usuario/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/usuario/registrar-usuario/registrar-usuario.component';
import { DetallesUsuarioComponent } from './components/usuario/detalles-usuario/detalles-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresasComponent,
    RegistrarEmpresaComponent,
    ActualizarEmpresaComponent,
    DetallesEmpresaComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    DetallesUsuarioComponent
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
