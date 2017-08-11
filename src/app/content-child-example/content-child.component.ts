import {Component, ContentChild, Directive, Input} from '@angular/core';

@Component({selector: 'app-group-title',
            template: `
                <div>{{value}}</div>
                `
            })
// tslint:disable-next-line:component-class-suffix
export class GroupTitle {
    @Input() value: string;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-button',
    template: `
        <button (click)="hello()">{{buttonValue}}</button>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ChildButtonCompnent {
    @Input() value: string;
    get buttonValue(): string { return this.value; }
    hello() { alert('hello!'); }
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'button-group',
    template: `
    <div>{{getTitle}}</div>
    <my-button value="버튼1"></my-button>
    <my-button value="버튼2"></my-button>
    <my-button value="버튼3"></my-button>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ButtonGroup {
    @ContentChild(GroupTitle) groupTitle: GroupTitle;
    get getTitle(): string { return this.groupTitle.value; }
}

@Component({
    selector: 'app-content-child',
    template: `
    <button-group>
        <app-group-title value="버튼 그룹"></app-group-title>
    </button-group>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ContentChildComponent {}
