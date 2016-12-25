import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionCreatorFactory } from './ngrx-action-creator-factory';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    ActionCreatorFactory
  ],
  providers: [
    ActionCreatorFactory
  ]
})
export class NgrxActionCreatorFactoryModule { }
