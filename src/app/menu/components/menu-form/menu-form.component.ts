import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Menu } from '../../models/menu';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Fastfood } from 'src/app/fastfood/models/fastfood';
import { FastfoodService } from 'src/app/fastfood/services/fastfood.service';

export interface MenuFormData {
  isCreateForm: boolean;
  menu: Menu;
}

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent {

  menuForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    frite: [false, [Validators.required]], // Définir la valeur par défaut à false
    price: [0, [Validators.required, Validators.min(0)]], // Définir une valeur minimale pour price à 0
    fastfood: ['', [Validators.required]],
  });
  private destroy$: Subject<boolean> = new Subject<boolean>();
  fastfoods$: Observable<Fastfood[]>;

  constructor(public dialogRef: MatDialogRef<MenuFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuFormData, private fb: FormBuilder, 
    private menuService : MenuService, private _snackBar: MatSnackBar, private fastfoodService: FastfoodService,){
  
      if(!data.isCreateForm){
        this.setMenuForm(data.menu);
      }
    }

    ngOnInit(): void {
      this.fastfoods$ = this.fastfoodService.get();
    }

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }

    setMenuForm(menu: Menu) {
      this.menuForm.setValue({
        id: menu.id,
        name: menu.name,
        frite: menu.frite,
        price: menu.price,
        fastfood: menu.fastfood, 
      });
    }

    

    get title(){
      if(this.data.isCreateForm){
        return 'Formulaire de création';
      }
      return 'Formulaire de modification';
    }
  
    get submitBtnName(){
      if(this.data.isCreateForm){
        return 'Ajouter';
      }
      return 'Modifier';
    }

    
      onSubmit(){
        if(this.menuForm.valid){
          if(this.data.isCreateForm){
            this.menuForm.value.id = Date.now() + Math.random();
            console.log(this.menuForm.value.id)
            this.menuService.create(this.menuForm.value as Menu)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
    
              this.dialogRef.close(true);
            });
          }else{
            console.log("test");
            this.menuService.update(this.menuForm.value as Menu)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.dialogRef.close(true);
            });
          }
        }
      }
}





