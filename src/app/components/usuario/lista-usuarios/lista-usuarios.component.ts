import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario/usuario';
import swal from 'sweetalert2';
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

  eliminarUsuario(id:number){
    swal({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar este usuario",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-secondary',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.usuarioService.eliminarUsuario(id).subscribe(usuario => {
          this.obtenerUsuarios();
          swal(
            'Usuario eliminado',
            'El usuario ha sido eliminado con éxito',
            'success'
          )
        }, error => this.errors.push(error.message));
      }
    });
  }
}
