import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from './../book.service';

import { Book } from './../model/book';


@Component({
    selector: 'book-detail',
    template: `
    
    
<div class="panel panel-default">
    <div class="panel-heading">Book detail Form : You can see the detail information of an employee in this page of the EMS Apps.</div>
    <div class="panel-body">
        <form class="form-horizontal" *ngIf=book>
            <div class="form-group">
                <label for="book_title" class="col-sm-2 control-label">Book's Title : </label>
                <div class="col-sm-9">
                    <p class="form-control">{{book.title}}</p>
                </div>
            </div>
            <div class="form-group">
                <label for="id" class="col-sm-2 control-label">Book ID : </label>
                <div class="col-sm-9">
                    <p class="form-control">{{book._id}}</p>
                </div>
            </div>
            <div class="form-group">
                <label for="author" class="col-sm-2 control-label">Author: </label>
                <div class="col-sm-9">
                    <p class="form-control">{{book.author}}</p>
                </div>
            </div>
            <div class="form-group">
                <label for="published_date" class="col-sm-2 control-label">Published Date: </label>
                <div class="col-sm-9">
                    <p class="form-control">{{book.published_date}}</p>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-8">
                    <a class="btn btn-info" (click)="goBack()">Cancel</a>
                </div>

            </div>
        </form>

    </div>
</div>
    `
})
export class BookDetailComponent implements OnInit {

    book: Book;

    constructor(
        public bookService: BookService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.getBook();
    }


    getBook() {
        let id = this.route.snapshot.params['id'];
        this.bookService.getBook(id)
            .subscribe(book => {
                this.book = book;
            })
    }

    goBack() {
        this.router.navigate(['/list'])
    }
}


