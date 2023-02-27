import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../../classes/empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  //URL para obtener listado de empresas del Backend
  private baseURL="http://localhost:8080/empresas";

  constructor(private httpClient: HttpClient) { }

  //Método para obtener las empresas
  obtenerListaDeEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(`${this.baseURL}`);
  }

  //Método para registrar empresa
  registrarEmpresa(empresa: Empresa):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empresa);
  }

  //Método para buscar empresa
  obtenerEmpresaPorId(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.baseURL}/${id}`);
  }

  //Método para actualizar empresa
  actualizarEmpresa(id: number, empresa:Empresa):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empresa);
  }

  //Método para eliminar empresa
  eliminarEmpresa(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
