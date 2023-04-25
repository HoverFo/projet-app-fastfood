import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { FastfoodService } from '../../../fastfood/services/fastfood.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { MenuFormComponent } from '../../components/menu-form/menu-form.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})

export class MenuListComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['name', 'frite', 'price', 'update', 'delete'];

  menus$: Observable<Menu[]>;
  fastfoodId: number;
  
  constructor(
    private dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private fastfoodService: FastfoodService
  ) { }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const fastfoodId = this.route.snapshot.paramMap.get('fastfoodid');
    this.menus$ = this.menuService.getMenusByFastFood(Number(fastfoodId));
  }
  openMenuForm(menu?: Menu) {
    const dialogRef = this.dialog.open(MenuFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: menu ? false : true,
        menu: menu ? menu : undefined
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }
  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer ce menus ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.menuService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });
  }
}
