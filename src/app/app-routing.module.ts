import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpresaComponent } from './components/actualizar-empresa/actualizar-empresa.component';
import { DetallesEmpresaComponent } from './components/detalles-empresa/detalles-empresa.component';
import { ListaEmpresasComponent } from './components/lista-empresas/lista-empresas.component';
import { RegistrarEmpresaComponent } from './components/registrar-empresa/registrar-empresa.component';

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
