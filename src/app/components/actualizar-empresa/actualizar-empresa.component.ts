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

  constructor(private empresaService:EmpresaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaService.obtenerEmpresaPorId(this.id).subscribe(dato => {
      this.empresa = dato;
    }, error => console.log(error));
  }

  onSubmit(){
    this.empresaService.actualizarEmpresa(this.id, this.empresa).subscribe(dato => {
      this.router.navigate(['/empresas']);
    },error => console.log(error));
  }

}
