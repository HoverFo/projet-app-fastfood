import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastfoodRoutingModule } from './fastfood-routing.module';
import { FastfoodComponent } from './fastfood.component';
import { FastfoodListComponent } from './pages/fastfood-list/fastfood-list.component';
import { FastfoodService } from './services/fastfood.service';


@NgModule({
  declarations: [
    FastfoodComponent,
    FastfoodListComponent
  ],
  imports: [
    CommonModule,
    FastfoodRoutingModule
  ],
  providers: [FastfoodService],
})
export class FastfoodModule { }
