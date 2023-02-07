import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario';


@Injectable({
  providedIn: 'root'
})

export class AuthCadastroServiceService {
  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }


  inserirUsuario(usuario: Usuario): void {
    if (usuario.email === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true ;
      this.router.navigate(['/tela-controle']);

    }
}
}
