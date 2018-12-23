import React from 'react';
import PropTypes from 'prop-types';
import { DiffView } from 'patternfly-react-extensions';

import { bindMethods } from '../../common/helpers';
import DiffRadioButtons from './DiffRadioButtons';
import './diffview.scss';

class DiffContainer extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['changeState']);
    this.state = {
      viewType: 'split',
    };
  }

  changeState(viewType) {
    this.setState({ viewType });
  }

  render() {
    const { patch, oldText, newText } = this.props;
    const { viewType } = this.state;
    const emptyState = <h3>No Diff</h3>;

    return (
      <div id="diff-container">
        <DiffRadioButtons changeState={this.changeState} stateView={viewType} />
        <div id="diff-table">
          <DiffView
            patch={patch}
            oldText={oldText}
            newText={newText}
            viewType={viewType}
            emptyState={emptyState}
          />
        </div>
      </div>
    );
  }
}

DiffContainer.propTypes = {
  oldText: PropTypes.string,
  newText: PropTypes.string,
  patch: PropTypes.string,
};

DiffContainer.defaultProps = {
  oldText: '',
  newText: '',
  patch: '',
};

export default DiffContainer;
