import {AfterViewInit, Component, Directive, Input, ViewChild} from '@angular/core';

    // 예제
    // tslint:disable-next-line:directive-selector
    @Directive({ selector: 'item' })
    // tslint:disable-next-line:directive-class-suffix
    export class Item {
        @Input() status: boolean;
    }

    // 실습
    // tslint:disable-next-line:directive-selector
    @Directive({ selector: 'items' })
    // tslint:disable-next-line:directive-class-suffix
    export class Items {
        @Input() status1: boolean;
    }

    @Component({
        // tslint:disable-next-line:component-selector
        selector: 'item-component',
        template: '<button>알림창</button>'
    })
    export class ItemComponent {
        display() {
            alert('ItemComponent입니다1');
        }
    }



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'goods',
  template: '<button>Good알림창</button>'
})
// tslint:disable-next-line:component-class-suffix
export class Good {
  displays() {
      alert('ItemComponent입니다1');
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-profile'
})

// tslint:disable-next-line:component-class-suffix
export class UserProfile {
  constructor() {}
  sendData() {
    // send data
  }
}



@Component({
  selector: 'app-view-child',
  template: `
    <item status="false" *ngIf="isShow==false"></item>
    <item status="true" *ngIf="isShow==true"></item>
    <button (click)="toggle()">선택</button><br>
    <items status1="true"></items>
    isShow : {{isShow}}<br>
    status : {{status}}<br>
    item1 : {{status1}}<br>

    <item-component (click)="display()"></item-component>
    <goods (click)="displayGood()"></goods>
    `
})
export class ViewChildComponent {
    isShow = true;
    status: boolean;
    status1: boolean;
    // 예제
    @ViewChild(Items)
    set items(v: Items) {
        setTimeout(() => { this.status1 = v.status1; }, 0);
    }
    // 실습
    @ViewChild(Item)
    set item(value: Item) {
        setTimeout(() => { this.status = value.status; }, 0);
    }

    @ViewChild(ItemComponent) itemComponent: ItemComponent;
    @ViewChild(Good) good: Good;



    toggle() {
        this.isShow = !this.isShow;
    }

    display() {
        this.itemComponent.display();
    }

    displayGood() {
        alert('1');
        this.good.displays();
    }

}
