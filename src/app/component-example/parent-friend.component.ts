import { Component } from '@angular/core';
import { FriendComponent } from './child-friend.component'; // childe component를 import함.
import { Friend } from './model/friend.model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-friend-component',
    template: `
        <div>
            <h2>Welcome {{name}}</h2>
            <my-friends owner="kenneth" version="1.0.0" (nameChange)="selectedFriend($event)"></my-friends>
        </div>
    `
})
export class FriendListComponent {
    name: string;

    constructor() {
    }

    selectedFriend(value: Friend) {
        this.name = value.name;
    }


}