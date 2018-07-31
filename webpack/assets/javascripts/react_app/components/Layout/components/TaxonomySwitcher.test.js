import React from 'react';
import { shallow } from 'enzyme';
import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';

import TaxonomySwitcher from '../components/TaxonomySwitcher';
import { taxonomySwitcherProps } from '../Layout.fixtures';

const createStubs = () => ({
  onOrgClick: jest.fn(),
  onLocationClick: jest.fn(),
});

const fixtures = {
  'render switcher w/loading': { ...taxonomySwitcherProps, ...createStubs() },
};

describe('TaxonomySwitcher', () => {
  describe('rendering', () => testComponentSnapshotsWithFixtures(TaxonomySwitcher, fixtures));

  describe('trigger onClicks', () => {
    const wrapper = shallow(<TaxonomySwitcher { ...taxonomySwitcherProps } { ...createStubs() } />);

    wrapper.find('.organizations_clear').simulate('click');
    wrapper.find('.org_menuitem').simulate('click');
    wrapper.find('.locations_clear').simulate('click');
    wrapper.find('.location_menuitem').simulate('click');
  });
});
