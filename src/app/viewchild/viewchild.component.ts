import {AfterViewInit, Component, Directive, Input, ViewChild} from '@angular/core';

//예제
@Directive({ selector: 'item' })
export class Item {
    @Input() status: boolean;
}

@Component({
    selector: 'item-component',
    template: '<button>알림창</button>'
})
export class ItemComponent {
    display(){
        alert('ItemComponent입니다');
    }
}

//실습
@Directive({ selector: 'item1'})
export class Item1{
    @Input() staus1: boolean;
}

@Component({
    selector: 'item-component1',
    template: '<button>알림Test</button>'
})

export class ItemComponent1 {
    display(){
        alert('1234');
    }
}

@Component({
    selector: 'app-view-child',
    template: `
    <item status="false" *ngIf="isShow==false"></item>
    <item status="true" *ngIf="isShow==true"></item>
    <button (click)="toggle()">선택</button><br>
    <item1 staus1="true"></item1>
    isShow : {{isShow}}<br>
    status : {{status}}<br>
    item1 :{{staus1}}<br>
    <item-component (click)="display()"></item-component>
    <item-component1 (click)="display1()"></item-component1>
    `
})
export class ViewchildComponent {

    //예제
    @ViewChild(Item)
    set item(v: Item) {
        console.log(v.status+'1');
        setTimeout(() => { this.status = v.status; }, 0);
    }

    @ViewChild(ItemComponent) itemComponent: ItemComponent;
    isShow: boolean = true;
    status: boolean;
    toggle() {
        this.isShow = !this.isShow;
    }

    display(){
        this.itemComponent.display();
    }

    //실습
    @ViewChild(Item1)
    set item1(s: Item1) {
        setTimeout(() => { this.staus1 = s.staus1; }, 0);
    }

    @ViewChild(ItemComponent1) ItemComponent1: ItemComponent1;
    staus1: boolean;

    display1(){
        this.ItemComponent1.display();
    }

}
