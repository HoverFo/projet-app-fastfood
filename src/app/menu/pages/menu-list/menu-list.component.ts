import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { FastfoodService } from '../../../fastfood/services/fastfood.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];
  fastfoodId: number;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private fastfoodService: FastfoodService
  ) { }

  ngOnInit(): void {
    const fastfoodId = this.route.snapshot.paramMap.get('fastfoodid');
    console.log('fastfoodId:', fastfoodId);
    this.fastfoodService.getFastfoodById(Number(fastfoodId)).subscribe(fastfood => {
      this.fastfoodId = fastfood.id;
      this.menuService.getMenusByFastFood(this.fastfoodId).subscribe(
        menus => {
          console.log('menus:', menus);
          this.menus = menus;
        },
        error => {
          console.error('Error fetching menus:', error);
        }
      );
    });
  }
}
