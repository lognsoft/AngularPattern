import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { GuestHeaderComponent } from './components/guest-header/guest-header.component';
import { GuestFooterComponent } from './components/guest-footer/guest-footer.component';


@NgModule({
  declarations: [
    GuestComponent,
    GuestHeaderComponent,
    GuestFooterComponent,
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
