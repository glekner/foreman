import Immutable from 'seamless-immutable';

import {
  VERTICAL_NAV_TOGGLE_LOADING,
  VERTICAL_NAV_CHANGE_ACTIVE,
  VERTICAL_NAV_RESOURCES_REQUEST,
  VERTICAL_NAV_CHANGE_ORG,
  VERTICAL_NAV_CHANGE_LOCATION,
} from './VerticalNavbarConstants';

const initialState = Immutable({
  items: [],
  isLoading: false,
  activeMenu: 'Monitor',
  currentOrg: 'Any Organization',
  currentLoc: 'Any Location',
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case VERTICAL_NAV_TOGGLE_LOADING:
      return state.set('isLoading', !state.isLoading);

    case VERTICAL_NAV_CHANGE_ACTIVE:
      if (state.items.length > 0) {
        return state.set('items', state.items.map((item) => {
          if (item.title === payload.primary.title) {
            return item.set('initialActive', true);
          }
          return item.set('initialActive', false);
        }));
      }
      return state;

    case VERTICAL_NAV_RESOURCES_REQUEST:
      if (state.items.length === 0) { return state.set('items', payload.items); }
      return state;

    case VERTICAL_NAV_CHANGE_ORG:
      return state.set('currentOrg', payload.org);

    case VERTICAL_NAV_CHANGE_LOCATION:
      return state.set('currentLoc', payload.location);

    default:
      return state;
  }
};
