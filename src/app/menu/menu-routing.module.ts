// menu-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';

const routes: Routes = [
{ path: 'fastfood/:fastfoodid', component: MenuListComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MenuRoutingModule {}
