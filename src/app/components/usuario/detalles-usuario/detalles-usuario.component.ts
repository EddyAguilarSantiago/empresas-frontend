import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario;
  errors=[];

  constructor(private route:ActivatedRoute, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(usuario => {
      this.usuario = usuario;
    }, error => this.errors.push(error.message));
    
    //Vaciamos la variable errors luego de 5 segundos
    setTimeout(() => {
      this.errors=[];
    }, 5000);
  }

}
