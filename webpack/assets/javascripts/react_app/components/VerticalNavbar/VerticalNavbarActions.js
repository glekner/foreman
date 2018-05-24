import {
  VERTICAL_NAV_TOGGLE_LOADING,
  VERTICAL_NAV_CHANGE_ACTIVE,
  VERTICAL_NAV_RESOURCES_REQUEST,
  VERTICAL_NAV_CHANGE_LOCATION,
  VERTICAL_NAV_CHANGE_ORG,
} from './VerticalNavbarConstants';

export const toggleLoading = () => ({
  type: VERTICAL_NAV_TOGGLE_LOADING,
});

export const activeMenu = primary => (dispatch) => {
  dispatch({
    type: VERTICAL_NAV_CHANGE_ACTIVE,
    payload: {
      primary,
    },
  });
};

export const fetchMenuItems = menuItems => (dispatch) => {
  const items = customItems(menuItems);
  dispatch({
    type: VERTICAL_NAV_RESOURCES_REQUEST,
    payload: {
      items,
    },
  });
};

export const changeOrg = (id, org) => (dispatch) => { // use ID for api
  dispatch({
    type: VERTICAL_NAV_CHANGE_ORG,
    payload: {
      org,
    },
  });
};

export const changeLoc = (id, location) => (dispatch) => { // use ID for api
  dispatch({
    type: VERTICAL_NAV_CHANGE_LOCATION,
    payload: {
      location,
    },
  });
};

const customItems = (menus) => {
  const items = [];
  menus.forEach((menu) => {
    menu.forEach((item) => {
      const childrenArray = [];
      item.children.forEach((child) => {
        const childObject = {
          title: isEmpty(child.name) === true ? child.name : __(child.name),
          isDivider: child.type === 'divider',
          href: child.url ? child.url : ' ',
        };
        childrenArray.push(childObject);
      });
      const itemObject = {
        title: __(item.name),
        initialActive: item.initialActive,
        iconClass: item.icon,
        subItems: childrenArray,
      };
      items.push(itemObject);
    });
  });
  return items;
};

const isEmpty = str => (!str || str.length === 0);

