import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpresaComponent } from './components/empresa/actualizar-empresa/actualizar-empresa.component';
import { DetallesEmpresaComponent } from './components/empresa/detalles-empresa/detalles-empresa.component';
import { ListaEmpresasComponent } from './components/empresa/lista-empresas/lista-empresas.component';
import { RegistrarEmpresaComponent } from './components/empresa/registrar-empresa/registrar-empresa.component';
import { ListaUsuariosComponent } from './components/usuario/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: 'empresas', component:ListaEmpresasComponent},
  {path: '', redirectTo : 'empresas', pathMatch : 'full'},
  {path: 'registrar-empresa', component:RegistrarEmpresaComponent},
  {path : 'actualizar-empresa/:id',component : ActualizarEmpresaComponent},
  {path : 'detalles-empresa/:id',component : DetallesEmpresaComponent},
  {path: 'usuarios', component:ListaUsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
