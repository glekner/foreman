import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'patternfly-react';
import './auditspage.scss';

import { translate as __ } from '../../../common/I18n';
import PageLayout from '../../common/PageLayout/PageLayout';
import AuditsTable from './components/AuditsTable';
import { AUDITS_SEARCH_PROPS } from '../constants';

const AuditsPage = ({ searchQuery, fetchAndPush, docUrl, ...props }) => (
  <PageLayout
    header={__('Audits')}
    searchable
    searchProps={AUDITS_SEARCH_PROPS}
    searchQuery={searchQuery}
    onSearch={search => fetchAndPush({ searchQuery: search, page: 1 })}
    onBookmarkClick={search => fetchAndPush({ searchQuery: search, page: 1 })}
    toolbarButtons={
      <Button href={`${docUrl}#4.1.4Auditing`} className="btn-docs">
        <Icon type="pf" name="help" />
        {__(' Documentation')}
      </Button>
    }
  >
    <AuditsTable fetchAndPush={fetchAndPush} {...props} />
  </PageLayout>
);

AuditsPage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  fetchAndPush: PropTypes.func.isRequired,
  docUrl: PropTypes.string,
};

AuditsPage.defaultProps = {
  docUrl: '',
};

export default AuditsPage;
