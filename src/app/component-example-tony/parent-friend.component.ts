import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ChildFriendListComponent } from './child-friend.component'; // childe component를 import함.

import { Friend } from './model/friend.model';
import { FriendService } from './friend.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'parent-friend',
    providers: [FriendService],
    template: `
        <div class="list">
            <h2>Component Example ( with Input, Output )</h2>
            <div class="flex-container">
                <child-friend-list 
                    [friends]="friendLeftList" 
                    status="left" owner="kenneth" version="2.0.0" 
                    (moveItem)="moveLeftItem($event)" 
                    (nameChange)="selectedFriend($event)"></child-friend-list>
                <child-friend-list 
                    [friends]="friendRightList" 
                    status="right" owner="Tony" version="2.0.0" 
                    (moveItem)="moveRightItem($event)"></child-friend-list>
            </div>
        </div>
    `,
    styles: [`
        .list {
            background-color:#EFEFEF;
            border:1px solid #DDD;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius:3px;
        }
        .flex-container {
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: space-around;
            justify-content: space-around;
            width: calc( 100% - 30px );
            height: 100%;
            background-color: lightgrey;
            padding: 10px;
        }
        .flex-item {
            width: 100%;
            height: 100%;
            margin: 0px 10px 10px 10px;
        }
    `],
    encapsulation: ViewEncapsulation.Native
})
export class ParentFriendComponent implements OnInit {
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
