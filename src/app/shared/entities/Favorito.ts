import { IFilme } from "../models/IFilme";
import { IFavorito } from "../models/IFavorito";

export class Favorito implements IFavorito{
  id: number = 0;
  listaFavoritos: Array<IFilme>;
  nome: string = "";

  constructor(id: number, listaFavoritos: Array<IFilme>, nome: string) {
    this.id = id;
    this.listaFavoritos = listaFavoritos;
    this.nome = nome;
  }
}
