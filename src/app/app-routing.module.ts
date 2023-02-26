import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';

const routes: Routes = [
  {path: 'empresas', component:ListaEmpresasComponent},
  {path: '', redirectTo : 'empresas', pathMatch : 'full'},
  {path: 'registrar-empresa', component:RegistrarEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
