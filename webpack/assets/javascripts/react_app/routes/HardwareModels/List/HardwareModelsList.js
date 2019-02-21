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
      <Button className="btn-docs">
        <Link to={HW_MODELS_NEW_PATH}>{__('Create Model')}</Link>
      </Button>
    }
  >
    <h1>TABLE</h1>
  </PageLayout>
);

export default HardwareModelsList;
