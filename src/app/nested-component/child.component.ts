import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nested-child',
    template: `
        <div>자식1<br><hr>
        name1:{{name1}}<br>
        name2:{{name2}}<br>
        <button (click)="updateParent(active)">부모에게 이벤트보내기</button><hr>
        <span *ngFor="let i of BColors let ii = index">
            <div (click)="chnageBG(ii)">{{i}}</div>
        </span>
        </div>
    `,
    styles: [`
        div{
        border: 2px solid #666;
        padding:10px;
        width:35%;
        height:100%;
        }`
    ]
})
export class NestedChildComponent{
    // input(예제)
    @Input() name1: string;
    @Input() name2: string;
    name3: string;

    // input(실습)
    @Input() BColors: string[];
    BCCodes: string[];

    // output(예제)
    active = false;
    @Output() outputproperty = new EventEmitter<boolean>();
    // output(실습)
    @Output() outputEventColor = new EventEmitter<number>();

    updateParent(active: boolean) {
        this.active = !active;
        console.log(active);
        this.outputproperty.emit(this.active);
    }

    // 배경output
    chnageBG(color:number) { 
        this.outputEventColor.emit(color);
    }
}
