import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';

import { getCustomEvent } from '../../mocks/get-custom-event';
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

        const serviceOfComponent = fixture.debugElement.injector.get(
            HeroSearchService
        );
        console.log('serviceOfComponent: ', serviceOfComponent);

        fixture.detectChanges(); // triggers ngOnInit which assigns the observable subject
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [{ provide: Router, useValue: router }],
                declarations: [HeroSearchComponent]
            })
                .overrideComponent(HeroSearchComponent, {
                    set: {
                        providers: [
                            { provide: HeroSearchService, useValue: service }
                        ]
                    }
                })
                .compileComponents()
                .then(initializeComponentAndDetectChanges);
        })
    );
    it(
        'should call `HeroSearchService.search()`',
        fakeAsync(() => {
            const input = fixtureUtility.queryByCssToElement<HTMLInputElement>(
                '#search-box'
            );
            expect(input).toBeDefined(
                'The expected HTML Element is not defined.'
            );
            expect(input).not.toBeNull(
                'The expected HTML Element is not here.'
            );

            const searchText = 'rub';
            input.value = searchText;
            input.dispatchEvent(getCustomEvent('keyup'));

            tick(600); // wait a decent amount of time greater than rx.debounceTime(300)
            fixture.detectChanges();

            expect(service.search.calls.any()).toBe(
                true,
                'Calls to `HeroService.search()` were expected.'
            );

            const call = service.search.calls.first();
            expect(call.args.length).toBe(
                1,
                'The expected number of service-call args is not here.'
            );
            expect(call.args[0]).toBe(
                searchText,
                'The expected search text is not here.'
            );
        })
    );
});
