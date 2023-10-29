import { Component } from '@angular/core';
import { IFilme } from 'src/app/shared/models/IFilme';
import { ServiceFilme } from 'src/app/shared/services/service-filme.service';
import {Filme} from "../../../../shared/entities/Filme";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected Filmes:Array<IFilme> = new Array<IFilme>();
  protected Filme?:IFilme;

  constructor(private serviceFilme: ServiceFilme<IFilme>) {

    this.FilmeEmitters();

    ////////////////////////////////IMPLEMENTAR FAVORITO/////////////////////////////////////
  }
  private ngOnInit():void {

  }
  FilmeEmitters(){
    // Instância das variáveis de serviço
    // Obtém as listas de filmes e filme
    this.Filmes = this.serviceFilme.ListData;
    this.Filme = this.serviceFilme.SingleData;

    // Inicializando ouvintes para atualizações
    // Registra ouvintes para atualizações na lista de filmes e filme
    this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
    this.serviceFilme.SingleEmitter.subscribe(filme => this.Filme = filme);

    // Inicializando métodos de requisição
    // Chama os métodos para obter todos os filmes e um filme pelo ID
    this.serviceFilme.GetAll();
    this.serviceFilme.GetSingleById(8); // Exemplo de chamada com ID 8
  }
}
