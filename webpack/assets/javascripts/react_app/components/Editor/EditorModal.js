import React from 'react';
import { Modal, Icon } from 'patternfly-react';
import PropTypes from 'prop-types';

import EditorView from './EditorView';
import DiffContainer from '../DiffView/DiffContainer';

const EditorModal = ({
  changeState,
  mode,
  keybind,
  theme,
  showModal,
  name,
  editorValue,
  readOnly,
  template,
  activeRadio,
}) => (
  <Modal show={showModal} onHide={() => changeState('showModal', false)} className="editor-modal">
    <Modal.Header className={`${activeRadio} ${theme.toLowerCase()}`}>
      <button
        className="close"
        onClick={() => changeState('showModal', false)}
        aria-hidden="true"
        aria-label="Close"
      >
        <Icon type="pf" name="close" />
      </button>
    </Modal.Header>
    <Modal.Body className={activeRadio}>
      {activeRadio === 'input' ? (
        <EditorView
          value={editorValue}
          name={name}
          mode={mode}
          theme={theme}
          keyBinding={keybind}
          onChange={(value, event) => changeState('value', value)}
          readOnly={readOnly}
          className="editor ace_editor_modal"
        />
      ) : (
        <DiffContainer oldText={template} newText={editorValue} />
      )}
    </Modal.Body>
  </Modal>
);

EditorModal.propTypes = {
  changeState: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  keybind: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  template: PropTypes.string.isRequired,
  editorValue: PropTypes.string.isRequired,
  activeRadio: PropTypes.string.isRequired,
};

export default EditorModal;
