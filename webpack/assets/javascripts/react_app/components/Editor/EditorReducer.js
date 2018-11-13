import Immutable from 'seamless-immutable';

import {
  EDITOR_INITIALIZE,
  EDITOR_CHANGE_STATE,
  EDITOR_IMPORT_FILE,
  EDITOR_REVERT_CHANGES,
  EDITOR_EXEC_PREVIEW,
  EDITOR_MODAL_TOGGLE,
} from './EditorConstants';

const initialState = Immutable({
  value: '',
  hosts: {},
  renderedValue: '',
  errorText: '',
  mode: 'Ruby',
  theme: 'Monokai',
  keyBinding: 'Default',
  selectedView: 'input',
  editorName: 'editor',
  diffViewType: 'split',
  isMaximized: false,
  isMasked: false,
  isRendering: false,
  readOnly: false,
  showError: false,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case EDITOR_CHANGE_STATE: {
      return state.merge(payload.newState);
    }

    case EDITOR_INITIALIZE: {
      return state.merge(payload);
    }

    case EDITOR_REVERT_CHANGES: {
      return state.set('value', payload.value);
    }

    case EDITOR_IMPORT_FILE: {
      return state.set('value', payload.value);
    }

    case EDITOR_EXEC_PREVIEW: {
      return state.set('renderedValue', payload.value);
    }

    case EDITOR_MODAL_TOGGLE: {
      return state.set('isMaximized', !state.isMaximized);
    }

    default:
      return state;
  }
};
