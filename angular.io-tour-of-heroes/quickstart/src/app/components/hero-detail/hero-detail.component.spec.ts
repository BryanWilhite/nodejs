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
import { ComponentFixtureUtility } from './hero-detail.component.spec-fixture-util';

describe('HeroDetailComponent', () => {
    const activatedRoute: ActivatedRouteMock = new ActivatedRouteMock();
    const location = jasmine.createSpyObj('Location', ['back']);

    let service: any;

    let comp: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let fixtureUtility: ComponentFixtureUtility;

    const initializeComponentAndDetectChanges = function(): Promise<any> {
        fixture = TestBed.createComponent(HeroDetailComponent);
        fixtureUtility = new ComponentFixtureUtility(fixture);
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
        expect(button).not.toBeNull();

        click(button);

        expect(fixtureUtility.locationSpy.back.calls.any()).toBe(
            true,
            'Calls to `Location.back()` were expected.'
        );
    });
    it(
        'should get a Hero from `paramMap`',
        async(() => {
            const expectedHeroId = 73;
            activatedRoute.setParamMap({ id: expectedHeroId });
            initializeComponentAndDetectChanges().then(() => {
                console.log(
                    'service.getHero.calls',
                    service.getHero.calls.allArgs()
                ); // why is this showing four sets of args?

                const calls = Array.from(
                    service.getHero.calls.allArgs()
                ).filter(i => {
                    const args = i as Array<number>;
                    return args.length > 0 && (args[0] === expectedHeroId);
                });

                expect(calls.length).toBeGreaterThan(
                    0,
                    '`HeroService.getHero()` call arguments were expected.'
                );

                const call = calls[0];
                expect((call as Array<number>).length).toBeGreaterThan(0);
                expect(call[0]).toBe(expectedHeroId);
            });
        })
    );
});
