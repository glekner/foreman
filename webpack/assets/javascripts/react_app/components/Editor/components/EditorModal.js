import React from 'react';
import { Modal, Icon, Button } from 'patternfly-react';
import PropTypes from 'prop-types';

import EditorView from './EditorView';
import DiffRadioButtons from '../../DiffView/DiffRadioButtons';
import DiffView from '../../DiffView/DiffView';

const EditorModal = ({
  changeEditorValue,
  changeDiffViewType,
  toggleModal,
  mode,
  keyBinding,
  theme,
  isMaximized,
  name,
  title,
  diffViewType,
  editorValue,
  readOnly,
  template,
  selectedView,
  isMasked,
}) => (
  <Modal show={isMaximized} onHide={toggleModal} className="editor-modal">
    <Modal.Header className={`${selectedView} ${theme.toLowerCase()}`}>
      <h4 id="editor-modal-h4">{title}</h4>
      <Button
        className="close"
        onClick={toggleModal}
        aria-hidden="true"
        aria-label="Close"
        bsStyle="link"
      >
        <Icon type="pf" name="close" />
      </Button>
      {selectedView === 'diff' && (
        <DiffRadioButtons
          stateView={diffViewType}
          changeState={viewType => changeDiffViewType(viewType)}
        />
      )}
    </Modal.Header>
    <Modal.Body className={selectedView}>
      {selectedView === 'diff' ? (
        <div id="diff-table">
          <DiffView
            oldText={template}
            newText={editorValue}
            viewType={diffViewType}
          />
        </div>
      ) : (
        <EditorView
          value={editorValue}
          name={name}
          mode={mode}
          theme={theme}
          keyBinding={keyBinding}
          onChange={changeEditorValue}
          readOnly={readOnly || selectedView === 'preview'}
          className="editor ace_editor_modal"
          isMasked={isMasked}
        />
      )}
    </Modal.Body>
  </Modal>
);

EditorModal.propTypes = {
  changeEditorValue: PropTypes.func.isRequired,
  changeDiffViewType: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  keyBinding: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  isMaximized: PropTypes.bool.isRequired,
  template: PropTypes.string.isRequired,
  editorValue: PropTypes.string.isRequired,
  selectedView: PropTypes.string.isRequired,
  isMasked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  diffViewType: PropTypes.string.isRequired,
};

EditorModal.defaultProps = {
  title: '',
};

export default EditorModal;
