import React from 'react';
import { Loadable } from '../../../utils';

const loadingLayout = () => (
  <div id="layout">
    <div className="navbar navbar-pf-vertical-loading" />
    <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus nav-pf-persistent-secondary" />
  </div>
);

export default Loadable(
  {
    loader: () => import('./Layout'),
  },
  loadingLayout
);
