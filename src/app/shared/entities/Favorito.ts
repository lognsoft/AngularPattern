import { IFilme } from "../models/IFilme";
import { IFavorito } from "../models/IFavorito";

export class Favorito implements IFavorito{
  id:any;
  nome:string = "";
  listaFavoritos: Array<IFilme> = new Array<IFilme>();
}
