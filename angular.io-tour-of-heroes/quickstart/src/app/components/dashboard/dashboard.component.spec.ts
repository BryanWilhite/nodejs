import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../services/in-memory-data.service';

import { AppRoutingModule } from '../../app-routing.module';

import { HeroService } from '../../services/hero.service';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

describe('DashboardComponent', () => {
    let de: DebugElement;
    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: APP_BASE_HREF, useValue: '/' },
                    HeroService
                ],
                declarations: [
                    DashboardComponent,
                    HeroDetailComponent,
                    HeroesComponent,
                    HeroSearchComponent
                ],
                imports: [
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService)
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined());
});
