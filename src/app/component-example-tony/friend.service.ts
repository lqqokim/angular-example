// component에 정의된 data를 service 옮김
// src/service/friend.service.ts 파일 작성
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// friend model import
import { Friend } from './model/friend.model';
import { FRIENDS } from './model/mock-friends';

@Injectable()
export class FriendService {

    friends: Array<Friend>; // type지정시에는 import를 안해도 에러가 나지 않음.

    constructor(private _http: Http) {
        this.friends = FRIENDS;
    }

    getFriends() {
        return this.friends;
    }


}
