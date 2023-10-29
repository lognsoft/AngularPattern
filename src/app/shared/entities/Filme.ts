import { IFilme } from "../models/IFilme";

export class Filme implements IFilme{
  Id:any = 0;
  Titulo:string = "";
  constructor(titulo:string){
    this.Titulo = titulo;
  }
}
