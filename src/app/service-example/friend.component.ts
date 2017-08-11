import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'friend-component',
    template: `
        <div>FriendList<br><hr>
         <span *ngFor="let i of friends let ii = index">
            <div (click)="showInfo(ii)">{{i}}</div>
         </span>
        </div>
    `,
    styles: [`
        div {
        border: 2px solid #666;
        padding:10px;
        width:95%;
        height:100%;
        }
    `],
})
export class FriendComponent {
    @Input() friends: string[]; // 친구이름 목록

    @Output() outputInfoAge = new EventEmitter<number>(); // 친구의 Infonum

    showInfo(ageNum: number) {
      this.outputInfoAge.emit(ageNum);
    }
 }
