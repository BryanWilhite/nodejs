import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';

import { Router } from '@angular/router';

import { click } from '../../mocks/click';
import { getCustomEvent } from '../../mocks/get-custom-event';
import { HEROES } from '../../mocks/services/heroes-mock';

import { HeroService } from '../../services/hero.service';
import { HeroServiceSpy } from '../../mocks/services/hero-service-spy';

import { HeroesComponent } from './heroes.component';
import { HeroesComponentFixtureUtility } from './heroes.component.spec-fixture-util';

describe('HeroesComponent', () => {
    const router = jasmine.createSpyObj('Router', ['navigate']);

    let service: any;

    let comp: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let fixtureUtility: HeroesComponentFixtureUtility;

    const initializeComponentAndDetectChanges = function(): Promise<any> {
        fixture = TestBed.createComponent(HeroesComponent);
        fixtureUtility = new HeroesComponentFixtureUtility(fixture);
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
    it('should display heroes', () => {
        expect(fixtureUtility.heroLineItems.length).toBeGreaterThan(0);
    });
    it('should have expected mock hero', () => {
        const i = 3;
        const expectedHero = HEROES[i];
        const actualHero = fixtureUtility.heroLineItems[i].textContent;
        expect(actualHero).toContain(expectedHero.id.toString(), 'hero.id');
        expect(actualHero).toContain(expectedHero.name, 'hero.name');
    });
    it(
        'should select expected mock hero on click',
        fakeAsync(() => {
            const i = 3;
            const expectedHero = HEROES[i];
            const li = fixtureUtility.heroLineItems[i];
            li.dispatchEvent(getCustomEvent('click'));

            tick();

            expect(comp.selectedHero.id).toEqual(expectedHero.id);
        })
    );
    it(
        'should call `HeroService.delete()` on click',
        fakeAsync(() => {
            const i = 3;
            const expectedHero = HEROES[i];
            const li = fixtureUtility.heroLineItems[i];
            li.dispatchEvent(getCustomEvent('click'));

            tick();

            expect(comp.selectedHero.id).toEqual(expectedHero.id);
        })
    );
    it(
        'should navigate to selected hero detail on click',
        fakeAsync(() => {
            const i = 3;
            const expectedHero = HEROES[i];
            const li = fixtureUtility.heroLineItems[i];
            li.dispatchEvent(getCustomEvent('click'));

            tick();
            fixture.detectChanges();

            expect(comp.selectedHero).not.toBeNull();

            const button = fixtureUtility.buttons.find(
                b => b.innerText === 'View Details'
            ) as HTMLButtonElement;
            expect(button).toBeDefined();
            expect(button).not.toBeNull();
            expect(button.hidden).toBe(
                false,
                'Expected Details button to be visible.'
            );

            click(button);
            tick();

            expect(router.navigate.calls.any()).toBe(
                true,
                'Calls to `Router.navigate()` were expected.'
            );
            const args = router.navigate.calls.first().args[0];
            expect(args[0]).toContain(
                '/detail',
                'The expected location of the navigation arg is not here.'
            );
            expect(args[1]).toBe(
                expectedHero.id,
                'The expected ID of the navigation arg is not here.'
            );
        })
    );
});
