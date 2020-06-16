import { Component, OnInit } from '@angular/core';
//
import { SpringSecurity } from './config/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})

export class AppComponent implements OnInit {

  showMenu: boolean = false;

  // Injecao (Servico Security)) //
  constructor(private serSecurity: SpringSecurity) {}

  ngOnInit() {
    // Autorizacao (Token) //
    const obj: String = this.serSecurity.getSecurityToken();
    if (obj == "true") {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
}