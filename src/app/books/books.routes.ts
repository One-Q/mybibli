import { BookListComponent } from './book-list/book-list.component';


export const routes = [
  {
    path: '', children: [
      { path: '', component: BookListComponent}
    ] 
  }
]