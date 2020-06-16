import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpringSecurity {

  private urlSecurity: String;
  // Injecao (HttpClient) //
  constructor(private http: HttpClient) {
    this.urlSecurity = (<HTMLInputElement>document.getElementById("urlSecurity")).value;
  }

  // View Login Security //
  getSecurityLogin() : String {
    let obj: String = "false";

    let req = new XMLHttpRequest();
    req.open("GET", this.urlSecurity.toString() + '/login', false);

    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = req.response;
        } else {
          alert("Erro: Login do usuário, <Spring Security>!");
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert("Erro: Login do usuário, <Spring Security>!");
      return obj;
    }

    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }

  // Autoriza Security (Token) //
  getSecurityToken() : String {
    let obj: String = "false";
    let req = new XMLHttpRequest();

    req.open("GET", this.urlSecurity.toString() + '/api/TokenAutoriza', false);
    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = req.response;
          return obj;
        } else {
          alert("Erro: Autorização do usuário, <efetue login>!");
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert("Erro: Autorização do usuário, <efetue login>!");
      return obj;
    }
    
    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }
}