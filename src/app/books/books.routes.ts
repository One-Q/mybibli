import { BookListComponent } from './book-list/book-list.component';
import { BookManageComponent } from './book-manage/book-manage.component';


export const routes = [
  {
    path: '', children: [
      { path: '', component: BookListComponent},
      { path: 'book/:id', component: BookManageComponent}
    ] 
  }
]