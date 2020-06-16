import { Component, ElementRef, Renderer2, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
//
import { SpringSecurity } from '../config/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  // Injecao (Servico Security e Rota Angular) //
  constructor(private serSecurity: SpringSecurity, private router: Router) {}

  ngOnInit() {
    // Autorizacao (Token) //
    const obj: String = this.serSecurity.getSecurityToken();
    if (obj !== "true") {
      this.router.navigate(['']); // tela (Login)
    }
  }
}