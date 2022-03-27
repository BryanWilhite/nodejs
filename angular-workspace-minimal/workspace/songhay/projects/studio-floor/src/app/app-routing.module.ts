import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from '@songhay/core';

const routes: Routes = [
  { path: 'songhay/core/component', component: CoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
