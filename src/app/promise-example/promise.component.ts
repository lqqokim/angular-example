import { Component } from '@angular/core';
import { MockService } from './mock.service';
import { User } from './user';
import { Friend } from './model/promise.model';

@Component({
  selector: 'promise',
  template: `
  {{reqMessage}}<br>
  {{reqMessage2}}<br><br>
  <list-component [list]="listUser" [title]="'이름 출력 (지연없음)'"></list-component>
  <list-component [list]="listUserDelay" [title]="'이름 출력 (1초 지연)'"></list-component>
  <frlist-component [list]="listFriends" [title]="'친구들 출력'"></frlist-component>
  `,
  providers: [MockService]
})
export class PromiseComponent {
  reqMessage: String ='';
  reqMessage2: String ='';

  listUser: User[];
  listUserDelay: User[];

  listFriends: Friend[];

  constructor(private userService: MockService) {
    this.userService.getRequest(true).then(reason => this.reqMessage = reason);
    this.userService.getRequest(false).then(reason => this.reqMessage2 = reason);

    this.userService.getUser().then(user => this.listUser = user);
    this.userService.getUserDelay().then(user => this.listUserDelay = user);

    this.userService.getFriends().then(friends => this.listFriends = friends);
  }
}
