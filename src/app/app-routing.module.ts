import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';

const routes: Routes = [
  {path: 'empresas', component:ListaEmpresasComponent},
  {path: '', redirectTo : 'empresas', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
