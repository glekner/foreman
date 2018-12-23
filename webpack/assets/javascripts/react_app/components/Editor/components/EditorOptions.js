/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-select/lib/Async';

import {
  Button,
  Icon,
  OverlayTrigger,
  FormControl,
  Popover,
  Tooltip,
  Dropdown,
  MenuItem,
} from 'patternfly-react';

import { translate as __ } from '../../../common/I18n';
import { bindMethods } from '../../../common/helpers';
import DiffRadioButtons from '../../DiffView/DiffRadioButtons';

const cogPopover = data => (
  <Popover placement="bottom" title={__('Settings')} id="popover-settings">
    <div>
      <Dropdown id="mode-dropdown">
        <Dropdown.Toggle bsStyle="link">{data.mode}</Dropdown.Toggle>
        <Dropdown.Menu id="settings-dropdown">
          <li className="dropdown-header">{__('SYNTAX')}</li>
          <MenuItem divider />
          {data.modes.map((aceMode, i) => (
            <MenuItem
              key={i}
              onClick={() => data.changeState({ mode: aceMode })}
            >
              {aceMode}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div>
      <Dropdown id="keybindings-dropdown">
        <Dropdown.Toggle bsStyle="link">{data.keyBinding}</Dropdown.Toggle>
        <Dropdown.Menu id="settings-dropdown">
          <li className="dropdown-header">{__('KEYBIND')}</li>
          <MenuItem divider />
          {data.keyBindings.map((keyBind, i) => (
            <MenuItem
              key={i}
              onClick={() => data.changeState({ keyBinding: keyBind })}
            >
              {keyBind}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div>
      <Dropdown id="themes-dropdown">
        <Dropdown.Toggle bsStyle="link">{data.theme}</Dropdown.Toggle>
        <Dropdown.Menu id="settings-dropdown">
          <li className="dropdown-header">{__('THEME')}</li>
          <MenuItem divider />
          {data.themes.map((themeKey, i) => (
            <MenuItem
              key={i}
              onClick={() => data.changeState({ theme: themeKey })}
            >
              {themeKey}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </Popover>
);

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
      hosts,
      showHide,
      isMasked,
      isDiff,
      diffViewType,
      importFile,
      revertChanges,
      showImport,
      showPreview,
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

    const renderHost = selectedHosts => {
      console.log(selectedHosts);
    };

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        minHeight: 20,
        height: 30,
        marginTop: 2,
      }),
      menu: (provided, state) => ({
        ...provided,
        zIndex: 999,
      }),
    };
    const options = hosts.map(host => ({
      value: host.value,
      label: host.label,
    }));

    console.log(options);

    return (
      <div id="editor-dropdowns">
        {selectedView === 'diff' && (
          <DiffRadioButtons
            stateView={diffViewType}
            changeState={viewType => changeState({ diffViewType: viewType })}
          />
        )}
        {showPreview && (
          <Async
            styles={customStyles}
            isSearchable
            isClearable
            options={options}
            onChange={renderHost}
            onSelectResetsInput={false}
            onBlurResetsInput={false}
            placeholder="Preview a Host..."
            className="preview_select"
          />
        )}
        {/* <h4 id="divider">|</h4> */}
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
        <OverlayTrigger
          overlay={cogPopover({
            mode,
            modes,
            changeState,
            keyBindings,
            keyBinding,
            theme,
            themes,
          })}
          placement="bottom"
          trigger={['click']}
          rootClose
        >
          <Button className="editor-button" id="cog-btn" bsStyle="link">
            <Icon size="lg" name="cog" />
          </Button>
        </OverlayTrigger>
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
  hosts: PropTypes.array.isRequired,
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
  showPreview: PropTypes.bool.isRequired,
  showHide: PropTypes.bool,
  isMasked: PropTypes.bool.isRequired,
  isDiff: PropTypes.bool.isRequired,
  diffViewType: PropTypes.string.isRequired,
};

EditorOptions.defaultProps = {
  showHide: false,
  template: '',
};

export default EditorOptions;
