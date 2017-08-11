import {Component, ContentChildren, Directive, Input, QueryList} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: 'word' })
// tslint:disable-next-line:directive-class-suffix
export class Word {
    @Input() value: string;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'word-group',
    template: `{{words}}`
})
// tslint:disable-next-line:component-class-suffix
export class WordGroup {
    @ContentChildren(Word) word: QueryList<Word>;
    get words(): string { return this.word ? this.word.map(p => p.value).join(', '):''; }
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'example-app',
    template: `
    <button (click)="add()">추가</button>
    <word-group>
        <word value="apple"  *ngIf="cnt>=0"></word>
        <word value="grape"  *ngIf="cnt>=1"></word>
        <word value="banana" *ngIf="cnt>=2"></word>
        <word value="mango"  *ngIf="cnt>=3"></word>
        <word value="orange" *ngIf="cnt>=4"></word>
    </word-group>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ContentChildrenComponent {
    cnt = 0;
    add() {
        if (this.cnt === 4) {
          this.cnt = 0;
        } else {
          this.cnt++;
        }
    }
}
