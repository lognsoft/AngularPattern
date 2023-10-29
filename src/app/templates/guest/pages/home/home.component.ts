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

  constructor(private serviceFilme:ServiceFilme<IFilme>){
    this.Filmes = this.serviceFilme.ListData;
    this.Filme = this.serviceFilme.SingleData;

    this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
    this.serviceFilme.SingleEmitter.subscribe(filme => this.Filme = filme);

    this.serviceFilme.GetAll();
    this.serviceFilme.GetSingleById(8);
  }

  private ngOnInit():void {
    // this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
    // this.serviceFilme.SingleEmitter.subscribe(filme => this.Filme = filme);
  }
}
