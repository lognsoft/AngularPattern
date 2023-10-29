import { IFilme } from "../models/IFilme";

export class Filme implements IFilme{
  id:any = 0;
  titulo:string = "";
  constructor(titulo:string){
    this.titulo = titulo;
  }
}
