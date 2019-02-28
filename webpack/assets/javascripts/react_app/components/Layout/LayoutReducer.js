import Immutable from 'seamless-immutable';
import { isEmpty } from 'lodash';

import {
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_UPDATE_ITEMS,
  LAYOUT_CHANGE_ORG,
  LAYOUT_CHANGE_LOCATION,
  LAYOUT_CHANGE_SECONDARY,
} from './LayoutConstants';

const initialState = Immutable({
  items: [],
  isLoading: false,
  activeMenu: '',
  secondaryMenu: '',
  currentOrganization: { title: 'Any Organization' },
  currentLocation: { title: 'Any Location' },
});

export default (state = initialState, action) => {
  const {
    payload: { items, activeMenu, org, location, secondaryMenu } = {},
    type,
  } = action;

  switch (type) {
    case LAYOUT_SHOW_LOADING:
      return state.set('isLoading', true);

    case LAYOUT_HIDE_LOADING:
      return state.set('isLoading', false);

    case LAYOUT_UPDATE_ITEMS:
      if (!isEmpty(activeMenu)) return state.merge({ items, activeMenu });
      return state.set('items', items);

    case LAYOUT_CHANGE_ORG:
      return state.set('currentOrganization', org);

    case LAYOUT_CHANGE_LOCATION:
      return state.set('currentLocation', location);

    case LAYOUT_CHANGE_SECONDARY:
      return state.set('secondaryMenu', secondaryMenu);

    default:
      return state;
  }
};
