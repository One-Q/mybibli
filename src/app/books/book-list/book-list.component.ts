import { Component, OnInit } from "@angular/core";
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  public books = new BookDataSource(this.booksService);
  public displayedColumns = ['isbn','title','author'];

  constructor(
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.books = new BookDataSource(this.booksService)
  }

  getBooks() {
    this.booksService.getBooks().subscribe(data => {
      console.log(this.books)
    })
  }

  selectBook(book) {
    this.router.navigate(['/books',book.isbn])
  }

}

export class BookDataSource extends DataSource<any>{

  list:IBook[] = new Array<IBook>();
  observer;

  constructor(private bookService: BooksService){
      super();
      this.observer = this.bookService.getBooks();
      this.connect().subscribe((l: any)=>{
        this.list = l;
      });
  }

  connect(): Observable<IBook[]>{
      return this.observer;
  }

  data(): IBook[]{
      return this.list;
  }

  disconnect(){

  }

}