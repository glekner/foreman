import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './EditorActions';
import reducer from './EditorReducer';

import Editor from './components';

// map state to props
const mapStateToProps = ({ editor }) => ({
  value: editor.value,
  hosts: editor.hosts,
  renderedValue: editor.renderedValue,
  errorText: editor.errorText,
  mode: editor.mode,
  theme: editor.theme,
  keyBinding: editor.keyBinding,
  selectedView: editor.selectedView,
  editorName: editor.editorName,
  diffViewType: editor.diffViewType,
  isMaximized: editor.isMaximized,
  isMasked: editor.isMasked,
  isRendering: editor.isRendering,
  readOnly: editor.readOnly,
  showError: editor.showError,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { editor: reducer };

// export connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
