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
        'should select expected mock hero on click and display name in upper case',
        fakeAsync(() => {
            const i = 3;
            const expectedHero = HEROES[i];
            const li = fixtureUtility.heroLineItems[i];
            li.dispatchEvent(getCustomEvent('click'));

            tick();
            fixture.detectChanges();

            expect(comp.selectedHero.id).toEqual(expectedHero.id);

            const h2 = fixtureUtility.headers.find(e => {
                const attr = e.attributes['class'];
                return attr && attr.value === 'hero selected';
            });
            expect(h2).not.toBeUndefined();
            expect(h2).not.toBeNull();

            const span = Array.from(h2.getElementsByTagName('span'))[0];
            expect(span).not.toBeUndefined();
            expect(span).not.toBeNull();
            expect(span.innerText).toBe(expectedHero.name.toUpperCase());
        })
    );
    it(
        'should call `HeroService.create()` on click',
        fakeAsync(() => {
            const button = fixtureUtility.buttons.find(
                e => e.innerText === 'Add'
            ) as HTMLButtonElement;
            expect(button).toBeDefined();
            expect(button).not.toBeNull();

            const input = fixtureUtility.inputs.find(
                e => e.id === 'hero-name'
            ) as HTMLInputElement;
            expect(input).toBeDefined();
            expect(input).not.toBeNull();

            const heroName = 'Funky Man';
            input.value = heroName;

            click(button);

            tick();
            fixture.detectChanges();

            expect(service.create.calls.any()).toBe(
                true,
                'Calls to `HeroService.create()` were expected.'
            );
            const actualHeroName = service.create.calls.first().args[0];
            expect(actualHeroName).toBe(
                heroName,
                'The expected Hero name is not here.'
            );
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
            fixture.detectChanges();

            expect(comp.selectedHero.id).toEqual(expectedHero.id);

            const button = fixtureUtility.getButton(li);
            expect(button).not.toBeUndefined();
            expect(button).not.toBeNull();
            expect(button.attributes['class'].value).toBe('delete');

            click(button);

            tick();
            fixture.detectChanges();

            expect(service.delete.calls.any()).toBe(
                true,
                'Calls to `HeroService.delete()` were expected.'
            );
            const actualId = service.delete.calls.first().args[0];
            expect(actualId).toBe(
                expectedHero.id,
                'The expected Hero ID is not here.'
            );
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
