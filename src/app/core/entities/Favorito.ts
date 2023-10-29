import { IFilme } from "../models/IFilme";
import { IFavorito } from "../models/IFavorito";

export class Favorito implements IFavorito{
  id: number = 0;
  filmesFavoritos: Array<IFilme>;
  sobrenome:string = "";
  usuario: string = "";

  constructor(
    listaFavoritos: Array<IFilme>,
    nome: string
  ) {
    this.filmesFavoritos = listaFavoritos;
    this.usuario = nome;
  }
}
