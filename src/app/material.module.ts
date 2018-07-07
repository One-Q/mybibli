import { 
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTabsModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule,
  ]
})
export class MyMaterialModule {}