import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpresaComponent } from './actualizar-empresa/actualizar-empresa.component';
import { DetallesEmpresaComponent } from './detalles-empresa/detalles-empresa.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';

const routes: Routes = [
  {path: 'empresas', component:ListaEmpresasComponent},
  {path: '', redirectTo : 'empresas', pathMatch : 'full'},
  {path: 'registrar-empresa', component:RegistrarEmpresaComponent},
  {path : 'actualizar-empresa/:id',component : ActualizarEmpresaComponent},
  {path : 'detalles-empresa/:id',component : DetallesEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
