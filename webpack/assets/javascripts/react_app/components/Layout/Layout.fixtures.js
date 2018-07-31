const mockOnClick = jest.fn();

// PF-React Component Data

const PFitems = [{
  title: 'Monitor', initialActive: true, iconClass: 'fa fa-tachometer', subItems: subItemsA, href: '/',
},
{
  title: 'Hosts', initialActive: false, iconClass: 'fa fa-server', subItems: subItemsB, href: '/',
},
{
  title: 'Configure', initialActive: false, iconClass: 'fa fa-wrench', subItems: subItemsC, href: '/',
}];

const subItemsA = [{
  title: 'A', isDivider: false, onClick: mockOnClick,
},
{
  title: 'B', isDivider: true, onClick: mockOnClick,
},
{
  title: 'C', isDivider: false, onClick: mockOnClick,
},
];
const subItemsB = [{
  title: 'D', isDivider: false, onClick: mockOnClick,
},
{
  title: 'E', isDivider: true, onClick: mockOnClick,
},
{
  title: 'F', isDivider: false, onClick: mockOnClick,
},
];
const subItemsC = [{
  title: 'G', isDivider: false, onClick: mockOnClick,
},
{
  title: 'H', isDivider: true, onClick: mockOnClick,
},
{
  title: 'I', isDivider: false, onClick: mockOnClick,
},
];

// Server Hash Data
const monitorChildren = [{
  type: 'item', name: 'Dashboard', url: '/',
},
{ type: 'divider', name: 'Hello' },
{
  type: 'item', name: 'Facts', url: '/fact_values',
},
];

const hostsChildren = [{
  type: 'item', name: 'All Hosts', url: '/hosts/new',
},
{ type: 'divider', name: 'There' },
{
  type: 'item', name: 'Architectures', url: '/architectures',
},
];

const userChildren = [{
  type: 'item', name: 'Environments', url: '/environments',
},
{ type: 'divider', name: 'Dear' },
{
  type: 'item', name: 'Architectures', url: '/architectures',
},
];
const infrastructureChildren = [{
  type: 'item', name: 'Domains', url: '/domains',
},
{ type: 'divider', name: 'Friend' },
{
  type: 'item', name: 'Realms', url: '/realms',
},
];

const hashItemsA = [{
  type: 'sub_menu', name: 'Monitor', icon: 'fa fa-tachometer', children: monitorChildren, active: false,
},
{
  type: 'sub_menu', name: 'Hosts', icon: 'fa fa-server', children: hostsChildren, active: false,
}];

const hashItemsB = [{
  type: 'sub_menu', name: 'User', icon: 'fa fa-wrench', children: userChildren, active: false,
},
{
  type: 'sub_menu', name: 'Infrastructure', icon: 'pficon pficon-network', children: infrastructureChildren, active: false,
}];

export const serverItems = [...hashItemsA, ...hashItemsB];
// DATA PROPS

const logo = '/assets/header_logo-c9614c16f2ee399ae9cb7f36ec94b9a26bf8cf9eabaa7fe6099bf80d1f7940db.svg';
const user = {
  current_user: {
    user: {
      id: 4, login: 'admin', firstname: 'Admin', lastname: 'User',
    },
  },
  user_dropdown: [
    {
      type: 'sub_menu', name: 'User', icon: 'fa fa-user', children: subItemsA,
    },
  ],
};

const organizations = {
  current_org: {
    organization: { id: 1, name: 'org1' },
  },
  available_organizations: [{ id: 1, name: 'org1', href: '/organizations/1-org1/select' }],
};

const locations = {
  current_location: {
    location: { id: 1, name: 'yaml' },
  },
  available_locations: [{ id: 1, name: 'yaml', href: '/locations/1-yaml/select' }],
};

const serverUser = {
  current_user: {
    user: {
      firstname: 'G',
      lastname: 'L',
    },
  },
  user_dropdown: [{
    children: [{
      type: 'item', url: '/', name: 'My Account',
    }, { type: 'divider' },
    ],
  }],
};

export const layoutMock = {
  items: PFitems,
  data: {
    menu: [hashItemsA, hashItemsB],
    locations,
    organizations,
    root: '/',
    logo,
    notification_url: '/notification_recipients',
    taxonomies: { locations: true, organizations: true },
    user,
  },
};

export const noItemsMock = {
  ...layoutMock,
  items: [],
};

export const hasTaxonomiesMock = {
  ...layoutMock,
  currentLocation: 'yaml',
  currentOrganization: 'org1',
};

export const taxonomySwitcherProps = {
  organizations: organizations.available_organizations,
  locations: locations.available_locations,
  taxonomiesBool: { locations: true, organizations: true },
  isLoading: true,
};

export const userDropdownProps = {
  user: serverUser,
  notification_url: '/',
};

