import React from 'react';
import PropTypes from 'prop-types';
import {
  Popover,
  Dropdown,
  MenuItem,
  Button,
  Icon,
  OverlayTrigger,
} from 'patternfly-react';

const EditorSettings = ({
  changeState,
  modes,
  mode,
  keyBindings,
  keyBinding,
  theme,
  themes,
}) => (
  <OverlayTrigger
    overlay={
      <Popover placement="bottom" title={__('Settings')} id="cog-popover">
        <div className="cog-popover-dropdown">
          <div className="cog-popover-dropdown-title">{__('SYNTAX')}</div>
          <Dropdown id="mode-dropdown">
            <Dropdown.Toggle>{mode}</Dropdown.Toggle>
            <Dropdown.Menu id="settings-dropdown">
              {modes.map((aceMode, i) => (
                <MenuItem
                  key={i}
                  onClick={() => changeState({ mode: aceMode })}
                >
                  {aceMode}
                </MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="cog-popover-dropdown">
          <div className="cog-popover-dropdown-title">{__('KEYBIND')}</div>
          <Dropdown id="keybindings-dropdown">
            <Dropdown.Toggle>{keyBinding}</Dropdown.Toggle>
            <Dropdown.Menu id="settings-dropdown">
              {keyBindings.map((keyBind, i) => (
                <MenuItem
                  key={i}
                  onClick={() => changeState({ keyBinding: keyBind })}
                >
                  {keyBind}
                </MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="cog-popover-dropdown">
          <div className="cog-popover-dropdown-title">{__('THEME')}</div>
          <Dropdown id="themes-dropdown">
            <Dropdown.Toggle>{theme}</Dropdown.Toggle>
            <Dropdown.Menu id="settings-dropdown">
              {themes.map((themeKey, i) => (
                <MenuItem
                  key={i}
                  onClick={() => changeState({ theme: themeKey })}
                >
                  {themeKey}
                </MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Popover>
    }
    placement="bottom"
    trigger={['click']}
    rootClose
  >
    <Button className="editor-button" id="cog-btn" bsStyle="link">
      <Icon size="lg" name="cog" />
    </Button>
  </OverlayTrigger>
);

EditorSettings.propTypes = {
  changeState: PropTypes.func.isRequired,
  modes: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  keyBindings: PropTypes.array.isRequired,
  keyBinding: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  themes: PropTypes.array.isRequired,
};
export default EditorSettings;
