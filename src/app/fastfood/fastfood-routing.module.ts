import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FastfoodListComponent } from './pages/fastfood-list/fastfood-list.component';

const routes: Routes = [
  {
    path: '',
    component: FastfoodListComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FastfoodRoutingModule { }
