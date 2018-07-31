import React from 'react';
import PropTypes from 'prop-types';

import { VerticalNav } from 'patternfly-react';
import { isEmpty } from 'lodash';
import { noop } from '../../common/helpers';

import TaxonomySwitcher from './components/TaxonomySwitcher';
import UserDropdowns from './components/UserDropdowns';
import './layout.scss';

class Layout extends React.Component {
  componentDidMount() {
    const {
      items,
      data,
      fetchMenuItems,
      changeLocation,
      currentLocation,
      changeOrganization,
      currentOrganization,
    } = this.props;
    if (items.length === 0) fetchMenuItems(data);

    if (!isEmpty(data.locations.current_location)
     && currentLocation !== data.locations.current_location.location.name) {
      changeLocation(data.locations.current_location.location.name);
    }

    if (!isEmpty(data.organizations.current_org)
     && currentOrganization !== data.organizations.current_org.organization.name) {
      changeOrganization(data.organizations.current_org.organization.name);
    }
  }

  render() {
    const {
      items,
      data,
      isLoading,
      changeActiveMenu,
      changeOrganization,
      changeLocation,
      currentOrganization,
      currentLocation,
    } = this.props;
    return (
      <VerticalNav
        hoverDelay={0}
        items={items}
        onItemClick={changeActiveMenu}
        {...this.props}
      >
        <VerticalNav.Masthead>
          <VerticalNav.Brand
            title="FOREMAN"
            iconImg={data.logo}
            href={data.root}
          />
          <TaxonomySwitcher
            taxonomiesBool={data.taxonomies}
            currentLocation={currentLocation}
            locations={data.locations.available_locations}
            onLocationClick={changeLocation}
            currentOrganization={currentOrganization}
            organizations={data.organizations.available_organizations}
            onOrgClick={changeOrganization}
            isLoading={isLoading}
          />
          <UserDropdowns
            notificationUrl={data.notification_url}
            user={data.user}
            changeActiveMenu={changeActiveMenu}
          />
        </VerticalNav.Masthead>
      </VerticalNav>
    );
  }
}

Layout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    className: PropTypes.string,
    iconClass: PropTypes.string,
    initialActive: PropTypes.bool,
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      isDivider: PropTypes.bool,
      className: PropTypes.string,
      onClick: PropTypes.func,
    })),
  })),
  data: PropTypes.shape({
    menu: PropTypes.array,
    locations: PropTypes.object,
    organizations: PropTypes.object,
    root: PropTypes.string,
    logo: PropTypes.string,
    notification_url: PropTypes.string,
    taxonomies: PropTypes.object,
    user: PropTypes.object,
  }),
  currentOrganization: PropTypes.string,
  currentLocation: PropTypes.string,
  isLoading: PropTypes.bool,
  fetchMenuItems: PropTypes.func,
  changeActiveMenu: PropTypes.func,
  changeOrganization: PropTypes.func,
  changeLocation: PropTypes.func,
};

Layout.defaultProps = {
  items: [],
  data: {},
  currentOrganization: 'Any Organization',
  currentLocation: 'Any Location',
  isLoading: false,
  fetchMenuItems: noop,
  changeActiveMenu: noop,
  changeOrganization: noop,
  changeLocation: noop,
};

export default Layout;
