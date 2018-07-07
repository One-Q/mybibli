import { NgModule } from "@angular/core";
import { Router, RouterModule } from '@angular/router';
import { routes } from './books.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyMaterialModule } from '../material.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookManageComponent,
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