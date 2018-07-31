import Immutable from 'seamless-immutable';
import { isEmpty } from 'lodash';

import {
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_CHANGE_ITEMS,
  LAYOUT_CHANGE_ORG,
  LAYOUT_CHANGE_LOCATION,
} from './LayoutConstants';

const initialState = Immutable({
  items: [],
  isLoading: false,
  activeMenu: '',
  currentOrganization: 'Any Organization',
  currentLocation: 'Any Location',
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case LAYOUT_SHOW_LOADING:
      return state.set('isLoading', true);

    case LAYOUT_HIDE_LOADING:
      return state.set('isLoading', false);

    case LAYOUT_CHANGE_ITEMS:
      if (!isEmpty(payload.active)) return state.set('items', payload.menuItems).set('activeMenu', payload.active);
      return state.set('items', payload.menuItems);

    case LAYOUT_CHANGE_ORG:
      return state.set('currentOrganization', payload.org);

    case LAYOUT_CHANGE_LOCATION:
      return state.set('currentLocation', payload.location);

    default:
      return state;
  }
};
