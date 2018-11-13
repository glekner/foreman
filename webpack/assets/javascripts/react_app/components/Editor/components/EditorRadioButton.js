import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon } from 'patternfly-react';

const btnClass = (stateView, btnView) =>
  classNames('editor-button', { active: stateView === btnView });

const EditorRadioButton = ({
  stateView,
  btnView,
  title,
  onClick,
  icon,
  disabled,
}) => (
  <Button
    disabled={disabled}
    className={btnClass(stateView, btnView)}
    id={`${btnView}-btn`}
    onClick={onClick}
    bsStyle={stateView === btnView ? 'primary' : 'default'}
  >
    {icon && <Icon type={icon.type} name={icon.name} />}
    {icon ? ` ${title}` : title}
  </Button>
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
