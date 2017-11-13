import { FETCH_USER } from '../actions/types';

const _defaultState = {};

export default function(state = _defaultState, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}
