import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookService } from './../book.service'

import { Book } from './../model/book';


@Component({
    selector: 'book-edit',
    template: `
    
    <div class="panel panel-default">
    <div class="panel-heading">Book Edit Form : You can edit an Book's detail information.</div>
    <div class="panel-body">
        <form class="form-horizontal" (submit)="updateBook()">
            <div class="form-group">
                <label for="book_title" class="col-sm-2 control-label">Book's Title : </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" [(ngModel)]="book.title" name="title">
                </div>
            </div>
            <div class="form-group">
                <label for="book_id" class="col-sm-2 control-label">Book ID : </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" [(ngModel)]="book._id" name="book ID" disabled>
                </div>
            </div>
            <div class="form-group">
                <label for="author" class="col-sm-2 control-label">Author : </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" [(ngModel)]="book.author" name="author">
                </div>
            </div>
            <div class="form-group">
                <label for="published_date" class="col-sm-2 control-label">Published Date : </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" [(ngModel)]="book.published_date" name="published date">
                </div>
            </div>


            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <button type="submit" class="btn btn-success">Update</button>
                    <a class="btn btn-info" (click)="goBack()">Cancel</a>
                </div>

            </div>
        </form>

    </div>
</div>
  
  `,
})
export class BookEditComponent implements OnInit {

    private id = this.route.snapshot.params['id'];
    private book = new Book();

    constructor(
        public bookService: BookService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getBook();
    }

    getBook() {
        this.bookService.getBook(this.id)
            .subscribe(book => {
                this.book = book;
            });
    }

    updateBook() {
        this.bookService.updateBook(this.id, this.book)
            .subscribe(() => this.goBack())
    }

    goBack() {
        this.router.navigate(['/list'])
    }
}