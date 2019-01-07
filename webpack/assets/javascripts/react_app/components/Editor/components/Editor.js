import React from 'react';
import PropTypes from 'prop-types';
import { ToastNotification } from 'patternfly-react';

import { noop } from '../../../common/helpers';
import DiffView from '../../DiffView/DiffView';
import EditorView from './EditorView';
import EditorNavbar from './EditorNavbar';
import EditorModal from './EditorModal';
import '../editor.scss';

class Editor extends React.Component {
  componentDidMount() {
    const { initializeEditor } = this.props;
    initializeEditor(this.props);
  }

  render() {
    const {
      data: {
        showHide,
        showImport,
        showPreview,
        template,
        name,
        renderPath,
        options,
        title,
      },
      value,
      hosts,
      mode,
      theme,
      keyBinding,
      selectedView,
      renderedValue,
      editorName,
      diffViewType,
      changeState,
      importFile,
      revertChanges,
      previewTemplate,
      toggleModal,
      readOnly,
      showError,
      errorText,
      isMasked,
      isMaximized,
      isRendering,
    } = this.props;

    return (
      <div id="editor-container">
        <EditorNavbar
          value={value}
          diffViewType={diffViewType}
          template={template}
          mode={isRendering ? 'Text' : mode}
          theme={theme}
          keyBinding={keyBinding}
          selectedView={selectedView}
          modes={options.modes}
          themes={options.themes}
          keyBindings={options.keyBindings}
          changeState={changeState}
          toggleModal={toggleModal}
          showImport={showImport}
          showPreview={showPreview}
          showHide={showHide}
          importFile={importFile}
          revertChanges={revertChanges}
          previewTemplate={previewTemplate}
          hosts={hosts}
          renderPath={renderPath}
          isDiff={template ? value !== template : false}
          isMasked={isMasked}
          isRendering={isRendering}
        />
        <ToastNotification
          id="preview_error_toast"
          type="error"
          className={showError ? '' : 'hidden'}
          onDismiss={() => changeState({ showError: false })}
        >
          {errorText}
        </ToastNotification>
        <EditorView
          key="editorView"
          value={isRendering ? renderedValue : value}
          name={editorName}
          mode={isRendering ? 'Text' : mode}
          theme={theme}
          keyBinding={keyBinding}
          onChange={isRendering ? noop : changeState}
          readOnly={readOnly || isRendering}
          className={selectedView !== 'diff' ? 'ace_editor_form' : 'hidden'}
          isMasked={isMasked}
        />
        <div
          id="diff-table"
          className={selectedView === 'diff' ? '' : 'hidden'}
        >
          <DiffView
            oldText={template || ''}
            newText={value}
            viewType={diffViewType}
          />
        </div>
        <EditorModal
          key="editorModal"
          changeState={changeState}
          name={editorName}
          title={title}
          toggleModal={toggleModal}
          diffViewType={diffViewType}
          mode={isRendering ? 'Text' : mode}
          theme={theme}
          keyBinding={keyBinding}
          readOnly={readOnly}
          isMaximized={isMaximized}
          template={template || ''}
          editorValue={isRendering ? renderedValue : value}
          selectedView={selectedView}
          isMasked={isMasked}
        />
        <textarea className="hidden" name={name} value={value} readOnly />
      </div>
    );
  }
}

Editor.propTypes = {
  data: PropTypes.shape({
    showHide: PropTypes.bool,
    showImport: PropTypes.bool,
    showPreview: PropTypes.bool,
    template: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    renderPath: PropTypes.string,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.string),
      keyBindings: PropTypes.arrayOf(PropTypes.string),
      themes: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }).isRequired,
  changeState: PropTypes.func.isRequired,
  importFile: PropTypes.func.isRequired,
  revertChanges: PropTypes.func.isRequired,
  previewTemplate: PropTypes.func.isRequired,
  initializeEditor: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  renderedValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hosts: PropTypes.object.isRequired,
  editorName: PropTypes.string.isRequired,
  diffViewType: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  keyBinding: PropTypes.string.isRequired,
  selectedView: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  showError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  isMasked: PropTypes.bool.isRequired,
  isMaximized: PropTypes.bool.isRequired,
  isRendering: PropTypes.bool.isRequired,
};

export default Editor;
