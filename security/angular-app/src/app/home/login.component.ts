import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
//
import { SpringSecurity } from '../config/security.service';

@Component({
  template: '<div #myDiv>Aguarde... carregando Spring Security</div>',
})

export class LoginComponent implements AfterViewInit  {

  @ViewChild('myDiv') myDiv: ElementRef;  

  // Injecao (Servico Security) //
  constructor(private serSecurity: SpringSecurity) {}

  // View Login (Spring Security) //  
  ngAfterViewInit() {
    const frmLogin: String = this.serSecurity.getSecurityLogin();
    if (frmLogin == "false") {
      this.myDiv.nativeElement.innerHTML = "<h1>Erro: Login do usuário, Spring Security!</h1>";
    } else {
      this.myDiv.nativeElement.innerHTML = frmLogin;
    }
  }
}