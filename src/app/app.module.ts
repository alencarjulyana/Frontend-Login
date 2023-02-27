import { UsuarioModule } from './usuario/usuario.module';
import { MatInputModule } from '@angular/material/input';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import {  MatCardModule } from '@angular/material/card';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { TelaControleComponent } from './tela-controle/tela-controle.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    TelaControleComponent,
    
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    UsuarioModule,
    MatSnackBarModule,





  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
