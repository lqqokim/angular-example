import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { Modal } from '../modal/modal.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from './../book.service';

import { Book } from './../model/book';

@Component({
    selector: 'book-list',
    template: `


    <div align="left">  
         <a [routerLinkActive]="['active']" [routerLink]="['/add']" class="btn btn-info btn-lg" (click)="modal.show()">
            <span class="glyphicon glyphicon-plus-sign" ></span> Add Book 
        </a>
    <div>

    <table class="table table-bordered">
        <thead>
        <tr>
            <td>Title</td>
            <td>Book ID</td>
            <td>Author</td>
            <td>Published Date</td>
            <td width="275" align="center">Action</td>
        </tr>
        </thead>
        <tbody>
            <tr *ngFor="let book of books">
            <td>{{book.title}}</td>
            <td>{{book._id}}</td>
            <td>{{book.author}}</td>
            <td>{{book.published_date}}</td>
            <td width="275">
                <a class="btn btn-info" routerLink="/detail/{{book._id}}" routerLinkActive="active">Detail</a> 
                <a class="btn btn-success" routerLink="/edit/{{book._id}}" routerLinkActive="active">Edit</a>
                <a class="btn btn-danger" (click)="deleteBook(book._id)">Delete</a>
            </td>
            </tr>
        </tbody>
    </table>

 
    <app-modal #modal></app-modal>
    <button class="btn btn-primary" (click)="modal.show()">Large modal</button>


    `
})
// <button [routerLinkActive]="['active']" a [routerLink]="['/add']" class="btn btn-info btn-lg" (click)="modalService.open(MODAL_DEMO_ID)">
//  <span class="glyphicon glyphicon-plus-sign" ></span> Add Book 
// </button>
export class BookListComponent implements OnInit {
    @ViewChild('modal') modal: Modal;

    books: Book[];

    constructor(private bookService: BookService,
        private viewContainerRef: ViewContainerRef) {

    }

    ngOnInit() {
        this.getAllBooks();
    }

    getAllBooks() {
        this.bookService.getAllBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    deleteBook(id) {
        this.bookService.deleteBook(id)
            .subscribe(() => {
                this.getAllBooks();
            });
    }

}