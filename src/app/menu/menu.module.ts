import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuListComponent } from './pages/menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuService } from './services/menu.service';
import { SharedModule } from '../shared/shared.module';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuFormComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    MatRadioModule
  ],
  providers: [MenuService],
})
export class MenuModule { }
