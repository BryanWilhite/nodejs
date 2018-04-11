import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//import { click } from '../../mocks/click';
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
    let whenStablePromise: Promise<any>;

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
                .then(() => {
                    fixture = TestBed.createComponent(HeroDetailComponent);
                    fixtureUtility = new ComponentFixtureUtility(fixture);
                    comp = fixture.componentInstance;

                    service = fixture.debugElement.injector.get(
                        HeroService
                    ) as any;

                    fixture.detectChanges(); // triggers ngOnInit which gets a hero
                    whenStablePromise = fixture
                        .whenStable()
                        .then(() => fixture.detectChanges()); // 2nd change detection displays the async-fetched hero
                });
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
    // it('should navigate when click cancel', () => {
    //     const backButton = fixtureUtility.buttons.find(
    //         i => i.innerText === 'Back'
    //     );
    //     expect(backButton).not.toBeNull();

    //     click(backButton);
    //     expect(fixtureUtility.locationSpy.back.calls.any()).toBe(
    //         true,
    //         'router.navigate called'
    //     );
    // });
});
