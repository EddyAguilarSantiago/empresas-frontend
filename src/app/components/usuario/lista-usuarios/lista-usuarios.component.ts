import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/classes/empresa/empresa';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];
  numUsuarios;
  errors=[];

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioService.obtenerListaUsuarios().subscribe(usuario => {
      this.usuarios = usuario;
      this.numUsuarios = this.usuarios.length;
    }, error => this.errors.push(error.message));

    //Vaciamos la variable errors luego de 5 segundos
    setTimeout(() => {
      this.errors=[];
    }, 5000);
  }

}
