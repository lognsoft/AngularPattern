// Importações necessárias
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiRequest } from "../interfaces/IApiRequest";
import { environment } from 'src/environments/environment.development';

// Classe abstrata que define funcionalidades comuns para requisições à API
export abstract class ApiRequest<T> implements IApiRequest<T> {

  public readonly Router: string;  // Rota da API
  public readonly URL: string = environment.apiUrl;  // URL base da API
  public ListEmitter = new EventEmitter();  // Emissor de eventos para atualizações na lista de dados
  public ListData: Array<T> = new Array<T>();  // Lista de dados
  public SingleEmitter = new EventEmitter();  // Emissor de eventos para atualizações de um único item
  public SingleData?: T;  // Dado individual
  public readonly HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Construtor da classe
  protected constructor(protected http: HttpClient, protected router: string) {
    this.Router = router;


    // Inicializando ouvintes para atualizações
    // Registra ouvintes para atualizações na lista de filmes e filme
    // this.ListEmitter.subscribe(filmes => this.ListData = filmes);
    //this.SingleEmitter.subscribe(filme => this.SingleData = filme);
  };

  // Método para emitir eventos de atualização na lista de dados
  public ListEmitterLoad(): void {
    this.ListEmitter.emit(this.ListData);
  }

  // Método para emitir eventos de atualização de um único item
  public SingleEmitterLoad(): void {
    this.SingleEmitter.emit(this.SingleData);
  }

  // Método para buscar um único item por ID
  public async GetSingleById(id: any): Promise<void> {
    try {
      const res = await this.http.get(`${this.URL}${this.Router}/${id}`).toPromise();

      this.SingleData = res as T;

      this.SingleEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }

  // Método para buscar todos os itens
  public async GetAll(): Promise<void> {
    try {
      const res = await this.http.get(`${this.URL}${this.Router}`).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();

    } catch (error) {
      console.log(error);
    }
  }

  // Método para adicionar um novo item
  public async Post(data: T): Promise<void> {
    try {
      const res = await this.http.post(`${this.URL}${this.Router}`, JSON.stringify(data), this.HttpOptions).toPromise();

      this.ListData.push(res as T);

      this.ListEmitterLoad();
    } catch (error) {
      console.error(error);
    }
  }

  // Método para atualizar um item existente
  public async Put(id: any, data: T): Promise<void> {
    try {
      const res = await this.http.put(`${this.URL}${this.Router}/${id}`, JSON.stringify(data), this.HttpOptions).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }

  // Método para excluir um item
  public async Delete(data: T, id: any): Promise<void> {
    try {
      const res = await this.http.delete<T>(`${this.URL}${this.Router}/${id}`, this.HttpOptions).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }
}
