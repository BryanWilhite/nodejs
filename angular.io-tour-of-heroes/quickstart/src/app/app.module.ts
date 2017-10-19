import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from './services/hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule /* <-- import the FormsModule before binding with [(ngModel)] */,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            },
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {}
