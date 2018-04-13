import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { ComponentFixtureUtility } from '../mocks/component-fixture-utility';
import { RouterLinkMock } from '../mocks/directives/router-link-mock';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let fixtureUtility: ComponentFixtureUtility<AppComponent>;
    let routerLinks: RouterLinkMock[];
    let routerLinkDebugElements: DebugElement[];

    const initializeComponent = function() {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        fixtureUtility = new ComponentFixtureUtility<AppComponent>(fixture);
        fixture.detectChanges();

        routerLinkDebugElements = fixtureUtility.queryAllByDirective(
            RouterLinkMock
        );
        routerLinks = routerLinkDebugElements.map(i =>
            i.injector.get(RouterLinkMock)
        );
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [RouterLinkMock, AppComponent],
                schemas: [NO_ERRORS_SCHEMA]
            })
                .compileComponents()
                .then(initializeComponent);
        })
    );

    it('should instantiate the component', () => expect(comp).not.toBeNull());
    it('should have expected <h1> text', () => {
        de = fixtureUtility.queryByCss('h1');
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

        expect(linkDirective.navigatedTo).toBe(routerLinks[i].linkParams);
    });
});
