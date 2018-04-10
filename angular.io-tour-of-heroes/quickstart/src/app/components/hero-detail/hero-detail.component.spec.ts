import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteMock } from '../../mocks/services/activated-route-mock';
import { HeroService } from '../../services/hero.service';

import { HeroDetailComponent } from './hero-detail.component';
import { ComponentFixtureUtility } from './hero-detail.component.spec-fixture-util';

describe('HeroDetailComponent', () => {
    const activatedRoute: ActivatedRouteMock = new ActivatedRouteMock();

    const backMemberName = 'back';
    const location = jasmine.createSpyObj('Location', [backMemberName]);

    const getHeroesMemberName = 'getHeroes';
    const service = jasmine.createSpyObj('HeroService', [getHeroesMemberName]);

    let comp: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let fixtureUtility: ComponentFixtureUtility;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: Location, useValue: location },
                    { provide: ActivatedRoute, useValue: activatedRoute },
                    { provide: HeroService, useValue: service }
                ],
                declarations: [HeroDetailComponent],
                imports: [FormsModule]
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(HeroDetailComponent);
                    fixtureUtility = new ComponentFixtureUtility(fixture);
                    comp = fixture.componentInstance;
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());
});
