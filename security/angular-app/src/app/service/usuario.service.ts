import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//
import { IUsuario } from '../model/usuario.interface';
import { RequisicaoAPI } from '../config/requisicao.service';

@Injectable()
export class UsuarioService {

    // Injecao (Servico API) //
    constructor(private serAPI: RequisicaoAPI) {}

    // Listar //
    getUsuario() : IUsuario[] {
        return this.serAPI.getListaAPI('/api/Usuario').map(data => data as IUsuario);
    }

    // Listar Id //
    getUsuarioID(id : number) : IUsuario {
        return this.serAPI.getRegistroAPI('/api/Usuario/Edit/' + id);
    }    

    // Add e ou Update //
    addUsuario(usuario: IUsuario) : Boolean {
        return this.serAPI.addAPI('/api/Usuario/Save/', usuario);
    }

    // delete //
    delUsuario(id : number) : Boolean {
       return this.serAPI.deletaAPI('/api/Usuario/Delete/' + id);
    }
}