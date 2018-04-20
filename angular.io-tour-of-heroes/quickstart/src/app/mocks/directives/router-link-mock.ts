import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkMock {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;
    constructor() {
        console.log('routerLink mock constructed.');
    }
    onClick() {
        this.navigatedTo = this.linkParams;
    }
}
