import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';

import { HeroSearchService } from '../../services/hero-search.service';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';
import { HeroSearchComponent } from './hero-search.component';
import { Router } from '@angular/router';

describe('HeroSearchComponent', () => {
    const router = jasmine.createSpyObj('Router', ['navigate']);
    const service = jasmine.createSpyObj('HeroSearchService', ['search']);

    let comp: HeroSearchComponent;
    let fixture: ComponentFixture<HeroSearchComponent>;
    let fixtureUtility: ComponentFixtureUtility<HeroSearchComponent>;

    const initializeComponentAndDetectChanges = function() {
        fixture = TestBed.createComponent(HeroSearchComponent);
        fixtureUtility = new ComponentFixtureUtility(fixture);
        comp = fixture.componentInstance;

        fixture.detectChanges(); // triggers ngOnInit which assigns the observable subject
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: Router, useValue: router },
                    { provide: HeroSearchService, useValue: service }
                ],
                declarations: [HeroSearchComponent]
            })
                .compileComponents()
                .then(initializeComponentAndDetectChanges);
        })
    );
});
