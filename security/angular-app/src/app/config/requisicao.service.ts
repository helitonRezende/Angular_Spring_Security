import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RequisicaoAPI {

  private urlSecurity: String;

  // Injecao (HttpClient) //
  constructor(private http: HttpClient) {
    this.urlSecurity = (<HTMLInputElement>document.getElementById("urlSecurity")).value;
  }

  // Listas - (API´s) //
  getListaAPI(metodo : String) : any[] {
    let obj: any[] = [];
    let req = new XMLHttpRequest();

    req.open("GET", this.urlSecurity.toString() + metodo, false);
    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = JSON.parse(req.response);
        } else {
          alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
      return obj;
    }
    
    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }

  // Lista Registro (API´s) //
  getRegistroAPI(metodo : String) : any {
    let obj: any = <any>{};
    let req = new XMLHttpRequest();

    req.open("GET", this.urlSecurity.toString() + metodo, false);
    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = JSON.parse(req.response);
        } else {
          alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
      return obj;
    }
    
    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }

  // Add (API´s) //
  addAPI(metodo : String, data : {}) : Boolean {
    let obj: Boolean = false;
    let req = new XMLHttpRequest();

    req.open("GET", this.urlSecurity.toString() + metodo + JSON.stringify(data), false);
    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = true;
        } else {
          alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
      return obj;
    }
    
    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }

  // Delete (API´s) //
  deletaAPI(metodo : String) : Boolean {
    let obj: Boolean = false;
    let req = new XMLHttpRequest();

    req.open("GET", this.urlSecurity.toString() + metodo, false);
    req.onload = function(e) {
      if (req.readyState === 4) {
        if (req.status == 200) {
          obj = true;
        } else {
          alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
          return obj;
        }
      }
    }
    req.onerror = function(e) {
      alert('Erro: Acessando API = ' + metodo + ', <Spring Boot>!');
      return obj;
    }
    
    new Promise((resolve) => {
      req.send(null);
      resolve(obj);
    });

    return obj;
  }
}