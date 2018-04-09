import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { RouterLinkMock } from '../mocks/directives/router-link-mock';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

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
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('h1'));
        const h1 = de.nativeElement;
        expect(h1.innerText).toContain(fixture.componentInstance.title);
    });
});
