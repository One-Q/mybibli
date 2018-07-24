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
  
  books: any;

  constructor(
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.booksService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  selectBook(book) {
    this.router.navigate(['/books',book._id])
  }

  addBook() {
    let book = {
      isbn: '',
      title: '',
      description: '',
      releaseDate: ''
    }
    this.booksService.addBook(book).subscribe(data => {
      console.log(data)
    })
  }

}
