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
    } = this.props;

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
              if (selectedView !== 'diff')
                changeState({ selectedView: 'diff' });
              if (isRendering) changeState({ isRendering: false });
            }}
          />
          {showPreview && (
            <React.Fragment>
              <EditorRadioButton
                stateView={selectedView}
                btnView="preview"
                title={__('Preview')}
                onClick={() => {
                  if (selectedView !== 'preview')
                    changeState({ selectedView: 'preview' });
                  if (!isRendering) changeState({ isRendering: true });
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
  }
}

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
