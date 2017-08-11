import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';

import { BookListComponent } from './book/book-list.component';
import { BookAddComponent } from './book/book-add.component';
import { BookEditComponent } from './book/book-edit.component';
import { BookDetailComponent } from './book/book-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Modal } from './modal/modal.component';
import { BookService } from './book.service';



@NgModule({
    imports: [
        L_SEMANTIC_UI_MODULE,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BookRoutingModule,
        ModalModule.forRoot()
    ],
    declarations: [
        BookListComponent,
        BookAddComponent,
        BookEditComponent,
        BookDetailComponent,
        NavbarComponent,
        Modal
    ],
    providers: [BookService],
    exports: [
        BookListComponent,
        BookAddComponent,
        BookEditComponent,
        BookDetailComponent,
        NavbarComponent,
        Modal
    ]
})
export class BookListModule { }