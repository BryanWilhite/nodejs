import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { getCustomEvent } from '../../mocks/get-custom-event';

import { HeroService } from '../../services/hero.service';
import { HeroServiceSpy } from '../../mocks/services/hero-service-spy';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
    const router = jasmine.createSpyObj('Router', ['navigate']);

    let service: any;

    let comp: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    const initializeComponentAndDetectChanges = function(): Promise<any> {
        fixture = TestBed.createComponent(HeroesComponent);
        comp = fixture.componentInstance;

        service = fixture.debugElement.injector.get(HeroService) as any;

        fixture.detectChanges(); // triggers ngOnInit which fetches heroes
        const whenStablePromise = fixture
            .whenStable()
            .then(() => fixture.detectChanges()); // 2nd change detection displays the async-fetched heroes
        return whenStablePromise;
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: Router, useValue: router },
                    { provide: HeroService, useClass: HeroServiceSpy }
                ],
                declarations: [HeroesComponent]
            })
                .compileComponents()
                .then(initializeComponentAndDetectChanges);
        })
    );

});
