import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/classes/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  //URL para conexión con Backend
  private baseURL="http://localhost:8080/usuarios"

  constructor(private httpClient:HttpClient) { }

  //Método para obtener los usuarios
  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  //Método para registrar usuario
  registrarUsuario(usuario: Usuario):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }
}
