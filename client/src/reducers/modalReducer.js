import { TOGGLE_MODAL } from '../actions/types';

const _defaultState = {
  isModalOpen: false,
  Component: null,
};

export default function(state = _defaultState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, { isModalOpen: action.isModalOpen, Component: action.Component });
    default:
      return state;
  }
}
