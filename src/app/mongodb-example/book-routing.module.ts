import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book/book-list.component';
import { BookAddComponent } from './book/book-add.component';
import { BookEditComponent } from './book/book-edit.component';
import { BookDetailComponent } from './book/book-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: BookListComponent },
    { path: 'add', component: BookAddComponent },
    { path: 'edit/:id', component: BookEditComponent },
    { path: 'detail/:id', component: BookDetailComponent }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class BookRoutingModule { }