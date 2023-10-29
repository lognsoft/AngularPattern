import { IFilme } from "./IFilme";

export interface IFavorito {
  id:any;
  usuario: string;
  sobrenome:string;
  filmesFavoritos: Array<IFilme>;
}
