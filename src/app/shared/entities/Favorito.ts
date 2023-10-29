import { IFilme } from "../models/IFilme";
import { IFavorito } from "../models/IFavorito";

export class Favorito implements IFavorito{
  id: number = 0;
  listaFavoritos: Array<IFilme>;
  usuario: string = "";

  constructor(
    listaFavoritos: Array<IFilme>,
    nome: string
  ) {
    this.listaFavoritos = listaFavoritos;
    this.usuario = nome;
  }
}
