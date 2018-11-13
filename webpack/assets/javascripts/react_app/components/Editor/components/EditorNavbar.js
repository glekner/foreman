import React from 'react';
import PropTypes from 'prop-types';
import { Nav, TypeAheadSelect } from 'patternfly-react';
import { translate as __ } from '../../../common/I18n';

import EditorRadioButton from './EditorRadioButton';
import EditorOptions from './EditorOptions';

const EditorNavbar = ({
  value,
  mode,
  hosts,
  renderPath,
  template,
  theme,
  keyBinding,
  modes,
  themes,
  diffViewType,
  keyBindings,
  changeState,
  toggleModal,
  revertChanges,
  showPreview,
  previewTemplate,
  showHide,
  showImport,
  importFile,
  selectedView,
  isDiff,
  isMasked,
  isRendering,
}) => {
  const renderHost = selectedHosts => {
    if (selectedHosts.length !== 0) {
      const newState = {
        selectedView: 'preview',
        isRendering: true,
      }
      changeState(newState);
      previewTemplate(hosts[selectedHosts[0]], value, renderPath);
    }
  };

  return (
    <div className="navbar navbar-form navbar-full-width navbar-editor">
      <Nav className="nav nav-tabs nav-tabs-pf nav-tabs-pf-secondary">
        <EditorRadioButton
          stateView={selectedView}
          btnView="input"
          title={__('Editor')}
          onClick={() => {
            if (selectedView !== 'input')
              changeState({ selectedView: 'input' });
            if (isRendering) changeState({ isRendering: false });
          }}
        />

        <EditorRadioButton
          stateView={selectedView}
          disabled={!isDiff}
          btnView="diff"
          title={__('Changes')}
          onClick={() => {
            if (selectedView !== 'diff') changeState({ selectedView: 'diff' });
            if (isRendering) changeState({ isRendering: false });
          }}
        />
      </Nav>
      {showPreview && (
        <TypeAheadSelect
          key="previewTypeAhead"
          align="justify"
          clearButton
          options={Object.keys(hosts)}
          onChange={renderHost}
          labelKey="host"
          placeholder={__('Preview Template...')}
          className="preview_type_ahead"
        />
      )}
      <EditorOptions
        hosts={hosts}
        value={value}
        renderPath={renderPath}
        previewTemplate={previewTemplate}
        showImport={showImport}
        showHide={showHide}
        showPreview={showPreview}
        isDiff={isDiff}
        diffViewType={diffViewType}
        isMasked={isMasked}
        isRendering={isRendering}
        importFile={importFile}
        template={template}
        revertChanges={revertChanges}
        changeState={changeState}
        toggleModal={toggleModal}
        selectedView={selectedView}
        mode={mode}
        modes={modes}
        keyBinding={keyBinding}
        keyBindings={keyBindings}
        theme={theme}
        themes={themes}
      />
    </div>
  );
};

EditorNavbar.propTypes = {
  value: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  template: PropTypes.string,
  keyBinding: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  themes: PropTypes.array.isRequired,
  keyBindings: PropTypes.array.isRequired,
  changeState: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  renderPath: PropTypes.string,
  revertChanges: PropTypes.func.isRequired,
  importFile: PropTypes.func.isRequired,
  previewTemplate: PropTypes.func.isRequired,
  hosts: PropTypes.object,
  selectedView: PropTypes.string.isRequired,
  showPreview: PropTypes.bool.isRequired,
  showImport: PropTypes.bool.isRequired,
  showHide: PropTypes.bool,
  isMasked: PropTypes.bool.isRequired,
  isDiff: PropTypes.bool.isRequired,
  isRendering: PropTypes.bool.isRequired,
  diffViewType: PropTypes.string.isRequired,
};

EditorNavbar.defaultProps = {
  showHide: false,
  template: '',
  hosts: {},
  renderPath: '',
};

export default EditorNavbar;
