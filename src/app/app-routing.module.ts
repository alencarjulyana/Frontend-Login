import { TelaControleComponent } from './tela-controle/tela-controle.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'tela-controle', component: TelaControleComponent },
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
