import React from 'react';
// import PropTypes from 'prop-types';
import { bindMethods } from '../../common/helpers';

import DiffContainer from '../DiffView/DiffContainer';
import EditorView from './EditorView';
import EditorNavbar from './EditorNavbar';
import EditorModal from './EditorModal';
import './editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['changeState', 'importFile']);
    this.state = {
      mode: 'Ruby',
      theme: 'Monokai',
      keyBinding: 'Default',
      activeRadio: 'input',
      showModal: false,
      value: props.data.provisioning_template.template,
      editorName: props.data.provisioning_template.name,
    };
    this.modes = ['Text', 'Json', 'Ruby', 'Html_ruby', 'Sh', 'Xml', 'Yaml'];
    this.keyBindings = ['Default', 'Emacs', 'Vim'];
    this.themes = ['Github', 'Monokai'];
    this.importFileRef = React.createRef();
  }

  changeState(type, newState) {
    this.setState({ [type]: newState });
  }

  importFile(event, file) {
    console.log(event, file);
    this.changeState('value', event.target.result);
  }

  render() {
    const { data } = this.props;
    const {
      mode, theme, keyBinding, activeRadio, showModal, value, editorName,
    } = this.state;
    console.log('data', data);

    const onChange = (editorValue, event) => {
      this.changeState('value', editorValue);
    };

    const isDiff = () => data.provisioning_template.template === value;

    return (
      <div id="editor-container">
        <EditorNavbar
          mode={mode}
          theme={theme}
          keyBinding={keyBinding}
          activeRadio={activeRadio}
          modes={this.modes}
          themes={this.themes}
          keyBindings={this.keyBindings}
          changeState={this.changeState}
          importFile={this.importFile}
          importFileRef={this.importFileRef}
          isDiff={isDiff()}
        />
        {activeRadio === 'input' ? (
          <EditorView
            key="editorView"
            value={value}
            name={editorName}
            mode={mode}
            theme={theme}
            keyBinding={keyBinding}
            onChange={onChange}
            readOnly={data.provisioning_template.locked}
            className="ace_editor_form"
          />
        ) : (
          <DiffContainer oldText={this.props.data.provisioning_template.template} newText={value} />
        )}
        <EditorModal
          key="editorModal"
          changeState={this.changeState}
          name={editorName}
          mode={mode}
          theme={theme}
          keybind={keyBinding}
          readOnly={data.provisioning_template.locked}
          showModal={showModal}
          template={data.provisioning_template.template}
          editorValue={value}
          activeRadio={activeRadio}
        />
      </div>
    );
  }
}

export default Editor;
