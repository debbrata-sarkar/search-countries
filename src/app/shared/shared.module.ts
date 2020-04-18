import {NgModule} from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from '../core';

@NgModule({
  imports: [
    LayoutModule,
    CoreModule
  ],
  declarations: [],
  exports: [
    LayoutModule
  ],
  providers: []
})

export class SharedModule { }