import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { translate as __ } from '../../../common/I18n';
import { Select } from '../../Select';

class EditorHostSelect extends Component {
  componentDidMount() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 13) e.preventDefault();
    });
  }

  handleClickOutside = () => {
    const { open, onToggle } = this.props;
    if (open) onToggle();
  };

  render() {
    const {
      isLoading,
      onChange,
      onSearchChange,
      onSearchClear,
      onToggle,
      open,
      options,
      searchQuery,
      selectedItem,
    } = this.props;
    return (
      <Select
        options={options}
        placeholder={__('Filter Host...')}
        open={open}
        onToggle={onToggle}
        searchValue={searchQuery}
        onSearchChange={onSearchChange}
        onSearchClear={onSearchClear}
        onKeyDown={this.onKey}
        onItemClick={onChange}
        selectedItem={selectedItem}
        isLoading={isLoading}
      />
    );
  }
}

EditorHostSelect.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchClear: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }).isRequired,
};

export default enhanceWithClickOutside(EditorHostSelect);
