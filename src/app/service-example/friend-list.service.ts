import { Injectable } from '@angular/core';

@Injectable()
export class FriendListService {

    friendsList() { // 친구이름 목록 Service
        const friends = ['김길동', '이길동', '박길동', '연길동', '나길동'];
        return friends;
    }
    
    constructor() { }
}
