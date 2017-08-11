// component에 정의된 data를 service 옮김
// src/service/friend.service.ts 파일 작성
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// friend model import
import { Friend } from './model/friend.model';

@Injectable()
export class FriendService {

    friends: Array<Friend>; // type지정시에는 import를 안해도 에러가 나지 않음.

    constructor(private _http: Http) {
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

    getFriends() {
        return this.friends;
    }

}
