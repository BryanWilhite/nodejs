import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { AppComponent } from './components/app.component';

@NgModule({
    imports: [BrowserModule, FormsModule /* <-- import the FormsModule before binding with [(ngModel)] */],
    declarations: [AppComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
