import { Component } from '@angular/core';
import { IFilme } from 'src/app/core/models/IFilme';
import { ServiceFilme } from 'src/app/shared/services/service-filme.service';
import {IFavorito} from "../../../../core/models/IFavorito";
import {ServiceFavorito} from "../../../../shared/services/service-favorito.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected Filmes:Array<IFilme> = new Array<IFilme>();
  protected Filme?:IFilme;
  protected Favoritos:Array<IFavorito> = new Array<IFavorito>();
  protected Favorito?:IFavorito;

  constructor(
    private serviceFilme: ServiceFilme<IFilme>,
    private serviceFavorito: ServiceFavorito<IFavorito>
  ) {

    ////////////////////////////////IMPLEMENTAR FAVORITO/////////////////////////////////////
  }
  private async ngOnInit():Promise<void> {
    await this.FilmeEmitters();
    await this.FavoritoEmitters();
  }
  private async FavoritoEmitters(){
    // Inicializando métodos de requisição
    // Chama os métodos para obter todos os filmes e um filme pelo ID
    await this.serviceFavorito.GetAll();
    await this.serviceFavorito.GetSingleById(4); // Exemplo de chamada com ID 8

    // Instância das variáveis de serviço
    // Obtém as listas de filmes e filme
    this.Favoritos = this.serviceFavorito.ListData;
    this.Favorito = this.serviceFavorito.SingleData;

    // Inicializando ouvintes para atualizações
    // Registra ouvintes para atualizações na lista de filmes e filme
    this.serviceFavorito.ListEmitter.subscribe(favoritos => this.Favoritos = favoritos);
    this.serviceFavorito.SingleEmitter.subscribe(favorito => this.Favorito = favorito);
  }

  private async FilmeEmitters(){
    // Inicializando métodos de requisição
    // Chama os métodos para obter todos os filmes e um filme pelo ID
    await this.serviceFilme.GetAll();
    await this.serviceFilme.GetSingleById(7); // Exemplo de chamada com ID 8

    // Instância das variáveis de serviço
    // Obtém as listas de filmes e filme
    this.Filmes = this.serviceFilme.ListData;
    this.Filme = this.serviceFilme.SingleData;

    // Inicializando ouvintes para atualizações
    // Registra ouvintes para atualizações na lista de filmes e filme
    this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
    this.serviceFilme.SingleEmitter.subscribe(filme => this.Filme = filme);
  }
}
