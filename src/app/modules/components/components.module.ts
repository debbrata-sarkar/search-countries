import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {SharedModule} from '../../shared';
import {CoreModule} from '../../core';
import { CountryInfoComponent } from './country-info/country-info.component';

@NgModule({
  declarations: [CountryInfoComponent],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    FormsModule
  ],
  exports: [],
  providers: []
})

export class ComponentsModule { }