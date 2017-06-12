import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { RepoService } from './rxjs-example.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'rx-component',
    providers: [RepoService],
    template: `
        <button (click)="counter$.next(1111);communication_count$.next(22);">
            Up Vote
        </button>
        <rxjs-component-score [score]="communication_count$ | async"></rxjs-component-score>
        <ul>
            <li *ngFor="let repo of repos | async">
                {{repo.id}} : {{ repo.url }}
            </li>
        </ul>
    `
})
export class RxjsComponent {
    items = Observable.of([1, 2, 3]);
    repos: Observable<any>;

    // rxjs event handle
    counter$: Observable<string> = new Subject<number>()
    .scan((acc: number, current: number): number => acc + current)
    .map((value: number): string => `Sum of clicks: ${value}`);

    communication_count$: Observable<number> = new Subject<number>()
    .scan((acc: number, current: number): number => acc + current);

    constructor(repoService: RepoService) {
        this.repos = repoService.getReposForUser('kenneth80');
        this.repos.subscribe( (x) => { console.log('onNext: ' , x); },
                              (e) => { console.log('onError: ' + e.message); },
                              () => { console.log('onCompleted'); });
        this.counter$.subscribe(console.log.bind(console));
    }

    handleButtonClick(value: number) {
        console.log(value);
    }
}
