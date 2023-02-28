import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { Empresa } from '../../../classes/empresa/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas:Empresa[];
  numEmpresas;
  errors=[];

  constructor(private empresaService: EmpresaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
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

  eliminarEmpresa(id:number){
    swal({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar esta empresa",
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
        this.empresaService.eliminarEmpresa(id).subscribe(empresa => {
          this.obtenerEmpresas();
          swal(
            'Empresa eliminada',
            'La empresa ha sido eliminada con éxito',
            'success'
          )
        }, error => this.errors.push(error.message));
      }
    });
  }
}
