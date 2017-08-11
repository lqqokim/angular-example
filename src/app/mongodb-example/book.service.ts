import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './model/book';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    private booksUrl = 'http://localhost:5200/api/books';

    public getAllBooks(): Observable<Book[]> {
        return this.http.get(this.booksUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public getBook(id: number): Observable<Book> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public addBook(book: Book): Observable<Book> {
        return this.http.post(this.booksUrl, book)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public deleteBook(id: number): Observable<Book> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.delete(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public updateBook(id: number, info): Observable<Book> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.put(url, info)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}