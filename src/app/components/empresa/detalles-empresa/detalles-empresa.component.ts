import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../../../classes/empresa/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-detalles-empresa',
  templateUrl: './detalles-empresa.component.html',
  styleUrls: ['./detalles-empresa.component.css']
})
export class DetallesEmpresaComponent implements OnInit {

  id:number;
  empresa:Empresa;
  errors=[];

  constructor(private route:ActivatedRoute, private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresa = new Empresa();
    this.empresaService.obtenerEmpresaPorId(this.id).subscribe(empresa => {
      this.empresa = empresa;
    }, error => this.errors.push(error.message));
    

    //Vaciamos la variable errors luego de 5 segundos
    setTimeout(() => {
      this.errors=[];
    }, 5000);
  }

}
