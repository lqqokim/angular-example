import { Component } from '@angular/core';
import { ChildFriendListComponent } from './child-friend.component'; // childe component를 import함.

import { Friend } from './model/friend.model';
import { FriendService } from './friend.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'parent-friend',
    template: `
        <div>
            <h2>Welcome {{name}}</h2>
            <child-friend-list [friends]="friendLeftList" status="left" owner="kenneth" version="1.0.0" (moveItem)="moveLeftItem($event)" (nameChange)="selectedFriend($event)"></child-friend-list>
            <hr>
            <child-friend-list [friends]="friendRightList" status="right" owner="kenneth" version="1.0.0" (moveItem)="moveRightItem($event)"></child-friend-list>
        </div>
    `,
    providers: [FriendService]
})
export class ParentFriendComponent {
    name: string;
    item: string;
    friendLeftList: Array<Friend>;
    friendRightList: Array<Friend>;
    originList: Array<Friend>;


    constructor(private friendService: FriendService) { }

    ngOnInit() {
        this.friendLeftList = this.friendService.getFriends();
        this.friendRightList = [];

        setTimeout(() => {
            // this.nameField.nativeElement.focus();
            // this.nameField.nativeElement.select();
        }, 1000);
    }

    selectedFriend(value: Friend) {
        this.name = value.name;
    }

    // new item added in right
    moveLeftItem(value: Friend) {
        const newItem: Friend = {
            age: value.age,
            name: value.name
        };
        this.friendRightList.push(newItem);

        for (let i = 0; i < this.friendLeftList.length; i++) {
            if (this.friendLeftList[i].name === newItem.name) {
                this.friendLeftList.splice(i, 1);
                break;
            }
        }
        this.item = value.name;
    }

    // new item added in left
    moveRightItem(value: Friend) {
        const newItem: Friend = {
            age: value.age,
            name: value.name
        };
        this.friendLeftList.push(newItem);

        for (let i = 0; i < this.friendRightList.length; i++) {
            if (this.friendRightList[i].name === newItem.name) {
                this.friendRightList.splice(i, 1);
                break;
            }
        }
        this.item = value.name;
    }

}
