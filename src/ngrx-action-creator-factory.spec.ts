import {
  
} from '@angular/core/testing';

import { ActionCreatorFactory } from '../ngrx-action-creator-factory';

const zone = jasmine.createSpyObj('zone', ['run']);

describe('Ngrx Action Creator Factory', () => {

  it('should create an instance of Action Creator', () => {
    const service = ActionCreatorFactory.create('some-action');
    const actual = service;
    expect(actual).toBeDefined()
  });

  it('should return the same type of action', () => {
    const action = 'TESTING ACTION';
    const service = ActionCreatorFactory.create(action);
    const actual = service().type;
    const expected = action;
    expect(actual).toMatch(expected);
  });
});
