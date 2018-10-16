import React from 'react';
import { Modal, Icon } from 'patternfly-react';
import PropTypes from 'prop-types';

import EditorView from './EditorView';

const EditorModal = ({
  changeState, mode, keybind, theme, showModal, name, editorValue, readOnly,
}) => (
  <Modal show={showModal} onHide={() => changeState('showModal', false)} className="editor-modal">
    <Modal.Header className={theme.toLowerCase()}>
      <button
        className="close"
        onClick={() => changeState('showModal', false)}
        aria-hidden="true"
        aria-label="Close"
      >
        <Icon type="pf" name="close" />
      </button>
    </Modal.Header>
    <Modal.Body>
    <EditorView
          value={editorValue}
          name={name}
          mode={mode.toLowerCase()}
          theme={theme.toLowerCase()}
          keyBinding={keybind.toLowerCase()}
          onChange={(value, event) => changeState('value', value)}
          readOnly={readOnly}
          className="editor ace_editor_modal"
        />
    </Modal.Body>
  </Modal>
);

EditorModal.propTypes = {
  changeState: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  keybind: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default EditorModal;
