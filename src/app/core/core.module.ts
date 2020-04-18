import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {services} from './services';
import {components} from './components';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ...services
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})

export class CoreModule { }