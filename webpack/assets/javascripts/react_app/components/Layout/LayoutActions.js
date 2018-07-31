
import { combineMenuItems } from '../../../foreman_navigation';
import {
  LAYOUT_SHOW_LOADING,
  LAYOUT_HIDE_LOADING,
  LAYOUT_CHANGE_ITEMS,
  LAYOUT_CHANGE_LOCATION,
  LAYOUT_CHANGE_ORG,
} from './LayoutConstants';

export const showLoading = () => ({
  type: LAYOUT_SHOW_LOADING,
});

export const hideLoading = () => ({
  type: LAYOUT_HIDE_LOADING,
});

export const changeActiveMenu = primary => (dispatch, getState) => {
  const menuItems = getState().layout.items.map((item) => {
    if (primary.title === item.name) {
      return Object.assign({}, item, {
        active: true,
      });
    }

    return Object.assign({}, item, {
      active: false,
    });
  });

  dispatch({
    type: LAYOUT_CHANGE_ITEMS,
    payload: {
      menuItems,
      active: primary.title,
    },
  });
};

export const fetchMenuItems = data => (dispatch) => {
  const menuItems = combineMenuItems(data);
  dispatch({
    type: LAYOUT_CHANGE_ITEMS,
    payload: {
      menuItems,
    },
  });
};

export const changeOrganization = org => (dispatch) => {
  dispatch({
    type: LAYOUT_CHANGE_ORG,
    payload: {
      org,
    },
  });
};

export const changeLocation = location => (dispatch) => {
  dispatch({
    type: LAYOUT_CHANGE_LOCATION,
    payload: {
      location,
    },
  });
};
