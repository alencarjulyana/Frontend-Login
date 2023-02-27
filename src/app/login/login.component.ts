import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from "../service/usuario.service";
import { IMensagem } from '../service/IMensagem';
import { MensagemService } from '../service/mensagem.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginFormComponent implements OnInit {

  usuario: Usuario = new Usuario();

  hide = true;
  login = {
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required])
  }
  UsuarioService: UsuarioService;


  constructor(private AuthService: AuthService,  private router: Router, UsuarioService: UsuarioService, private MensagemService: MensagemService){
    this.usuario = new Usuario('', {});
    this.UsuarioService = UsuarioService;
    this.MensagemService = MensagemService;

   }


  ngOnInit(): void {
  }

  
  fazerLogin(){
    this.AuthService.fazerLogin(this.usuario);
    this.MensagemService.logincomsucesso('Login autorizado')

  }

  formValid() {
    return this.login.email.valid && this.login.senha.valid;
  }

  inserirUsuario(): void{
    this.AuthService.inserirUsuario(this.usuario);

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
      this.usuario = new Usuario();
    }

    
    

}
