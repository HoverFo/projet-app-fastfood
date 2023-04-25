import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastfoodRoutingModule } from './fastfood-routing.module';
import { FastfoodComponent } from './fastfood.component';
import { FastfoodListComponent } from './pages/fastfood-list/fastfood-list.component';
import { FastfoodService } from './services/fastfood.service';
import { SharedModule } from '../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { FastfoodFormComponent } from './components/fastfood-form/fastfood-form.component';


@NgModule({
  declarations: [
    FastfoodComponent,
    FastfoodListComponent,
    FastfoodFormComponent
  ],
  imports: [
    CommonModule,
    FastfoodRoutingModule,
    SharedModule,
    MatRadioModule
  ],
  providers: [FastfoodService],
})
export class FastfoodModule { }
