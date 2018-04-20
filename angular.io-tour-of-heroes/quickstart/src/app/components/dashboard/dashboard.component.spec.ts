import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HEROES } from '../../mocks/services/heroes-mock';
import { HeroService } from '../../services/hero.service';

import { RouterLinkMock } from '../../mocks/directives/router-link-mock';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    const getHeroesMemberName = 'getHeroes';
    const service = jasmine.createSpyObj('HeroService', [getHeroesMemberName]);

    let de: DebugElement;
    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [{ provide: HeroService, useValue: service }],
                declarations: [RouterLinkMock, DashboardComponent],
                schemas: [NO_ERRORS_SCHEMA]
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(DashboardComponent);
                    comp = fixture.componentInstance;
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());
    it('should have a header', () => {
        const ngOnInitMemberName = 'ngOnInit';
        const spy = spyOn(comp, ngOnInitMemberName);

        console.log(
            `${ngOnInitMemberName} calls [before fixture.detectChanges()]: `,
            spy.calls.count()
        );

        fixture.detectChanges();

        console.log(
            `${ngOnInitMemberName} calls [after fixture.detectChanges()]: `,
            spy.calls.count()
        );

        de = fixture.debugElement.query(By.css('h3'));
        const h3 = de.nativeElement;
        expect(h3).toBeDefined();
        expect(h3.innerText).toContain(fixture.componentInstance.title);
    });
    it(
        'should have heroes to bind in a list',
        fakeAsync(() => {
            const spy = service.getHeroes.and.returnValue(
                Promise.resolve(HEROES)
            );
            expect(comp.heroes.length).toBe(0);

            console.log(
                `${getHeroesMemberName} calls [before fixture.detectChanges() and tick()]: `,
                spy.calls.count()
            );

            fixture.detectChanges();
            tick();
            fixture.detectChanges();

            console.log(
                `${getHeroesMemberName} calls [after fixture.detectChanges() and tick()]: `,
                spy.calls.count()
            );

            expect(comp.heroes.length).toBeGreaterThan(1);
        })
    );
});
