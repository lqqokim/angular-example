import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-component-container',
    entryComponents: [HelloWorldComponent, WorldHelloComponent],
    template: `
        <div #dynamicComponentContainer></div>
    `,
})
// tslint:disable-next-line:component-class-suffix
export default class DynamicComponentContainer {
    currentComponent = null;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    @Input() set componentData(data: {component: any, inputs: any }) {
        if (!data) {
            return;
        }

        // Inputs need to be in the following format to be resolved properly
        // tslint:disable-next-line:max-line-length
        const inputProviders = Object.keys(data.inputs).map((inputName: string) => {return {provide: inputName, useValue: data.inputs[inputName]}; });
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

        // We create a factory out of the component we want to create
        const factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        const component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }

    constructor(private resolver: ComponentFactoryResolver) {
    }
}
