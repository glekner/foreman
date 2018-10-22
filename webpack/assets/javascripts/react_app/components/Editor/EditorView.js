import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
// ['text', 'json', 'ruby', 'html_ruby', 'sh', 'xml', 'yaml'];
import 'brace/mode/ruby';
import 'brace/mode/json';
import 'brace/mode/sh';
import 'brace/mode/xml';
import 'brace/mode/yaml';
import 'brace/mode/diff';

import 'brace/theme/github';
import 'brace/theme/monokai';

import 'brace/keybinding/vim';
import 'brace/keybinding/emacs';

const EditorView = ({
  value, mode, theme, keyBinding, onChange, name, className, readOnly,
}) => (
  <AceEditor
    value={value}
    mode={mode.toLowerCase()}
    theme={theme.toLowerCase()}
    keyboardHandler={keyBinding === 'Default' ? null : keyBinding.toLowerCase()}
    onChange={onChange}
    name={name}
    className={className}
    readOnly={readOnly}
    editorProps={{ $blockScrolling: Infinity }}
    showPrintMargin={false}
  />
);
EditorView.propTypes = {
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  keyBinding: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};
EditorView.defaultProps = {
  value: '</>',
  className: '',
};
export default EditorView;
