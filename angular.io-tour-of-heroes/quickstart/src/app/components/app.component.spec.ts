import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HeroService } from '../services/hero.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';

describe('AppComponent', () => {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: APP_BASE_HREF, useValue: '/' },
                    HeroService
                ],
                declarations: [
                    AppComponent,
                    DashboardComponent,
                    HeroDetailComponent,
                    HeroesComponent,
                    HeroSearchComponent
                ],
                imports: [FormsModule, AppRoutingModule]
            })
                .compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(AppComponent);
                    comp = fixture.componentInstance;
                });
        })
    );

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('h1'));
        const h1 = de.nativeElement;
        expect(h1.innerText).toContain(fixture.componentInstance.title);
    });
});
