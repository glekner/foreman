import React from 'react';
import PropTypes from 'prop-types';
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

  onUnifiedClick() {
    this.setState({ viewType: 'unified' });
  }

  onSplitClick() {
    this.setState({ viewType: 'split' });
  }

  render() {
    const { oldText, newText } = this.props;
    return (
      <div id="diff-container">
        <div id="diff-radio-buttons">
          <ButtonGroup>
            <Button
              className={this.state.viewType === 'split' ? 'diff-button active' : 'diff-button'}
              id="split-btn"
              onClick={() => this.onSplitClick()}
              bsStyle={this.state.viewType === 'split' ? 'primary' : 'default'}
            >
              Split
            </Button>
            <Button
              className={this.state.viewType === 'unified' ? 'diff-button active' : 'diff-button'}
              id="unified-btn"
              onClick={() => this.onUnifiedClick()}
              bsStyle={this.state.viewType === 'unified' ? 'primary' : 'default'}
            >
              Unified
            </Button>
          </ButtonGroup>
        </div>
        <div id="diff-table">
          <DiffView oldText={oldText} newText={newText} viewType={this.state.viewType} />
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
