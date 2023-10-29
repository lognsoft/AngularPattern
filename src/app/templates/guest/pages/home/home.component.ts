import { Component } from '@angular/core';
import { IFilme } from 'src/app/shared/models/IFilme';
import { ServiceFilme } from 'src/app/shared/services/service-filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected Filmes:Array<IFilme> = new Array<IFilme>();

  constructor(private serviceFilme:ServiceFilme<IFilme>){
    this.Filmes = this.serviceFilme.ListData;
    this.serviceFilme.Get();
  }

  private ngOnInit():void {
    this.serviceFilme.ListEmitter.subscribe(filmes => this.Filmes = filmes);
  }


}
