import { Injectable } from '@angular/core';

/* Action Creator Factory
 * ======================
 * Creates typed action creators functions
 * const addTodo = ActionCreatorFactory.create<string>('ADD_TODO')
 * 
 **/
export class ActionCreator<T> {
  constructor(
    public type: string = 'NOT_SET',
    public payload?: T
  ) {}
}
@Injectable()
export class ActionCreatorFactory {
  static create?<T>(type: string, defaultPayloadValue?: T) {
    return (payload?: T): ActionCreator<T> => {
      const _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
      return new ActionCreator<T>(type, _payload);
    };
  }

  create?<T>(type: string, defaultPayloadValue?: T) {
    return ActionCreatorFactory.create<T>(type, defaultPayloadValue);
  }
}
