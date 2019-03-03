import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Audits from './Audits';
import HardwareModels from './HardwareModels';

export const pages = [Audits, HardwareModels];

export default (
  <Switch>
    {pages.map(({ render, ...props }) => (
      <Route
        {...props}
        key={props.path}
        render={renderProps => {
          const railsApplicationContent = document.getElementById(
            'rails-application-content'
          );
          if (railsApplicationContent) {
            railsApplicationContent.remove();
          }
          return render(renderProps);
        }}
      />
    ))}
  </Switch>
);
