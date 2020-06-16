import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//
import { SpringSecurity } from '../config/security.service';
import { UsuarioService } from '../service/usuario.service';
import { IUsuario } from '../model/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})

export class UsuarioComponent implements OnInit  {

  usuarios: IUsuario[] = [];
  usuario: IUsuario = <IUsuario>{};
  form: FormGroup;

  // Injecao (Servicos, Rota e Forms Angular) //
  constructor(private usrService: UsuarioService,
              private serSecurity: SpringSecurity,
              private router: Router, 
              private fb: FormBuilder) {

    // Set Validacao Form //
    this.form = fb.group({
      'id': ["0"],
      'nome': ["", Validators.required],
      'login': ["", Validators.required],
      'senha': ["", Validators.required]
    });
  }

  // Listar all //
  getUsuario() {
    this.usuarios = this.usrService.getUsuario();
  }

  // Listar Id //
  getUsuarioID(id : number) {
    this.usuario = this.usrService.getUsuarioID(id);
    this.form.controls["id"].setValue(this.usuario.id);
    this.form.controls["nome"].setValue(this.usuario.nome);
    this.form.controls["login"].setValue(this.usuario.login);
    this.form.controls["senha"].setValue(this.usuario.senha);
  }

  // Add ou Update //
  addUsuario() {
    this.usuario.id = this.form.controls["id"].value;
    this.usuario.nome = this.form.controls["nome"].value;
    this.usuario.login = this.form.controls["login"].value;
    this.usuario.senha = this.form.controls["senha"].value;
    if (this.usrService.addUsuario(this.usuario) == false) {
      alert('Erro: Gravando registro!');
      return;
    }
    this.getUsuario();
    this.inicializaTela();    
  };

  // Delete //
  delUsuario(id : number) {
    if (this.usrService.delUsuario(id) == false) {
      alert('Erro: Deletando registro!');
      return;      
    }
    this.getUsuario();
    this.inicializaTela();
  };

  // Limpa Tela //
  inicializaTela() {
    this.form.controls["id"].setValue("0");
    this.form.controls["nome"].setValue("");
    this.form.controls["login"].setValue("");
    this.form.controls["senha"].setValue("");
  };  

  ngOnInit() {
    // Autorizacao (Token) //
    const obj: String = this.serSecurity.getSecurityToken();
    if (obj !== "true") {
      this.router.navigate(['']); // tela (Login)
    } else {
      this.getUsuario();
    }
  }
}