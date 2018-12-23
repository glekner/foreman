import React from 'react';
import PropTypes from 'prop-types';
import { Icon, NavItem } from 'patternfly-react';

const EditorRadioButton = ({
  stateView,
  btnView,
  title,
  onClick,
  icon,
  disabled,
}) => (
  <NavItem
    disabled={disabled}
    active={stateView === btnView}
    id={`${btnView}-navitem`}
    onClick={onClick}
  >
    {icon && <Icon type={icon.type} name={icon.name} />}
    {icon ? ` ${title}` : title}
  </NavItem>
);

EditorRadioButton.propTypes = {
  stateView: PropTypes.string.isRequired,
  btnView: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
};

EditorRadioButton.defaultProps = {
  icon: null,
  disabled: false,
};

export default EditorRadioButton;
