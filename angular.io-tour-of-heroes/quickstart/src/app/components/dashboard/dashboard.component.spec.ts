import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../../app-routing.module';

import { HEROES } from '../../mocks/services/heroes-mock';
import { HeroService } from '../../services/hero.service';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';

describe('DashboardComponent', () => {
    let de: DebugElement;
    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let service: HeroService;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: APP_BASE_HREF, useValue: '/' },
                    HeroService
                ],
                declarations: [
                    DashboardComponent,
                    HeroDetailComponent,
                    HeroesComponent
                ],
                imports: [
                    FormsModule,
                    AppRoutingModule,
                    HttpModule
                ],
                schemas: [NO_ERRORS_SCHEMA]
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(DashboardComponent);
                    comp = fixture.componentInstance;
                    service = TestBed.get(HeroService);
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());
    it('should have a header', () => {
        const methodName = 'ngOnInit';
        const spy = spyOn(comp, methodName);

        console.log(
            `${methodName} calls [before fixture.detectChanges()]: `,
            spy.calls.count()
        );

        fixture.detectChanges();

        console.log(
            `${methodName} calls [after fixture.detectChanges()]: `,
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
            const methodName = 'getHeroes';
            const spy = spyOn(service, methodName).and.returnValue(
                Promise.resolve(HEROES)
            );
            expect(comp.heroes.length).toBe(0);

            console.log(
                `${methodName} calls [before fixture.detectChanges() and tick()]: `,
                spy.calls.count()
            );

            fixture.detectChanges();
            tick();
            fixture.detectChanges();

            console.log(
                `${methodName} calls [after fixture.detectChanges() and tick()]: `,
                spy.calls.count()
            );

            expect(comp.heroes.length).toBeGreaterThan(1);
        })
    );
});
