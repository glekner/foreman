import Immutable from 'seamless-immutable';
import {
  DELETE_MODAL_CREATE,
  DELETE_MODAL_TOGGLE,
} from './DeleteModalConstants';

const initialState = Immutable({
  isOpen: false,
  title: '',
  primaryContent: '',
  secondaryContent: '',
  primaryActionButtonContent: 'Delete',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MODAL_CREATE:
      return state.merge(action.payload);
    case DELETE_MODAL_TOGGLE:
      return state.set('isOpen', !state.isOpen);

    default:
      return state;
  }
};
