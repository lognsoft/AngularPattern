import { Component } from '@angular/core';

@Component({
  selector: 'app-guest',
  template: `
  <app-guest-header></app-guest-header>
  <router-outlet></router-outlet>
  <app-guest-footer></app-guest-footer>`,
})
export class GuestComponent {

}