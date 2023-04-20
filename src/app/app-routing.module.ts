// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MenuListComponent } from './menu/pages/menu-list/menu-list.component';

const routes: Routes = [
{ path: '', redirectTo: '/fastfood', pathMatch: 'full' },
{ path: 'fastfood', loadChildren: () => import('./fastfood/fastfood.module').then(m => m.FastfoodModule) },
{ path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }