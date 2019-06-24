import React from 'react';
import { mapSelectorsToProps, mapActionsToProps } from './helpers';

export const withRedux = (
  selectors,
  actions
) => Component => componentProps => (
  <Component
    {...Object.assign(
      mapSelectorsToProps(selectors),
      mapActionsToProps(actions),
      componentProps
    )}
  />
);
