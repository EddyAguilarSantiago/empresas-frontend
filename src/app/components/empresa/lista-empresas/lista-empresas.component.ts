import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { Empresa } from '../../../classes/empresa/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas:Empresa[];
  usuarios:Usuario[];
  numEmpresas;
  errors=[];

  constructor(private empresaService: EmpresaService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    //Obtenemos la lista de empresas
    this.obtenerEmpresas();
  }

  //Método para obtener empresas
  private obtenerEmpresas(){
    this.empresaService.obtenerListaDeEmpresas().subscribe(empresa => {
      this.empresas = empresa;
      this.numEmpresas=this.empresas.length;
    }, error => this.errors.push(error.message));

    //Vaciamos la variable errors luego de 5 segundos
    setTimeout(() => {
      this.errors=[];
    }, 5000);
  }

  //Método para obtener usuarios
  private obtenerUsuarios(){
    this.usuarioService.obtenerListaUsuarios().subscribe(usuario => {
      this.usuarios = usuario;
    }, error => this.errors.push(error.message));

    //Vaciamos la variable errors luego de 5 segundos
    setTimeout(() => {
      this.errors=[];
    }, 5000);
  }

  eliminarEmpresa(id:number){
    //Obtenemos la lista de usuarios
    this.obtenerUsuarios();

    //Abrimos un mensaje de alerta
    swal({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar esta empresa, esto también eliminará todos los usuarios que estén en ella",
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
      //Si la opción elegida es eliminar
      if(result.value){
        //Hacemos un recorrido de los usuarios
        for(let usuario of this.usuarios){
          //Verificamos si el usuario actual es parte de la empresa que se va a eliminar
          if(usuario.empresa.id == id){
            //Eliminamos el usuario
            this.usuarioService.eliminarUsuario(usuario.id).subscribe(usuario => {}, error => this.errors.push(error.message));
          }
        }
        //Eliminamos la empresa
        setTimeout(() => {
          this.empresaService.eliminarEmpresa(id).subscribe(empresa => {
            this.obtenerEmpresas();
            swal(
              'Empresa eliminada',
              'La empresa ha sido eliminada con éxito',
              'success'
            )}, error => this.errors.push(error.message
          ));
        }, 1000);
      }
    });
  }
}
