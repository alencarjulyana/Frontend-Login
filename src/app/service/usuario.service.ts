import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../Model/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://127.0.0.1:5000/register';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.URL_USUARIOS);
  }

  registrar(novoUsuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(
        `${this.URL_USUARIOS}`, novoUsuario);
  }

  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_USUARIOS}/${idParaRemocao}`);
  }

  atualizar(Usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp
        .put<Usuario>(`${this.URL_USUARIOS}/${Usuario._id}`, Usuario);
  }

}
