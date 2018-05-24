import React from 'react';
import { VerticalNav } from 'patternfly-react';
import Taxonomies from './components/Taxonomies';
import './verticalnavbar.scss';
import UserDropdowns from './components/UserDropdowns';

class VerticalNavbar extends React.Component {
  componentDidMount() {
    const { data, fetchMenuItems } = this.props;
    fetchMenuItems(data.menu);
  }

  render() {
    const {
      items, data, isLoading, children, activeMenu, currentOrg, currentLoc, changeOrg, changeLoc,
    } = this.props;
    return (
      <VerticalNav
        hoverDelay={0}
        items={items}
        onItemClick={activeMenu}
        {...this.props}
      >
        <VerticalNav.Masthead>
          <VerticalNav.Brand title="FOREMAN" iconImg={data.logo} href={data.root} />
          <Taxonomies
            locations={data.locations}
            organizations={data.organizations}
            isLoading={isLoading}
            currentLoc={currentLoc}
            currentOrg={currentOrg}
            onOrgClick={changeOrg}
            onLocationClick={changeLoc}
          />
          <UserDropdowns notificationUrl={data.notification_url} user={data.user_dropdown} />
        </VerticalNav.Masthead>
        {children}
      </VerticalNav>
    );
  }
}

export default VerticalNavbar;
