import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonGroup, Button } from 'patternfly-react';

import DiffView from './DiffView';
import './diffview.scss';

class DiffContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'split',
    };
  }

  render() {
    const { oldText, newText } = this.props;
    const { viewType } = this.state;
    const btnClass = type => classNames('diff-button', { active: viewType === type });
    return (
      <div id="diff-container">
        <div id="diff-radio-buttons">
          <ButtonGroup>
            <Button
              className={btnClass('split')}
              id="split-btn"
              onClick={() => this.setState({ viewType: 'split' })}
              bsStyle={viewType === 'split' ? 'primary' : 'default'}
            >
              Split
            </Button>
            <Button
              className={btnClass('unified')}
              id="unified-btn"
              onClick={() => this.setState({ viewType: 'unified' })}
              bsStyle={viewType === 'unified' ? 'primary' : 'default'}
            >
              Unified
            </Button>
          </ButtonGroup>
        </div>
        <div id="diff-table">
          <DiffView oldText={oldText} newText={newText} viewType={viewType} />
        </div>
      </div>
    );
  }
}

DiffContainer.propTypes = {
  oldText: PropTypes.string.isRequired,
  newText: PropTypes.string.isRequired,
};

export default DiffContainer;
