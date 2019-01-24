import Immutable from 'seamless-immutable';

import {
  EDITOR_CHANGE_DIFF_VIEW,
  EDITOR_CHANGE_SETTING,
  EDITOR_CHANGE_TAB,
  EDITOR_CHANGE_VALUE,
  EDITOR_DISMISS_ERROR,
  EDITOR_SHOW_ERROR,
  EDITOR_EXEC_PREVIEW,
  EDITOR_IMPORT_FILE,
  EDITOR_INITIALIZE,
  EDITOR_MODAL_TOGGLE,
  EDITOR_REVERT_CHANGES,
  EDITOR_TOGGLE_MASK,
  EDITOR_TOGGLE_RENDER_VIEW,
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
      return state.set('renderedValue', payload.renderedValue);
    }

    case EDITOR_MODAL_TOGGLE: {
      return state.set('isMaximized', !state.isMaximized);
    }

    case EDITOR_CHANGE_DIFF_VIEW: {
      return state.set('diffViewType', payload);
    }

    case EDITOR_CHANGE_VALUE: {
      return state.set('value', payload);
    }

    case EDITOR_SHOW_ERROR: {
      return state.merge(payload);
    }

    case EDITOR_DISMISS_ERROR: {
      return state.merge(payload);
    }

    case EDITOR_CHANGE_TAB: {
      return state.set('selectedView', payload);
    }

    case EDITOR_CHANGE_SETTING: {
      return state.merge(payload);
    }

    case EDITOR_TOGGLE_MASK: {
      return state.set('isMasked', !state.isMasked);
    }

    case EDITOR_TOGGLE_RENDER_VIEW: {
      return state.set('isRendering', !state.isRendering);
    }

    default:
      return state;
  }
};
