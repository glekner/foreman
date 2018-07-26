
import { navigateTo } from '../../../foreman_navigation';
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
  // use ID for api
  dispatch({
    type: LAYOUT_CHANGE_LOCATION,
    payload: {
      location,
    },
  });
};

const combineMenuItems = (data) => {
  const items = [];

  data.menu.forEach((menu) => {
    menu.forEach((item) => {
      items.push(item);
    });
  });

  if (data.taxonomies.organizations) {
    const anyOrg = {
      name: 'Any Organization',
      onClick: () => {
        navigateTo('/organizations/clear');
        changeOrganization('Any Organization');
      },
    };
    const childrenArray = [];
    childrenArray.push(anyOrg);

    data.organizations.available_organizations.forEach((org) => {
      const childObject = {
        type: org.type,
        name: org.title,
        onClick: () => {
          navigateTo(org.href);
          changeOrganization(org.title);
        },
        url: org.href,
        className: data.organizations.current_org.organization.name === org.title ? 'active' : '',
      };
      childrenArray.push(childObject);
    });

    const orgItem = {
      type: 'sub_menu',
      name: 'Organizations',
      icon: 'fa fa-building',
      children: childrenArray,
      className: 'visible-xs-block',
      active: false,
    };
    items.push(orgItem);
  }

  if (data.taxonomies.locations) {
    const anyLoc = {
      name: 'Any Location',
      onClick: () => {
        changeLocation('Any Location');
        navigateTo('/locations/clear');
      },
    };
    const childrenArray = [];
    childrenArray.push(anyLoc);

    data.locations.available_locations.forEach((loc) => {
      const childObject = {
        type: loc.type,
        name: loc.title,
        onClick: () => {
          navigateTo(loc.href);
          changeLocation(loc.title);
        },
        url: loc.href,
        className: data.locations.current_location.location.name === loc.title ? 'active' : '',
      };
      childrenArray.push(childObject);
    });

    const locItem = {
      type: 'sub_menu',
      name: 'Locations',
      icon: 'fa fa-globe',
      children: childrenArray,
      className: 'visible-xs-block',
      active: false,
    };
    items.push(locItem);
  }
  return items;
};
