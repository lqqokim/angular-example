import { Component, OnInit } from '@angular/core';

import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { CustomPipeUseComponent } from './custom-pipe/custom-pipe-use.component';
// import { FilterPipe } from './custom-pipe/custom-pipe.component';

// import { CustomPipeComponent} from './custom-pipe/custom-pipe.component';

@Component({
    selector: 'pipe-component',
    template: `
    <div class="list">
        <div class="flex-container">
            <built-in-pipe></built-in-pipe>
            <custom-pipe-use></custom-pipe-use>
        </div>
    </div> 
    `,
    styles: [`
    
    .list {
        background-color:#EFEFEF;
        border:1px solid #DDD;
        box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
        border-radius:3px;
    }
    .flex-container {
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        width: calc( 100% - 30px );
        height: 100%;
        background-color: lightgrey;
        padding: 10px;
    }
    `]
})
export class PipeComponent {

}