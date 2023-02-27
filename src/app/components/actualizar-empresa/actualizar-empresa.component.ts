import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../classes/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  id:number;
  empresa:Empresa = new Empresa();
  success:string;
  errors=[];

  constructor(private empresaService:EmpresaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaService.obtenerEmpresaPorId(this.id).subscribe(empresa => {
      this.empresa = empresa;
    }, error => console.log(error));
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
      this.empresaService.actualizarEmpresa(this.id, this.empresa).subscribe(empresa => {
        this.success="Empresa actualizada correctamente";
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
