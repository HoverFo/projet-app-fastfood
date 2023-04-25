
import { Component, OnInit } from '@angular/core';
import { Fastfood } from '../../models/fastfood';
import { FastfoodService } from '../../services/fastfood.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { FastfoodFormComponent } from '../../components/fastfood-form/fastfood-form.component';

@Component({
  selector: 'app-fastfood-list',
  templateUrl: './fastfood-list.component.html',
  styleUrls: ['./fastfood-list.component.scss']
})
export class FastfoodListComponent implements OnInit {

	private destroy$: Subject<boolean> = new Subject<boolean>();
	fastfoods$: Observable<Fastfood[]> 

	
	constructor(private fastfoodService: FastfoodService, private dialog: MatDialog, 
    private _snackBar: MatSnackBar,private router: Router){}
		
	ngOnDestroy(): void {
    	this.destroy$.next(true);
    	this.destroy$.complete();
  	}
	 
	ngOnInit(): void {
		this.fetchData();
	}

	fetchData() {
		this.fastfoods$ = this.fastfoodService.get();
	}

	 navigateToMenuPage(fastfood: Fastfood) {
		this.router.navigate(['/menu/fastfood', fastfood.id]);
		console.log(fastfood.id);
	  }
	  

	  openFastfoodForm(fastfood?: Fastfood) {
    const dialogRef = this.dialog.open(FastfoodFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: fastfood ? false : true,
        fastfood: fastfood ? fastfood : undefined
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
          this.fastfoodService.delete(id)
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
