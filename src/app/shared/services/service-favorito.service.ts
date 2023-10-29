// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavorito } from '../models/IFavorito';
import { Favorito } from '../entities/Favorito';
import { ApiRequest } from '../controllers/classes/ApiRequest';

import { EndPoints } from "../controllers/classes/EndPoints";
import { IFilme } from '../models/IFilme';

@Injectable({
  providedIn: 'root'
})
export class ServiceFavorito<T extends IFavorito> extends ApiRequest<IFavorito> {

  constructor(http:HttpClient) {
    super(http, EndPoints.EndPoints.favoritos, new Favorito);
  }

  public async PutFavorite(filme: IFilme, favorito: IFavorito): Promise<void> {

    try {
      favorito.listaFavoritos.push(filme);

      const res = await this.http.put(`${this.URL}${this.Router}/${favorito.id}`, JSON.stringify(favorito), this.HttpOptions).toPromise();

      this.SingleData = res as T;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }
}
