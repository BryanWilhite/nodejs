import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick
} from '@angular/core/testing';

import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { click } from '../../mocks/click';
import { ActivatedRouteMock } from '../../mocks/services/activated-route-mock';
import { HeroService } from '../../services/hero.service';
import { HeroServiceSpy } from '../../mocks/services/hero-service-spy';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailComponentFixtureUtility } from './hero-detail.component.spec-fixture-util';

describe('HeroDetailComponent', () => {
    const activatedRoute: ActivatedRouteMock = new ActivatedRouteMock();
    const location = jasmine.createSpyObj('Location', ['back']);

    let service: any;

    let comp: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let fixtureUtility: HeroDetailComponentFixtureUtility;

    const initializeComponentAndDetectChanges = function(): Promise<any> {
        fixture = TestBed.createComponent(HeroDetailComponent);
        fixtureUtility = new HeroDetailComponentFixtureUtility(fixture);
        comp = fixture.componentInstance;

        service = fixture.debugElement.injector.get(HeroService) as any;

        fixture.detectChanges(); // triggers ngOnInit which gets a hero
        const whenStablePromise = fixture
            .whenStable()
            .then(() => fixture.detectChanges()); // 2nd change detection displays the async-fetched hero
        return whenStablePromise;
    };

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: Location, useValue: location },
                    { provide: ActivatedRoute, useValue: activatedRoute },
                    { provide: HeroService, useClass: HeroServiceSpy }
                ],
                declarations: [HeroDetailComponent],
                imports: [FormsModule]
            })
                .compileComponents()
                .then(initializeComponentAndDetectChanges);
        })
    );

    it('should generate component', () => expect(comp).toBeDefined());
    it('should call `HeroService.getHero()`', () => {
        expect(service.getHero.calls.count()).toBe(
            1,
            'One `HeroService.getHero()` call was expected.'
        );
    });
    it('should display stub hero’s name', () => {
        expect(fixtureUtility.nameDisplay.textContent).toBe(
            service.testHero.name
        );
    });
    it('should update/insert a Hero when Save button is clicked', () => {
        const button = fixtureUtility.buttons.find(
            i => i.innerText === 'Save'
        ) as HTMLButtonElement;
        expect(button).toBeDefined();
        expect(button).not.toBeNull();

        click(button);

        expect(service.update.calls.count()).toBe(
            1,
            'One `HeroService.update()` call was expected.'
        );
        expect(fixtureUtility.locationSpy.back.calls.any()).toBe(
            false,
            'Calls to `Location.back()` were not expected.'
        );
    });
    it(
        'should navigate when Save button is clicked',
        fakeAsync(() => {
            const button = fixtureUtility.buttons.find(
                i => i.innerText === 'Save'
            ) as HTMLButtonElement;
            expect(button).toBeDefined();
            expect(button).not.toBeNull();

            click(button);

            tick();

            expect(fixtureUtility.locationSpy.back.calls.any()).toBe(
                true,
                'Calls to `Location.back()` were expected.'
            );
        })
    );
    it('should navigate when Back button is clicked', () => {
        const button = fixtureUtility.buttons.find(
            i => i.innerText === 'Back'
        ) as HTMLButtonElement;
        expect(button).toBeDefined();
        expect(button).not.toBeNull();

        click(button);

        expect(fixtureUtility.locationSpy.back.calls.any()).toBe(
            true,
            'Calls to `Location.back()` were expected.'
        );
    });
    it(
        'should get a Hero ID from `paramMap`',
        async(() => {
            const expectedHeroId = 73;
            let allArgs = Array.from(service.getHero.calls.allArgs());
            expect(allArgs.length).toBe(
                1,
                'One empty service call is expected (after `TestBed` setup).'
            );

            activatedRoute.setParamMap({ id: expectedHeroId });

            allArgs = Array.from(service.getHero.calls.allArgs());
            expect(allArgs.length).toBe(2, 'Two service calls are expected.');

            const lastCall = allArgs[allArgs.length - 1] as Array<number>;
            expect(lastCall.length).toBeGreaterThan(0);
            expect(lastCall[0]).toBe(expectedHeroId);
        })
    );
});
