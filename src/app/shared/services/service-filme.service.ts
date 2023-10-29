// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilme } from '../../core/models/IFilme';
import { Filme } from '../../core/entities/Filme';
import { ApiRequest } from '../../core/controllers/classes/ApiRequest';
import { EndPoints } from '../../core/controllers/classes/EndPoints';

@Injectable({
  providedIn: 'root'
})
export class ServiceFilme<T extends IFilme> extends ApiRequest<IFilme>{
  constructor(http:HttpClient) {
    super(http, EndPoints.URL.filmes);
  }
}
