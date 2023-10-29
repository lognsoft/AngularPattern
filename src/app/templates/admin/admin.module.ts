import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
