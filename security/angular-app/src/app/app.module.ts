// Angular //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes WebSite //
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './cadastro/usuario.component';

// Servicos API //
import { SpringSecurity } from './config/security.service';
import { RequisicaoAPI } from './config/requisicao.service';
import { UsuarioService } from './service/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    HomeComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([      
      { path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', component: LoginComponent},      
      { path: 'home', component: HomeComponent},
      { path: 'usuario', component: UsuarioComponent},
    ]),
  ],
  providers: [
    SpringSecurity,
    RequisicaoAPI,
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}