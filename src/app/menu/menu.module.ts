// menu.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { MenuService } from './services/menu.service';

@NgModule({
declarations: [
MenuComponent,
MenuListComponent
],
imports: [
CommonModule,
MenuRoutingModule
],
})
export class MenuModule {}
