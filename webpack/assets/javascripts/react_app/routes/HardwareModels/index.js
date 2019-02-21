import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HardwareModelsList from './List/HardwareModelsList';
import HardwareModelsNew from './New/HardwareModelsNew';
import HardwareModelsForm from './Form/HardwareModelsForm';
import { HW_MODELS_PATH } from './Constants';

const subRoutes = basePath => [
  {
    path: basePath,
    exact: true,
    render: props => <HardwareModelsList {...props} />,
  },
  {
    path: `${basePath}/new`,
    exact: true,
    render: props => <HardwareModelsNew {...props} />,
  },
  {
    path: `${basePath}/:hardwareModelId/edit`,
    exact: true,
    render: props => <HardwareModelsForm {...props} />,
  },
];

export default {
  path: HW_MODELS_PATH,
  render: () => (
    <Switch>
      {subRoutes(HW_MODELS_PATH).map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  ),
};
