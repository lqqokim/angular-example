import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipeComponent } from './pipe.component';

import { BuiltInPipeComponent, DateFormatsComponent, UpperLowerComponent, AsyncComponent, JsonComponent } from './built-in-pipe/built-in-pipe.component';
import { CustomPipeUseComponent, FilterComponent } from './custom-pipe/custom-pipe-use.component';
import { FilterPipe } from './custom-pipe/custom-pipe.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PipeComponent,
        BuiltInPipeComponent,
        DateFormatsComponent,
        UpperLowerComponent,
        AsyncComponent,
        JsonComponent,
        CustomPipeUseComponent,
        FilterComponent,
        FilterPipe // custom pipe
    ],
    providers: [],
    exports: [
        PipeComponent,
        BuiltInPipeComponent,
        DateFormatsComponent,
        UpperLowerComponent,
        AsyncComponent,
        JsonComponent,
        CustomPipeUseComponent,
        FilterComponent,
    ],
    // schemas: [
    //     CUSTOM_ELEMENTS_SCHEMA
    // ]
})
export class PipeModule { }
