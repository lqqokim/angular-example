import { Injectable } from '@angular/core';
import { USERS } from './mock-user';
import { User } from './user';
import { Friend } from './model/promise.model';

@Injectable()
export class MockService {

  friends: Array<Friend>;

  constructor() {
    // let f:Friend = new Friend();//그러나 변수를 이용하여 사용하려면 import 해야함.
      this.friends = [
          { age: 40, name: 'Jordan Houston' },
          { age: 23, name: 'Josh Beh' },
          { age: 23, name: 'Joseph Canina' },
          { age: 24, name: 'Alexandra Wilkins' },
          { age: 22, name: 'Kiersten Costanzo' },
          { age: 23, name: 'Ku Sherwood' },
          { age: 25, name: 'Arta Halili' },
          { age: 21, name: 'Patrick Cooney' },
          { age: 21, name: 'Z.A. Perr' },
          { age: 18, name: 'Tyler Mulligan' },
          { age: 26, name: 'Dennis Dempsey' },
          { age: 32, name: 'Francis Yeager' },
          { age: 23, name: 'Phil Belardi' },
          { age: 25, name: 'Bryan Roman' }
              ];
  }

  getUser(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUserDelay(): Promise<User[]> {
    return new Promise<User[]>(resolve =>
      setTimeout(resolve, 1000))
      .then(() => this.getUser());
  }

  getFriends(): Promise<Friend[]> {
      // alert(this.friends.length);
    return Promise.resolve(this.friends);
  }

  getRequest(status: boolean): Promise<any> {
    if (status) {
      return Promise.resolve('요청을 승낙합니다.').then(function (reason) {
        return reason;
      }, function (reason) {
        return 'NO';
      });
    } else {
      return Promise.reject('요청을 거부합니다.').then(function (reason) {
        return 'YES';
      }, function (reason) {
        return reason;
      });
    }
  }
}
