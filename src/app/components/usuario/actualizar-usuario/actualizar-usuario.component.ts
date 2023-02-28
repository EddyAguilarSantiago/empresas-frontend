import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/classes/empresa/empresa';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario = new Usuario();
  nombreEmpresa:string;
  success:string;
  errors=[];

  constructor(private usuarioService:UsuarioService, private empresaService:EmpresaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(usuario => {
      this.usuario = usuario;
      this.nombreEmpresa=this.usuario.empresa.nombre;
    }, error => console.log(error));
  }

  onSubmit(){
    //Validaciones
    if(this.usuario.nombre==null){
      this.errors.push("El nombre del usuario es requerido");
    }
    if(this.usuario.email==null){
      this.errors.push("La dirección de correo electrónico del usuario es requerida");
    }

    //Registramos el usuario
    if(this.errors.length == 0){
      this.usuarioService.actualizarUsuario(this.id, this.usuario).subscribe(usuario => {
        this.success="Usuario actualizado correctamente";
      }, error => this.errors.push(error.message));
    }

    //Vaciamos las variables errors success luego de 5 segundos
    setTimeout(() => {
      this.success=null;
      this.errors=[];
    }, 5000);
  }
}
