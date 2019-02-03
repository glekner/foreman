import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import { translate as __ } from '../../../../common/I18n';
import './editorhostselect.scss';

class EditorHostSelect extends Component {
  handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    console.log(inputValue);
    return inputValue;
  };

  render() {
    const { hosts, onChange, ...props } = this.props;
    console.log(hosts);

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const filterColors = inputValue => 3;

    const promiseOptions = inputValue =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(filterColors(inputValue));
        }, 1000);
      });

    return (
      <AsyncSelect
        className="editor-select-container"
        placeholder={__('Select Host...')}
        cacheOptions
        classNamePrefix="editor-select"
        defaultOptions={options}
        loadOptions={promiseOptions}
        onInputChange={this.handleInputChange}
        isClearable
        {...props}
      />
    );
  }
}
EditorHostSelect.propTypes = {
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditorHostSelect;
