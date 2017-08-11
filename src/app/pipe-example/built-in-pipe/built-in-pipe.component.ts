import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    // moduleId: module.id,
    selector: 'built-in-pipe',
    template: `
    <h2>내장 파이프 예제</h2><hr>
    <div>
        <date-format></date-format>
        <upper-lower></upper-lower>
        <app-async></app-async>
        <app-json></app-json>
    </div>
`
})

export class BuiltInPipeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'date-format',
    template: `
    <h3>날짜정의 파이프</h3>
    <div>
        <p>{{today | date: 'y년 m월 d일'}}</p>
        <p>{{today | date: 'y년 m월 d일 h시 m분 s초'}}</p>
        <p>{{today | date: 'yy년 mm월 dd일'}}</p>
        <p>{{today | date: 'yy년 mm월 dd일 hh시 mm분 ss초'}}</p>
        <p>{{today | date: 'y년 m월 d일'}}</p>
        <p>{{today | date: 'y년 m월 d일'}}</p>
    </div><hr>

`
})
export class DateFormatsComponent {
    today: number = Date.now();
}

@Component({
    selector: 'upper-lower',
    template: `
    <h3>대소문자 파이프</h3>
    <div>
        <input [(ngModel)]="str" type="text">
        <p>소문자: {{str | lowercase}}</p>
        <p>대문자: {{str | uppercase}}</p>
    </div><hr>
    `
})
export class UpperLowerComponent {
    str: string = "abcDEF";
}

@Component({
    selector: 'app-async',
    template: `
    <h3>비동기 파이프</h3>
    <div>
        <p>중단 없는 스트림 출력 : {{ second | async}}</p>
        <p>50까지의 스트림 출력 : {{ second_map_take | async}}</p>
        <p>배열 스트림 출력 : {{ greetings$ | async}}</p>
        <select [(ngModel)]="take">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button (click)="asyncCall(take)">비동기 호출</button>
    </div><hr>
    `
})
export class AsyncComponent {
    second = Observable.interval(1000);
    second_map_take = Observable.interval(1000).map(i => i).take(51);

    greetings$: Observable<string>;
    take: number = 1;
    private greetings = [
        'good morning',
        'good afternoon',
        'good evening'
    ];

    constructor() {
    }

    asyncCall(num: number) {
        this.greetings$ = Observable.interval(100).map(i => this.greetings[i]).take(num);
    }
}

@Component({
    selector: 'app-json',
    template: `
    <h3>JSON 파이프</h3>
    <div>
        JSON 파이프 없이 바로출력<br>
        <pre>{{object}}</pre>
        JSON 파이프 사용해 출력<br>    
        <pre>{{object | json}}</pre>
        JSON.stringify를 사용해 출력<br>    
        <pre>{{jsonString}}</pre>
    </div>
    `
})
export class JsonComponent {
    object: Object = { name: 'Angular', version: 2, currentPipe: { name: 'json 파이프', test: ['a', 1] } };
    jsonString: string = JSON.stringify(this.object);
}