import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas:Empresa[];

  constructor(private empresaSerivce: EmpresaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  private obtenerEmpresas(){
    this.empresaSerivce.obtenerListaDeEmpresas().subscribe(dato => {
      this.empresas = dato;
    });
  }

  actualizarEmpresa(id:number){
    this.router.navigate(['actualizar-empresa', id]);
  }

  verDetallesDeEmpresa(id:number){
    this.router.navigate(['detalles-empresa', id]);
  }
}
