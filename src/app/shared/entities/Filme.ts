import { IFilme } from "../models/IFilme";

export class Filme implements IFilme{
  Id:any = 0;
  Titulo:string = "";

  constructor(titulo?:string){
    // if(titulo) this.Titulo = titulo;
    this.Titulo = "";
  }
}
