import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'patternfly-react';

import PageLayout from '../../common/PageLayout/PageLayout';
import { HW_MODELS_SEARCH_PROPS, HW_MODELS_NEW_PATH } from '../Constants';

const HardwareModelsList = () => (
  <PageLayout
    header={__('Hardware Models')}
    searchable
    searchProps={HW_MODELS_SEARCH_PROPS}
    toolbarButtons={
      <Link to={HW_MODELS_NEW_PATH}>
        <Button bsStyle="primary">{__('Create Model')}</Button>
      </Link>
    }
  >
    <h1>TABLE</h1>
  </PageLayout>
);

export default HardwareModelsList;
