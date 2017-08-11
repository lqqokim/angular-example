import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileReadComponent } from '../file-read-example/file-read.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileReadComponent
    ],
    providers: [ ],
    exports: [
        FileReadComponent
    ]
})
export class FileReadModule { }
