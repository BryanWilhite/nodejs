import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { RouterLinkMock } from '../mocks/directives/router-link-mock';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let routerLinks: RouterLinkMock[];
    let routerLinkDebugElements: DebugElement[];

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [RouterLinkMock, AppComponent],
                schemas: [NO_ERRORS_SCHEMA]
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(AppComponent);
                    comp = fixture.componentInstance;
                    fixture.detectChanges();

                    routerLinkDebugElements = fixture.debugElement.queryAll(
                        By.directive(RouterLinkMock)
                    );

                    routerLinks = routerLinkDebugElements.map(i =>
                        i.injector.get(RouterLinkMock)
                    );
                });
        })
    );

    it('should instantiate the component', () => expect(comp).not.toBeNull());

    it('should have expected <h1> text', () => {
        de = fixture.debugElement.query(By.css('h1'));
        const h1 = de.nativeElement;
        expect(h1.innerText).toContain(fixture.componentInstance.title);
    });

    it('should have routerLink directives', () => {
        expect(routerLinks.length).toBe(2);
        expect(routerLinks[0].linkParams).toBe('/dashboard');
        expect(routerLinks[1].linkParams).toBe('/heroes');
    });

    it('should have clickable routerLink directives', () => {
        const i = 1;
        const linkDebugElement = routerLinkDebugElements[i];
        const linkDirective = routerLinks[i];

        expect(linkDirective.navigatedTo).toBeNull(
            'An instance of navigatedTo is not expected.'
        );
        linkDebugElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(linkDirective.navigatedTo).toBe(routerLinks[1].linkParams);
    });
});
