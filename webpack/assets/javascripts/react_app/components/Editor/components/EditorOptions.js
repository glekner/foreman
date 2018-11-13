/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Icon,
  OverlayTrigger,
  FormControl,
  Tooltip,
} from 'patternfly-react';

import { translate as __ } from '../../../common/I18n';
import { bindMethods } from '../../../common/helpers';
import DiffRadioButtons from '../../DiffView/DiffRadioButtons';
import EditorSettings from './EditorSettings';

class EditorOptions extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['fileDialog']);
    this.fileInput = React.createRef();
  }

  fileDialog() {
    this.fileInput.click();
  }

  render() {
    const {
      showHide,
      isMasked,
      isDiff,
      isRendering,
      diffViewType,
      importFile,
      revertChanges,
      showImport,
      changeState,
      toggleModal,
      selectedView,
      mode,
      modes,
      keyBindings,
      keyBinding,
      theme,
      themes,
      template,
    } = this.props;

    return (
      <div id="editor-dropdowns">
        {selectedView === 'diff' && (
          <DiffRadioButtons
            stateView={diffViewType}
            changeState={viewType => changeState({ diffViewType: viewType })}
          />
        )}

        <h4 id="divider">|</h4>
        {showHide && (
          <OverlayTrigger
            delayShow={500}
            overlay={<Tooltip id="mask-tooltip">{__('Hide Content')}</Tooltip>}
            placement="top"
            trigger={['hover']}
          >
            <Button
              disabled={selectedView !== 'input'}
              className="editor-button"
              id="hide-btn"
              onClick={() => changeState({ isMasked: !isMasked })}
              bsStyle="link"
            >
              <Icon size="lg" type="fa" name={isMasked ? 'eye' : 'eye-slash'} />
            </Button>
          </OverlayTrigger>
        )}
        {isDiff ? ( // fixing tooltip showing sometimes for disabled icon
          <OverlayTrigger
            delayShow={500}
            overlay={
              <Tooltip id="revert-tooltip">
                {__('Revert Local Changes')}
              </Tooltip>
            }
            placement="top"
            trigger={['hover']}
          >
            <Button
              className="editor-button"
              id="undo-btn"
              onClick={() => {
                if (
                  window.confirm(
                    'Are you sure you would like to revert all changes?'
                  )
                ) {
                  revertChanges(template);
                  if (selectedView !== 'input')
                    changeState({ selectedView: 'input' });
                  if (isRendering) changeState({ isRendering: false });
                }
              }}
              bsStyle="link"
            >
              <Icon size="2x" type="pf" name="restart" />
            </Button>
          </OverlayTrigger>
        ) : (
          <Button
            disabled
            className="editor-button"
            id="undo-btn"
            bsStyle="link"
          >
            <Icon size="2x" type="pf" name="restart" />
          </Button>
        )}
        {showImport && (
          <OverlayTrigger
            delayShow={500}
            overlay={<Tooltip id="import-tooltip">{__('Import File')}</Tooltip>}
            placement="top"
            trigger={['hover']}
          >
            <Button
              className="import-button"
              id="import-btn"
              bsStyle="link"
              onClick={() => this.fileDialog()}
            >
              <Icon size="lg" type="pf" name="folder-open" />
              <FormControl
                inputRef={ref => {
                  this.fileInput = ref;
                }}
                className="hidden"
                type="file"
                onChange={importFile}
              />
            </Button>
          </OverlayTrigger>
        )}
        <EditorSettings
          changeState={changeState}
          modes={modes}
          mode={mode}
          keyBindings={keyBindings}
          keyBinding={keyBinding}
          theme={theme}
          themes={themes}
        />
        <OverlayTrigger
          delayShow={500}
          overlay={<Tooltip id="fullscreen-tooltip">{__('Maximize')}</Tooltip>}
          placement="top"
          trigger={['hover']}
        >
          <Button
            className="editor-button"
            id="fullscreen-btn"
            onClick={toggleModal}
            bsStyle="link"
          >
            <Icon size="lg" type="fa" name="arrows-alt" />
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}

EditorOptions.propTypes = {
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  keyBinding: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  themes: PropTypes.array.isRequired,
  keyBindings: PropTypes.array.isRequired,
  template: PropTypes.string,
  changeState: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  revertChanges: PropTypes.func.isRequired,
  importFile: PropTypes.func.isRequired,
  selectedView: PropTypes.string.isRequired,
  showImport: PropTypes.bool.isRequired,
  showHide: PropTypes.bool,
  isMasked: PropTypes.bool.isRequired,
  isDiff: PropTypes.bool.isRequired,
  isRendering: PropTypes.bool.isRequired,
  diffViewType: PropTypes.string.isRequired,
};

EditorOptions.defaultProps = {
  showHide: false,
  template: '',
};

export default EditorOptions;
