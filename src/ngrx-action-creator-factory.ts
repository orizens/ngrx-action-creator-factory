import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

/* Action Creator Factory
 * ======================
 * Creates typed action creators functions
 * const addTodo = ActionCreatorFactory.create<string>('ADD_TODO')
 * 
 **/
export class ActionCreator<T> implements Action {
  constructor(
    public type: string = 'NOT_SET',
    public payload?: T
  ) {}
}
@Injectable()
export class ActionCreatorFactory {
  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T) => {
      const _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
      return new ActionCreator<T>(type, _payload);
    }
  }
}
