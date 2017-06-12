// 상호작용을 위한 Input, Output, EventEmitter import
// tslint:disable-next-line:max-line-length
import {
    Component, ViewEncapsulation,
    Input, Output, EventEmitter, ViewChild, ElementRef,
    OnInit, OnDestroy, DoCheck, OnChanges,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { Friend } from './model/friend.model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'child-friend-list',
    // tslint:disable-next-line:use-input-property-decorator
    template: `
        <h1>{{ owner }}'s friends ( version : {{version}} )</h1>
        <input #nameField="ngModel" type='text' placeholder= "Enter Name" [(ngModel)]="friendName">
        <input #ageField="ngModel" type='text' placeholder= "Enter Age" [(ngModel)]="friendAge">
        <button (click)="enterFriend($event)" >Enter</button>
        <div *ngFor="let f of friends">
            <h3>Name: {{ f.name }}</h3>
            <h4>Age: {{ f.age }}</h4>
            <button (click)="itemMove($event,f)">이동</button>
        </div>
    `,
    styles: [`
    div {
         background-color:#EFEFEF;
         margin-bottom:15px;
         padding:15px;
         border:1px solid #DDD;
         box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
        border-radius:3px;
      }
      h2 {
        text-align: center;
      }
  `],
    encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:max-line-length
export class ChildFriendListComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
    @Input() owner: string;
    @Input() version: string;
    @Input() friends: any;
    @Input() status: any;

    @Output() nameChange = new EventEmitter();
    @Output() moveItem = new EventEmitter();

    friendAge: string;
    friendName: string;

    constructor() { }

    ngOnInit() { }

    changeName(evt, obj) {
        this.nameChange.emit(obj);
    }

    enterFriend(evt) {
        const friend = new Friend();
        friend.age = +this.friendAge;
        friend.name = this.friendName;
        this.friends.unshift(friend);
        this.friendName = '';
        this.friendAge = '';
    }

    itemMove(event, f) {
        this.moveItem.emit(f);

    }

    // component life cycle
    // init은 최초 한번. Change와 Check하는 function은 계속 동작.
    // ngOnInit, ngOnChanges, ngDoCheck, ngOnDestroy 가장 많이 쓰일거 같음.
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    ngDoCheck() {// 해당 component에 변경을 감지시 동작
        // Custom change detection
        console.log('ngDoCheck');
    }

    ngOnChanges(changes) {// PropertyUpdate시 동작
        // 변경이 된 propertie 명과 변경전 변경후 값을 알려줌.
        console.log('ngOnChanges ==> ', changes);
        // Called right after our bindings have been checked but only
        // if one of our bindings has changed.
        //
        // changes is an object of the format:
        // {
        //   'prop': PropertyUpdate
        // }
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
        // Component content has been initialized
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
        // Component content has been Checked
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        // Component views are initialized
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
        // Component views have been checked
    }

}
