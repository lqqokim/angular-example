import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/viewchild.component';
import { Item } from './view-child/viewchild.component';
import { ItemComponent } from './view-child/viewchild.component';
import { Good } from './view-child/viewchild.component';
import { Items } from './view-child/viewchild.component';

import { FriendComponent } from './component-example/child-friend.component';
import { FriendListComponent } from './component-example/parent-friend.component';

import { ChildFriendListComponent } from './component-example-tony/child-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';

import { RxjsComponent } from './rxjs-component/rxjs-example';
import { ScoreComponent } from './rxjs-component/rxjs-example-communication';
import { RxjsLoginComponent } from './rxjs-component/rxjs-example-form-login';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    Item,
    ItemComponent,
    Good,
    Items,
    FriendComponent,
    FriendListComponent,
    ChildFriendListComponent,
    ParentFriendComponent,
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
