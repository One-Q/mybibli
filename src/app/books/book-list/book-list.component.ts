import { Component, OnInit } from "@angular/core";
import { BooksService } from '../books.service';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.booksService.getBooks().subscribe(data => console.log(data))
  }

}