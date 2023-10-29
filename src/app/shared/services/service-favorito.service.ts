// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFavorito } from '../../core/models/IFavorito';
import { Favorito } from '../../core/entities/Favorito';
import { ApiRequest } from '../../core/controllers/classes/ApiRequest';

import { EndPoints } from "../../core/controllers/classes/EndPoints";
import { IFilme } from '../../core/models/IFilme';

@Injectable({
  providedIn: 'root'
})
export class ServiceFavorito<T extends IFavorito> extends ApiRequest<IFavorito> {

  constructor(http:HttpClient) {
    super(http, EndPoints.URL.favoritos);
  }
}
