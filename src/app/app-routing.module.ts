import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryInfoComponent } from './modules/components/country-info/country-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'countries', component: CountryInfoComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
