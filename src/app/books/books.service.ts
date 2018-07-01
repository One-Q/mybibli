import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class BooksService {

  private options;

  constructor(private http: Http) {
    this.options = new RequestOptions({
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    })
  }

  getBooks() {
    return this.http.get('/api/books', this.options)
  }

}