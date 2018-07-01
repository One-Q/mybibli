import { NgModule } from "@angular/core";
import { Router, RouterModule } from '@angular/router';
import { routes } from './books.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyMaterialModule } from '../material.module';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MyMaterialModule
  ]
})
export class BooksModule {
  public static routes = routes
}