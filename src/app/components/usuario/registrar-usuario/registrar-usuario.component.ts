import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/classes/empresa/empresa';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  empresas:Empresa[];
  numEmpresas;
  success:string;
  errors=[];

  constructor(private usuarioService:UsuarioService, private empresaService:EmpresaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  onSubmit(){
    //Validaciones
    if(this.usuario.empresa==null){
      this.errors.push("La empresa del usuario es requerida");
    }
    if(this.usuario.codigo==null){
      this.errors.push("El código del usuario es requerido");
    }
    else{
      //Si ya se seleccionó empresa
      if(this.usuario.empresa!=null){
        //Concatenamos el código de la empresa con los dos digitos del usuario
        this.usuario.codigo = this.usuario.empresa.codigo + this.usuario.codigo;
      }
    } 
    if(this.usuario.nombre==null){
      this.errors.push("El nombre del usuario es requerido");
    }
    if(this.usuario.email==null){
      this.errors.push("La dirección de correo electrónico del usuario es requerida");
    }


    //Registramos el usuario
    if(this.errors.length == 0){
      this.usuarioService.registrarUsuario(this.usuario).subscribe(usuario => {
        this.success="Usuario registrado correctamente";
      }, error => this.errors.push(error.message));
    }

    //Vaciamos los campos del formulario
    this.usuario.empresa = undefined;
    this.usuario.codigo = null;
    this.usuario.nombre = null;
    this.usuario.email = null;

    //Vaciamos las variables errors success luego de 5 segundos
    setTimeout(() => {
      this.success=null;
      this.errors=[];
    }, 5000);
  }

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

}
