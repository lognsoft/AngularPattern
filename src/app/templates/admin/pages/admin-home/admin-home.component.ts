import { Component } from '@angular/core';
import { IFilme } from 'src/app/core/models/IFilme';
import { Filme } from 'src/app/core/entities/Filme';
import { ServiceFilme } from 'src/app/shared/services/service-filme.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {


  public Filmes:Array<IFilme> = new Array<IFilme>();

  constructor(private serviceFilme:ServiceFilme<IFilme>){
    this.serviceFilme.GetAll();
    this.Filmes = this.serviceFilme.ListData;
  }

  private ngOnInit():void {
    this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
  }

  public cadastrarFilme(titulo:string):void{
    let filme = new Filme(titulo);
    this.serviceFilme.Post(filme);
  }
}
