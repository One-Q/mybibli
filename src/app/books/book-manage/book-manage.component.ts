import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {

  public book: IBook

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService
  ) { }

  ngOnInit() {
    this.bookService.getOneBook(this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe(data => {
      console.log(data)
    })
  }

}