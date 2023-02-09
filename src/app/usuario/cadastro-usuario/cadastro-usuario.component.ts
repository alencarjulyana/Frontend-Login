import { AuthCadastroServiceService } from './auth-cadastro.service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario';
import {UsuarioService} from "../../service/usuario.service";


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  
  router: Router;

  usuario : Usuario;
  UsuarioService: any;

  constructor(private AuthCadastroServiceService: AuthCadastroServiceService,  router: Router) {
    this.router = router;
    this.usuario = new Usuario('', {});
  }

  ngOnInit(): void {
  }


  inserirUsuario(): void{
    this.AuthCadastroServiceService.inserirUsuario(this.usuario);

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
      this.usuario = new Usuario();
    }


}
