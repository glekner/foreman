import {
  EDITOR_INITIALIZE,
  EDITOR_CHANGE_STATE,
  EDITOR_IMPORT_FILE,
  EDITOR_REVERT_CHANGES,
  EDITOR_EXEC_PREVIEW,
  EDITOR_MODAL_TOGGLE,
} from '../EditorConstants';

import reducer from '../EditorReducer';

import { testReducerSnapshotWithFixtures } from '../../../common/testHelpers';

const fixtures = {
  'should return the initial state': {},
  'should handle EDITOR_INITIALIZE': {
    action: {
      type: EDITOR_INITIALIZE,
      payload: { initialState: { value: 'newValue' } },
    },
  },
  'should handle EDITOR_CHANGE_STATE': {
    action: {
      type: EDITOR_CHANGE_STATE,
      payload: {
        newState: { value: '</>' },
      },
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
};

describe('Editor reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
