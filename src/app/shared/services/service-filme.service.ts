// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilme } from '../models/IFilme';
import { Filme } from '../entities/Filme';
import { ApiRequest } from '../controllers/classes/ApiRequest';
import { EndPoints } from '../controllers/classes/EndPoints';

@Injectable({
  providedIn: 'root'
})
export class ServiceFilme<T extends IFilme> extends ApiRequest<IFilme>{

  constructor(http:HttpClient, private filme:Filme) {
    super(http, EndPoints.EndPoints.filmes, filme);
  }
}
