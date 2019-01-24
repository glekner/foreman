import React from 'react';
import PropTypes from 'prop-types';
import { ToastNotification } from 'patternfly-react';

import { noop } from '../../common/helpers';
import DiffView from '../DiffView/DiffView';
import EditorView from './components/EditorView';
import EditorNavbar from './components/EditorNavbar';
import EditorModal from './components/EditorModal';
import {
  EDITOR_THEMES,
  EDITOR_KEYBINDINGS,
  EDITOR_MODES,
} from './EditorConstants';
import './editor.scss';

class Editor extends React.Component {
  componentDidMount() {
    const {
      data: { hosts, locked, template, type },
      initializeEditor,
      isMasked,
      isRendering,
      readOnly,
      renderedValue,
      selectedView,
      showError,
    } = this.props;

    const initializeData = {
      hosts,
      isMasked,
      isRendering,
      locked,
      readOnly,
      renderedValue,
      selectedView,
      showError,
      template,
      type,
    };
    initializeEditor(initializeData);
  }

  render() {
    const {
      data: {
        name,
        renderPath,
        showHide,
        showImport,
        showPreview,
        template,
        title,
      },
      changeDiffViewType,
      changeEditorValue,
      changeSetting,
      changeTab,
      diffViewType,
      dismissErrorToast,
      editorName,
      errorText,
      hosts,
      importFile,
      isMasked,
      isMaximized,
      isRendering,
      keyBinding,
      mode,
      previewTemplate,
      readOnly,
      renderedValue,
      revertChanges,
      selectedView,
      showError,
      theme,
      toggleMaskValue,
      toggleModal,
      toggleRenderView,
      value,
    } = this.props;

    return (
      <div id="editor-container">
        <EditorNavbar
          changeDiffViewType={changeDiffViewType}
          changeTab={changeTab}
          changeSetting={changeSetting}
          modes={EDITOR_MODES}
          themes={EDITOR_THEMES}
          keyBindings={EDITOR_KEYBINDINGS}
          mode={isRendering ? 'Text' : mode}
          theme={theme}
          keyBinding={keyBinding}
          value={value}
          diffViewType={diffViewType}
          template={template}
          selectedView={selectedView}
          isDiff={template ? value !== template : false}
          isMasked={isMasked}
          isRendering={isRendering}
          importFile={importFile}
          showImport={showImport}
          showPreview={showPreview}
          showHide={showHide}
          revertChanges={revertChanges}
          previewTemplate={previewTemplate}
          hosts={hosts}
          renderPath={renderPath}
          toggleMaskValue={toggleMaskValue}
          toggleRenderView={toggleRenderView}
          toggleModal={toggleModal}
        />
        <ToastNotification
          id="preview_error_toast"
          type="error"
          className={showError ? '' : 'hidden'}
          onDismiss={() => dismissErrorToast()}
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
          onChange={isRendering ? noop : changeEditorValue}
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
          changeEditorValue={changeEditorValue}
          changeDiffViewType={changeDiffViewType}
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
  }).isRequired,
  changeDiffViewType: PropTypes.func.isRequired,
  changeEditorValue: PropTypes.func.isRequired,
  changeSetting: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  diffViewType: PropTypes.string.isRequired,
  dismissErrorToast: PropTypes.func.isRequired,
  editorName: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  hosts: PropTypes.object.isRequired,
  importFile: PropTypes.func.isRequired,
  initializeEditor: PropTypes.func.isRequired,
  isMasked: PropTypes.bool.isRequired,
  isMaximized: PropTypes.bool.isRequired,
  isRendering: PropTypes.bool.isRequired,
  keyBinding: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  previewTemplate: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  renderedValue: PropTypes.string.isRequired,
  revertChanges: PropTypes.func.isRequired,
  selectedView: PropTypes.string.isRequired,
  showError: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  toggleMaskValue: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleRenderView: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
