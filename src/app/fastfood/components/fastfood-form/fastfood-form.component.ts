import { Component, Inject } from '@angular/core';
import { Fastfood } from '../../models/fastfood';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FastfoodService } from '../../services/fastfood.service';
export interface FastfoodFormData {
  isCreateForm: boolean;
  fastfood: Fastfood;
}
@Component({
  selector: 'app-fastfood-form',
  templateUrl: './fastfood-form.component.html',
  styleUrls: ['./fastfood-form.component.scss']
})
export class FastfoodFormComponent {

  fastfoodForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/), Validators.minLength(5)]],
  });
  

  private destroy$: Subject<boolean> = new Subject<boolean>();
  fastfoods$: Observable<Fastfood[]>;

  constructor(public dialogRef: MatDialogRef<FastfoodFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FastfoodFormData, private fb: FormBuilder, 
    private _snackBar: MatSnackBar, private fastfoodService: FastfoodService,){
  
      if(!data.isCreateForm){
        this.setFastfoodForm(data.fastfood);
      }
    }

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }

    setFastfoodForm(fastfood: Fastfood) {
      this.fastfoodForm.setValue({
        id: fastfood.id,
        name: fastfood.name,
        description: fastfood.description
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
      if(this.fastfoodForm.valid){
        if(this.data.isCreateForm){
          this.fastfoodForm.value.id = Date.now() + Math.random();
          console.log(this.fastfoodForm.value.id)
          this.fastfoodService.create(this.fastfoodForm.value as Fastfood)
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
          this.fastfoodService.update(this.fastfoodForm.value as Fastfood)
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






    

    

    
      