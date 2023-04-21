import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
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
  providers: [MenuService],
})
export class MenuModule { }
