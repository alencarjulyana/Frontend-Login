import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';

@Injectable(
)

export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor (private router: Router) {}

fazerLogin(usuario: Usuario): void {
    if (usuario.email === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true ;
      this.router.navigate(['/tela-controle']);

    } else {
      this.usuarioAutenticado = false;
    }
  }

  inserirUsuario(usuario: Usuario): void {
    if (usuario.email === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true ;
      this.router.navigate(['/tela-controle']);

    }
}
}
