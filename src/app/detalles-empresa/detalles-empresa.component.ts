import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-detalles-empresa',
  templateUrl: './detalles-empresa.component.html',
  styleUrls: ['./detalles-empresa.component.css']
})
export class DetallesEmpresaComponent implements OnInit {

  id:number;
  empresa:Empresa;

  constructor(private route:ActivatedRoute, private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresa = new Empresa();
    this.empresaService.obtenerEmpresaPorId(this.id).subscribe(dato => {
      this.empresa = dato;
    });
  }

}
