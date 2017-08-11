import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';

import { BookService } from './../book.service';
import { Book } from './../model/book';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'book-add',
    template: `
    
    <div class="panel panel-default">
        <div class="panel-heading">Book Entry Form : You can add an book's detail information.</div>
        <div class="panel-body">
            <form #frm="ngForm" class="form-horizontal" (submit)="addBook(frm)">
                <div class="form-group">
                    <label for="emp_name" class="col-sm-2 control-label">Book's Title : </label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" [(ngModel)]="book.title" name="title">
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
                        <input type="text" class="form-control" [(ngModel)]="book.published_date" name="published_date">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-8">
                        <button type="submit" class="btn btn-success" >Save</button>
                        <a class="btn btn-info" (click)="goBack()">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
})
export class BookAddComponent implements OnInit {

    @Output() addResult = new EventEmitter();

    private book = new Book();

    constructor(
        public bookService: BookService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
    }

    addBook(form: any) {
        console.log('add obj : ', <Book>form.value);
        this.book.author = form.value.author;
        this.book.title = form.value.title;
        this.book.published_date = form.value.published_date;
        this.bookService.addBook(this.book)
            .subscribe(
                () => { this.goBack()},
                (err) => {
                    console.log(err);
                }
            )
    }
    goBack() {
        // modal close
        // list refresh
        console.log('goback!!');
        // this.addResult.emit();
        this.router.navigate(['/list'])
    }
}