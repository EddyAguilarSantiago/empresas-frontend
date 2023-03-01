import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';
import { Empresa } from '../../../classes/empresa/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  empresa:Empresa = new Empresa();
  usuario:Usuario = new Usuario();
  random1:number;
  random2:number;
  valido=false;
  success:string;
  errors=[];

  constructor(private empresaService:EmpresaService, private usuarioService:UsuarioService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    //Validaciones
    if(this.empresa.codigo==null){
      this.errors.push("El código de la empresa es requerido");
    }
    if(this.empresa.nombre==null){
      this.errors.push("El nombre de la empresa es requerido");
    }
    if(this.empresa.direccion==null){
      this.errors.push("La dirección de la empresa es requerida");
    }
    if(this.empresa.cp==null){
      this.errors.push("El Código Postal de la empresa es requerido");
    }

    //Si no hay errores
    if(this.errors.length == 0){
      //Registramos la empresa
      this.empresaService.registrarEmpresa(this.empresa).subscribe(empresa => {
        this.success = "Empresa registrada correctamente";
        
        const codigoEmpresa=empresa['codigo'].toString();
        //Generación del primer número aleatorio
        while(!this.valido){
          this.random1=Math.floor(Math.random()*9);
          console.log(this.random1);
          if(this.random1 != codigoEmpresa.substring(0, 1)){
            if(this.random1 != codigoEmpresa.substring(1, 2)){
              if(this.random1 != codigoEmpresa.substring(2, 3)){
                this.valido=true;
              }
            }
          }
        }
        this.valido=false;

        //Generación del primer número aleatorio
        while(!this.valido){
          this.random2=Math.ceil(Math.random()*9);
          console.log(this.random2);
          if(this.random2 != codigoEmpresa.substring(0, 1)){
            if(this.random2 != codigoEmpresa.substring(1, 2)){
              if(this.random2 != codigoEmpresa.substring(2, 3)){
                if(this.random2 != this.random1){
                  this.valido=true;
                }
              }
            }
          }
        }
        this.valido=false;

        //Asignamos los campos del usuario para esa empresa
        this.usuario.codigo=empresa['codigo'].toString() + this.random1 + this.random2;
        this.usuario.nombre="Usuario " + empresa['nombre'];
        this.usuario.email="usuario@" + empresa['nombre'].replace(/ /g, "").toLowerCase()+".com";
        this.usuario.empresa={
          id:empresa['id'],
          codigo:empresa['codigo'],
          nombre:empresa['nombre'],
          direccion:empresa['direccion'],
          cp:empresa['cp']
        };

        //Registramos el usuario de la empresa
        this.usuarioService.registrarUsuario(this.usuario).subscribe(usuario => {
          swal({
            title: 'Usuario de '+empresa['nombre']+' creado',
            html:
            "<h3 class='mb-3'>Datos del usuario</h3>"+
            "<div class='mb-2'>"+
                "<label><b>Código: </b>" + this.usuario.codigo + "</label>"+
            "</div>"+
            "<div class='mb-2'>"+
                "<label><b>Nombre: </b>" + this.usuario.nombre + "</label>"+
            "</div>"+
            "<div>"+
                "<label><b>Dirección de Correo Electrónico: </b>" + this.usuario.email + "</label>"+
            "</div>",
            type: 'success',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Aceptar',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: true
          });
        }, error => this.errors.push(error.message));
      }, error => this.errors.push(error.message));
    }
    

    //Vaciamos los campos del formulario
    this.empresa.codigo = null;
    this.empresa.nombre = null;
    this.empresa.direccion = null;
    this.empresa.cp = null;

    //Vaciamos las variables errors y success luego de 5 segundos
    setTimeout(() => {
      this.success=null;
      this.errors=[];
    }, 5000);
  }

}
