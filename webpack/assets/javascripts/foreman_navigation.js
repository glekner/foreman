import store from './react_app/redux';
import * as LayoutActions from './react_app/components/Layout/LayoutActions';

export const showLoading = () => {
  store.dispatch(LayoutActions.showLoading());
};

export const hideLoading = () => {
  store.dispatch(LayoutActions.hideLoading());
};

export const navigateTo = (url) => {
  window.Turbolinks.visit(url);
};

export const changeLocation = (loc) => {
  store.dispatch(LayoutActions.changeLocation(loc));
};

export const changeOrganization = (org) => {
  store.dispatch(LayoutActions.changeOrganization(org));
};

export const changeActive = (active) => {
  store.dispatch(LayoutActions.changeActiveMenu({ title: active }));
};

export const combineMenuItems = (data) => {
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
