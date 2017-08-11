import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ToggleStateService} from './toggle-state.service';
import {CdDemosAppComponent} from './cd-demos.component';
import {DefaultChangeDetectionComponent, DefaultChangeDetectionModule} from './default-change-detection';
import {ManualChangeDetectionComponent, ManualChangeDetectionModule} from './manual-change-detection';
import {OnPushChangeDetectionComponent, OnPushChangeDetectionModule} from './on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './on-push-change-detection-observables';
import {OnPushChangeDetectionObservablesModule} from './on-push-change-detection-observables/on-push-change-detection-observables.module';

// const appRoutes: Routes = [
//     {
//         path: 'default-change-detection',
//         component: DefaultChangeDetectionComponent,
//         outlet: 'cd-routes'
//     },
//     {
//         path: 'on-push-change-detection',
//         component: OnPushChangeDetectionComponent,
//         outlet: 'cd-routes'
//     },
//     {
//         path: 'on-push-change-detection-observables',
//         component: OnPushChangeDetectionObservablesComponent,
//         outlet: 'cd-routes'
//     },
//     {
//         path: 'manual-change-detection',
//         component: ManualChangeDetectionComponent,
//         outlet: 'cd-routes'
//     }
// ];

const appChildRoutes: Routes = [];

@NgModule({
    bootstrap: [CdDemosAppComponent],
    declarations: [
        CdDemosAppComponent
    ],
    imports: [
        BrowserModule,
        // RouterModule.forRoot(appRoutes),
        RouterModule.forChild(appChildRoutes),
        DefaultChangeDetectionModule,
        ManualChangeDetectionModule,
        OnPushChangeDetectionModule,
        OnPushChangeDetectionObservablesModule
    ],
    providers: [
        ToggleStateService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    exports: [
        RouterModule,
        CdDemosAppComponent
    ],
})
export class CdDemosAppModule {
}
