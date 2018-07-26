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
