import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../../../classes/empresa/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  empresa : Empresa = new Empresa();
  success:string;
  errors=[];

  constructor(private empresaService:EmpresaService, private router:Router) {}

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

    //Registramos la empresa
    if(this.errors.length == 0){
      this.empresaService.registrarEmpresa(this.empresa).subscribe(empresa => {
        this.success="Empresa registrada correctamente";
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
