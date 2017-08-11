import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './custom-pipe.component';

@Component({
    moduleId: module.id,
    selector: 'custom-pipe-use',
    template: `
    <h2>커스텀 파이프 예제</h2>
    <div class="list">
        <custom-filter></custom-filter>
    </div>
    
    `
})

export class CustomPipeUseComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'custom-filter',
    template: ` 
    <div>
    최소나이 : <select [(ngModel)]="min">
      <option  *ngFor="let value of range;" [value]="value">{{value}}세 이상</option>
    </select>
   </div>
   <div>
    최대나이 : <select [(ngModel)]="max">
      <option  *ngFor="let value of range;" [value]="value">{{value}}세 이하</option>
    </select>
   </div><br>
   <ol>
      <li *ngFor="let member of members | filter:min:max">
        {{ member.name }} ({{ member.age }})
      </li>
   </ol>
   `
})
export class FilterComponent {
    min: number = 10;
    max: number = 70;
    range: Array<any> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    members: Array<any> = [
        { name: '김유신', age: 11 },
        { name: '문무왕', age: 27 },
        { name: '원효대사', age: 37 },
        { name: '혜초', age: 42 },
        { name: '장보고', age: 58 },
        { name: '대조영', age: 66 },
        { name: '강감찬', age: 90 }
    ];
}