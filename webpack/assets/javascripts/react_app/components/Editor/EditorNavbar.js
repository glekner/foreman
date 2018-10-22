import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, Button, Dropdown, MenuItem, Icon } from 'patternfly-react';


const EditorNavbar = ({
  mode,
  theme,
  keyBinding,
  modes,
  themes,
  keyBindings,
  changeState,
  importFile,
  activeRadio,
  isDiff,
}) => (
  <div className="navbar navbar-form navbar-full-width navbar-editor">
    <ButtonGroup>
      <Button
        className={activeRadio === 'input' ? 'diff-button active' : 'diff-button'}
        id="input-btn"
        onClick={() => changeState('activeRadio', 'input')}
        bsStyle={activeRadio === 'input' ? 'primary' : 'default'}
      >
        Input
      </Button>
      <Button
        disabled={isDiff}
        className={activeRadio === 'diff' ? 'diff-button active' : 'diff-button'}
        id="diff-btn"
        onClick={() => changeState('activeRadio', 'diff')}
        bsStyle={activeRadio === 'diff' ? 'primary' : 'default'}
      >
        Diff
      </Button>
    </ButtonGroup>
    <div id="editor-dropdowns">
      <Dropdown id="mode-dropdown">
        <Dropdown.Toggle bsStyle="link">{mode}</Dropdown.Toggle>
        <Dropdown.Menu id="editor-dropdowns">
          <li className="dropdown-header">SYNTAX</li>
          <MenuItem divider />
          {modes.map((aceMode, i) => (
            <MenuItem key={i} onClick={() => changeState('mode', aceMode)}>
              {aceMode}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown id="keybindings-dropdown">
        <Dropdown.Toggle bsStyle="link">{keyBinding}</Dropdown.Toggle>
        <Dropdown.Menu id="editor-dropdowns">
          <li className="dropdown-header">KEYBIND</li>
          <MenuItem divider />
          {keyBindings.map((keyBind, i) => (
            <MenuItem key={i} onClick={() => changeState('keyBinding', keyBind)}>
              {keyBind}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown id="themes-dropdown">
        <Dropdown.Toggle bsStyle="link">{theme}</Dropdown.Toggle>
        <Dropdown.Menu id="editor-dropdowns">
          <li className="dropdown-header">THEME</li>
          <MenuItem divider />
          {themes.map((themeKey, i) => (
            <MenuItem key={i} onClick={() => changeState('theme', themeKey)}>
              {themeKey}
            </MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button
        className='diff-button'
        id="import-btn"
        // onClick={() => changeState('showModal', true)}
        bsStyle='link'
      >
      <Icon size="lg" type="fa" name ="download" />
      </Button>
      <Button
        className='diff-button'
        id="fullscreen-btn"
        onClick={() => changeState('showModal', true)}
        bsStyle='link'
      >
      <Icon size="lg" type="fa" name ="arrows-alt" />
      </Button>
    </div>
  </div>
);

EditorNavbar.propTypes = {
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  keyBinding: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  themes: PropTypes.array.isRequired,
  keyBindings: PropTypes.array.isRequired,
  changeState: PropTypes.func.isRequired,
  importFile: PropTypes.func.isRequired,
  activeRadio: PropTypes.string.isRequired,
};

export default EditorNavbar;
