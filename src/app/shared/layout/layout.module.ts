import {NgModule} from '@angular/core';
import {layouts} from './index';
import { BrowserModule } from '@angular/platform-browser';
import { SearchCardComponent } from './search-card/search-card.component';
import { CountryCardComponent } from './country-card/country-card.component';

@NgModule({
    declarations: [
      ...layouts,
      SearchCardComponent,
      CountryCardComponent,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
      ...layouts
    ],
    providers: []
  })
  
  export class LayoutModule { }