// REGRAS DE IMPORTAÇÃO
// 1. Componentes Angular (por exemplo, '@angular/core')
// 2. Serviços (por exemplo, '../services/usuarios-list.service')
// 3. Interfaces
// 4. Entidades
// 5. Outros
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'teste';
}
