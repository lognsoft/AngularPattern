import { IFilme } from "./IFilme";

export interface IFavorito {
  id: number;
  nome: string;
  listaFavoritos: Array<IFilme>;
}
