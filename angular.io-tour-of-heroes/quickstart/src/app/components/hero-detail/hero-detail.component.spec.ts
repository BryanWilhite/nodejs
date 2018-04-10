import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteMock } from '../../mocks/services/activated-route-mock';
import { HeroService } from '../../services/hero.service';
import { HeroServiceSpy } from '../../mocks/services/hero-service-spy';

import { HeroDetailComponent } from './hero-detail.component';
import { ComponentFixtureUtility } from './hero-detail.component.spec-fixture-util';

describe('HeroDetailComponent', () => {
    const activatedRoute: ActivatedRouteMock = new ActivatedRouteMock();

    const backMemberName = 'back';
    const location = jasmine.createSpyObj('Location', [backMemberName]);

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
                    activatedRoute.setParamMap({ id: 99999 });
                    fixture.detectChanges(); // triggers ngOnInit which gets a hero
                    whenStablePromise = fixture
                        .whenStable()
                        .then(() => fixture.detectChanges()); // 2nd change detection displays the async-fetched hero
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());
});
