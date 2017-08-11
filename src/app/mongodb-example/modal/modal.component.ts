import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class Modal {
    @Output() trResult = new EventEmitter();
    @ViewChild('modal') public modal: ModalDirective;
    id: any;

    show(param?: any) {
        this.id = param;
        console.log(this.id);
        this.modal.show();
    }

    resultEvent() {
        this.trResult.emit();
    }
}

