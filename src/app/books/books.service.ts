import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BooksService {

  private options;

  constructor(private http: HttpClient) {
    this.options = new HttpHeaders({
      "Content-type": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    })
    /*
    this.options = new RequestOptions({
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    })
    */
  }

  getBooks() {
    return this.http.get('/api/books', {headers: this.options})
  }

  getOneBook(isbn) {
    return this.http.get(`/api/books/${isbn}`, {headers: this.options})
  }

}