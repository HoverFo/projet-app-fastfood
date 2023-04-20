import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
		MatButtonModule,
  ],
  exports: [MatButtonModule, MatIconModule, MatTableModule],
})
export class SharedModule {}