import { IFilme } from "./IFilme";

export interface IFavorito {
  usuario: string;
  listaFavoritos: Array<IFilme>;
}
