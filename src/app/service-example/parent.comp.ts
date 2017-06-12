import { Component } from '@angular/core';
import { FriendListService } from './friend-list.service';

@Component({
    selector: 'parent-Comp',
    template: `
        <div>
          <friend-comp (outputInfoAge)="infoNum($event)" [friends]="friends"></friend-comp>
          {{frName}} {{frAge}}
        </div>
    `,
    providers: [FriendListService],
    styles: [`
        div {
        border: 2px solid #666;
        padding:10px;
        width:95%;
        height:100%;
        margin-top:2%;
        }
    `],
})
export class ParentComp {
    friends:any; //친구의 이름
    friendsAge = ['25','28','29','30','31']; //친구의 나이

    constructor(friendListService: FriendListService) {
        this.friends = friendListService.friendsList(); //친구이름목록가져오기 서비스
    }

    frName:string;
    frAge:string;
    
    infoNum(AgeNum:number){ //unm정보 받아보기
        this.frAge = this.friendsAge[AgeNum];
        this.frName = this.friends[AgeNum];
    }
}
