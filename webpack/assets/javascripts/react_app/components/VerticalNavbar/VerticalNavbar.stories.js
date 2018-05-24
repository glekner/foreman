import React from 'react';
import { storiesOf } from '@storybook/react';
import { VerticalNav } from 'patternfly-react';
import VerticalNavbar from './index';

const mockData = [
  {
    title: 'Monitor',
    initialActive: true,
    iconClass: 'fa fa-tachometer',
    subItems: [
      {
        title: 'Dashboard',
        iconClass: 'fa fa-envelope',
      },
      {
        title: 'Facts',
        isDivider: true,
      },
      {
        title: 'Statistics',
        iconClass: 'fa fa-bell',
      },
      {
        title: 'Trends',
        iconClass: 'fa fa-bell',
      },
    ],
  },
  {
    title: 'Hosts',
    iconClass: 'fa fa-server',
    subItems: [
      {
        title: 'All Hosts',
      },
      {
        title: 'Create Hosts',
        href: 'http://www.patternfly.org',
      },
    ],
  },
];


storiesOf('VerticalNavBar', module).add('VerticalNavbar', () => (
  <div
    style={{ transform: 'translateZ(0)', height: '100vh', paddingTop: '60px' }}
  >
    <div className="layout-pf layout-pf-fixed faux-layout">
      <VerticalNavbar
        items={mockData}
        showBadges
        sessionKey="storybookItemsAsObjects"
      >
        <VerticalNav.Masthead title="Foreman" />
     </VerticalNavbar>
    </div>
  </div>
));
