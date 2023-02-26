import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  empresas:Empresa[];

  constructor(private empresaSerivce: EmpresaService) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  private obtenerEmpresas(){
    this.empresaSerivce.obtenerListaDeEmpresas().subscribe(dato => {
      this.empresas = dato;
    });
  }

}
