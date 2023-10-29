import { IFilme } from "./IFilme";

export interface IFavorito {
  id:any,
  nome:string;
  listaFavoritos:Array<IFilme>
}
