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
} from '../EditorConstants';

import reducer from '../EditorReducer';

import { testReducerSnapshotWithFixtures } from '../../../common/testHelpers';

const fixtures = {
  'should return the initial state': {},
  'should handle EDITOR_INITIALIZE': {
    action: {
      type: EDITOR_INITIALIZE,
      payload: { value: 'newValue' },
    },
  },
  'should handle EDITOR_CHANGE_STATE': {
    action: {
      type: EDITOR_CHANGE_VALUE,
      payload: '< newValue />',
    },
  },
  'should handle EDITOR_IMPORT_FILE': {
    action: {
      type: EDITOR_IMPORT_FILE,
      payload: {
        value: '</>',
      },
    },
  },
  'should handle EDITOR_REVERT_CHANGES': {
    action: {
      type: EDITOR_REVERT_CHANGES,
      payload: {
        value: '</>',
      },
    },
  },
  'should handle EDITOR_EXEC_PREVIEW': {
    action: {
      type: EDITOR_EXEC_PREVIEW,
      payload: {
        renderedValue: '</>',
      },
    },
  },
  'should handle EDITOR_MODAL_TOGGLE': {
    action: {
      type: EDITOR_MODAL_TOGGLE,
    },
  },
  'should handle EDITOR_CHANGE_DIFF_VIEW': {
    action: {
      type: EDITOR_CHANGE_DIFF_VIEW,
      payload: 'unified',
    },
  },
  'should handle EDITOR_SHOW_ERROR': {
    action: {
      type: EDITOR_SHOW_ERROR,
      payload: {
        showError: true,
        errorText: 'error',
        renderedValue: 'error',
      },
    },
  },
  'should handle EDITOR_DISMISS_ERROR': {
    action: {
      type: EDITOR_DISMISS_ERROR,
      payload: { showError: false, errorText: '' },
    },
  },
  'should handle EDITOR_CHANGE_TAB': {
    action: {
      type: EDITOR_CHANGE_TAB,
      payload: 'diff',
    },
  },
  'should handle EDITOR_TOGGLE_MASK': {
    action: {
      type: EDITOR_TOGGLE_MASK,
    },
  },
  'should handle EDITOR_TOGGLE_RENDER_VIEW': {
    action: {
      type: EDITOR_TOGGLE_RENDER_VIEW,
    },
  },
  'should handle EDITOR_CHANGE_SETTING': {
    action: {
      type: EDITOR_CHANGE_SETTING,
      payload: { mode: 'html' },
    },
  },
};

describe('Editor reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
