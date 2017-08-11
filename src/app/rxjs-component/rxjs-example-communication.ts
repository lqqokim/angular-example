import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'rxjs-component-score',
    template: 'Summary: {{score}}',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent {
    @Input() score: number;
}
