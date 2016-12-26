import { NgModule } from '@angular/core';

import { ActionCreatorFactory } from './ngrx-action-creator-factory';

@NgModule({
  providers: [
    ActionCreatorFactory
  ]
})
export class NgrxActionCreatorFactoryModule { }
