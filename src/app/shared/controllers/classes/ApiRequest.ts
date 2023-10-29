// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { EventEmitter  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiRequest } from "../interfaces/IApiRequest";
import { environment } from 'src/environments/environment.development';

export abstract class ApiRequest<T> implements IApiRequest<T> {

  public readonly Router: string;
  public readonly URL:string = environment.apiUrl;
  public ListEmitter = new EventEmitter();
  public ListData : Array<T> = new Array<T>();
  public SingleEmitter = new EventEmitter();
  public SingleData : T;
  public readonly HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  protected constructor(protected http: HttpClient, protected router:string, public singleData: T) {
    this.Router = router;
    this.SingleData = singleData;
  };

  public ListEmitterLoad():void {
    this.ListEmitter.emit(this.ListData);
  }

  public SingleEmitterLoad():void {
    this.SingleEmitter.emit(this.SingleData);
  }
  public async GetSingleById(id: any): Promise<void> {
    try {
      const res = await this.http.get(`${this.URL}${this.Router}/${id}`).toPromise();

      this.SingleData = res as T;

      this.SingleEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }

  public async Get(): Promise<void> {
    try {
      const res = await this.http.get(`${this.URL}${this.Router}`).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(error);
    }
  }

  public async Post(data: T): Promise<void> {
    try {
      const res = await this.http.post(`${this.URL}${this.Router}`, JSON.stringify(data), this.HttpOptions).toPromise();

      this.ListData.push(res as T);

      this.ListEmitterLoad();
    } catch (error) {
      console.error(error);
    }
  }

  public async Put(id: any, data: T): Promise<void> {
    try {
      const res = await this.http.put(`${this.URL}${this.Router}/${id}`, JSON.stringify(data), this.HttpOptions).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }

  public async Delete(data: T, id: any): Promise<void> {
    try {
      const res = await this.http.delete<T>(`${this.URL}${this.Router}/${id}`, this.HttpOptions).toPromise();

      this.ListData = res as Array<T>;

      this.ListEmitterLoad();
    } catch (error) {
      console.log(`${this.URL} ${this.Router} ${error}`);
    }
  }




  // public Put(id:any, data:T){
  //   this.http.put(`${this.URL}${this.Router}/${id}`, JSON.stringify(data), this.HttpOptions).subscribe({
  //     next:(res)=>{
  //       this.ListData.filter(item => id == id, data);
  //       this.ListEmitterLoad();
  //     },
  //     error:(error) => {console.log(`${this.URL} ${this.Router} ${error}`)},
  //     complete(){}
  //   })
  // }

  // public Post(data: T) : void {
  //
  //   this.http.post(`${this.URL}${this.Router}`, JSON.stringify(data), this.HttpOptions).subscribe(
  //     {
  //       next: (res) => {
  //         this.ListData.push(res as T);
  //         this.ListEmitterLoad();
  //       },
  //       error:(error) => {console.log(`${this.URL} ${this.Router} ${error}`)},
  //       complete() { },
  //     }
  //   )
  // }

  // public async servicoList(): Promise<Array<Usuario>> {
  //
  //   try {
  //     const res = await this.http.get(this.URL + 'usuario').pipe().toPromise();
  //     this.Usuarios = res as Array<Usuario>;
  //
  //     this.loadUsuarios(this.Usuarios);
  //
  //     return this.Usuarios;
  //
  //   } catch (error) {
  //     console.log(error);
  //     return this.Usuarios = [];
  //   }
  // }
  //
  // public Get(): void {
  //
  //   this.http.get(`${this.URL}${this.Router}`).subscribe (
  //     {
  //       next: (res) => {
  //         this.ListData = res as Array<T>;
  //         this.ListEmitterLoad();
  //         },
  //       error:(error) => {console.log(`${this.URL} ${this.Router} ${error}`)},
  //       complete:() => { },
  //     }
  //   );
  // }

}
