import React from 'react';
import PropTypes from 'prop-types';

import { Icon, MessageDialog } from 'patternfly-react';
import './deletemodal.scss';

const icon = <Icon id="delete-modal-icon" type="pf" name="error-circle-o" />;
const primary = content => <p className="lead">{content}</p>;
const secondary = content => <p>{content}</p>;

const DeleteModal = ({
  isOpen,
  toggleModal,
  primaryAction,
  primaryActionButtonContent,
  title,
  primaryContent,
  secondaryContent,
}) => (
  <MessageDialog
    show={isOpen}
    onHide={toggleModal}
    primaryAction={primaryAction}
    secondaryAction={toggleModal}
    primaryActionButtonContent={primaryActionButtonContent}
    title={title}
    icon={icon}
    primaryContent={primary(primaryContent)}
    secondaryContent={secondary(secondaryContent)}
    secondaryActionButtonContent="Cancel"
    primaryActionButtonBsStyle="danger"
    accessibleName="deleteConfirmationDialog"
    accessibleDescription="deleteConfirmationDialogContent"
  />
);

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  primaryAction: PropTypes.func.isRequired,
  primaryActionButtonContent: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  primaryContent: PropTypes.string.isRequired,
  secondaryContent: PropTypes.string.isRequired,
};

DeleteModal.defaultProps = {};

export default DeleteModal;
