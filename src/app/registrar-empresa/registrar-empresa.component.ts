import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  empresa : Empresa = new Empresa();

  constructor(private empresaService:EmpresaService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.guardarEmpresa();
  }

  guardarEmpresa(){
    this.empresaService.registrarEmpresa(this.empresa).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['/empresas']);
    }, error => console.log(error));
  }

}
