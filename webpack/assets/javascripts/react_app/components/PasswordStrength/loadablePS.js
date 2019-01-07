import React from 'react';
import { Loadable } from '../../utils';

const loadingLayout = () => <div id="layout">LOADING</div>;

export default Loadable(
  {
    loader: () => import('./PasswordStrength'),
  },
  loadingLayout
);
