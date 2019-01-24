import React from 'react';
import PropTypes from 'prop-types';
import { Nav, TypeAheadSelect } from 'patternfly-react';
import { translate as __ } from '../../../common/I18n';
import { bindMethods } from '../../../common/helpers';

import EditorRadioButton from './EditorRadioButton';
import EditorOptions from './EditorOptions';

class EditorNavbar extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['renderHost']);
  }
  renderHost(selectedHosts) {
    const { hosts, previewTemplate, value, renderPath } = this.props;
    if (selectedHosts.length !== 0) {
      previewTemplate(hosts[selectedHosts[0]], value, renderPath);
    }
  }
  render() {
    const {
      changeDiffViewType,
      changeSetting,
      changeTab,
      diffViewType,
      hosts,
      importFile,
      isDiff,
      isMasked,
      isRendering,
      keyBinding,
      keyBindings,
      mode,
      modes,
      previewTemplate,
      renderPath,
      revertChanges,
      selectedView,
      showHide,
      showImport,
      showPreview,
      template,
      theme,
      themes,
      toggleMaskValue,
      toggleModal,
      toggleRenderView,
      value,
    } = this.props;

    return (
      <div className="navbar navbar-form navbar-full-width navbar-editor">
        <Nav className="nav nav-tabs nav-tabs-pf nav-tabs-pf-secondary">
          <EditorRadioButton
            stateView={selectedView}
            btnView="input"
            title={__('Editor')}
            onClick={() => {
              if (selectedView !== 'input') {
                if (isRendering) toggleRenderView();
                changeTab('input');
              }
            }}
          />
          <EditorRadioButton
            stateView={selectedView}
            disabled={!isDiff}
            btnView="diff"
            title={__('Changes')}
            onClick={() => {
              if (selectedView !== 'diff') {
                changeTab('diff');
              }
            }}
          />
          {showPreview && (
            <React.Fragment>
              <EditorRadioButton
                stateView={selectedView}
                btnView="preview"
                title={__('Preview')}
                onClick={() => {
                  if (selectedView !== 'preview') {
                    if (!isRendering) toggleRenderView();
                    changeTab('preview');
                  }
                }}
              />

              <TypeAheadSelect
                key="previewTypeAhead"
                align="justify"
                clearButton
                options={Object.keys(hosts)}
                onChange={this.renderHost}
                labelKey="host"
                placeholder={__('Pick a Host...')}
                className={
                  selectedView === 'preview' ? 'preview_type_ahead' : 'hidden'
                }
              />
            </React.Fragment>
          )}
        </Nav>
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
          changeDiffViewType={changeDiffViewType}
          toggleMaskValue={toggleMaskValue}
          changeSetting={changeSetting}
          changeTab={changeTab}
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
  }
}

EditorNavbar.propTypes = {
  changeDiffViewType: PropTypes.func.isRequired,
  changeSetting: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  diffViewType: PropTypes.string.isRequired,
  hosts: PropTypes.object,
  importFile: PropTypes.func.isRequired,
  isDiff: PropTypes.bool.isRequired,
  isMasked: PropTypes.bool.isRequired,
  isRendering: PropTypes.bool.isRequired,
  keyBinding: PropTypes.string.isRequired,
  keyBindings: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  previewTemplate: PropTypes.func.isRequired,
  renderPath: PropTypes.string,
  revertChanges: PropTypes.func.isRequired,
  selectedView: PropTypes.string.isRequired,
  showHide: PropTypes.bool,
  showImport: PropTypes.bool.isRequired,
  showPreview: PropTypes.bool.isRequired,
  template: PropTypes.string,
  theme: PropTypes.string.isRequired,
  themes: PropTypes.array.isRequired,
  toggleMaskValue: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleRenderView: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

EditorNavbar.defaultProps = {
  hosts: {},
  renderPath: '',
  showHide: false,
  template: '',
};

export default EditorNavbar;
