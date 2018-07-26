import React from 'react';
import { VerticalNav } from 'patternfly-react';
import { isEmpty } from 'lodash';
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

    if (!isEmpty(data.current_location)
     && currentLocation !== data.current_location.location.name) {
      changeLocation(data.locations.current_location.location.name);
    }

    if (!isEmpty(data.current_org)
     && currentOrganization !== data.current_org.organization.name) {
      changeOrganization(data.organizations.current_org.organization.name);
    }
  }

  render() {
    const {
      items,
      data,
      isLoading,
      children,
      changeActiveMenu,
      currentOrganization,
      currentLocation,
      changeOrganization,
      changeLocation,
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
        {children}
      </VerticalNav>
    );
  }
}

export default Layout;
