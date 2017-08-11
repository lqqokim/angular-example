import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigurationService } from './file-read.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'rx-component',
    providers: [ConfigurationService],
    template: `
        <div class="list">
            <h2>File Read Example</h2>
            <div>url : {{fileuri}}</div>
            <ul>
                <li>
                    json : {{currentjson}}
                </li>
            </ul>
        </div>
    `,
    styles: [`
        .list {
            background-color:#EFEFEF;
            border:1px solid #DDD;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius:3px;
        }
    `],
    encapsulation: ViewEncapsulation.Native
})
export class FileReadComponent implements OnInit {
    fileuri = '/src/app/file-read-example/chart-column-group.json';
    configurationService: ConfigurationService;
    currentjson: any;

    constructor(configService: ConfigurationService,
                router: Router) {
        this.configurationService = configService;
        router.events.subscribe((url: any) => console.log(url));
        console.log(router.url);  // to print only path eg:"/login"
    }

    ngOnInit() {
        this.configurationService.getConfiguration(this.fileuri)
            .subscribe(
                (res) => {
                    this.currentjson = res.toString();
                    console.log('success : ', this.currentjson);
                },
                (error) => {
                    console.log('Error : ', error);
                },
                () => {
                    console.log('Error');
                }
            );
    }
}
