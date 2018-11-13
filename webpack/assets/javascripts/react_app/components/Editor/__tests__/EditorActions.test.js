import API from '../../../API';
import { testActionSnapshotWithFixtures } from '../../../common/testHelpers';
import {
  initializeEditor,
  changeState,
  importFile,
  revertChanges,
  previewTemplate,
  toggleModal,
} from '../EditorActions';

import { editorOptions, serverRenderResponse } from '../Editor.fixtures';

jest.mock('../../../API');

const runRenderTemplate = serverMock => {
  API.post.mockImplementation(serverMock);

  return previewTemplate(11, '<template />', 'some/url');
};

const runChangeState = newState => dispatch => {
  const getState = () => ({
    editor: {
      value: '',
      renderedValue: '',
      mode: 'Ruby',
      theme: 'Monokai',
      keyBinding: 'Default',
      selectedView: 'input',
      editorName: 'editor',
      isMaximized: false,
      isMasked: false,
      isRendering: false,
      readOnly: false,
    },
  });
  changeState(newState)(dispatch, getState);
};

const e = { target: { files: [new File([new Blob()], 'filename')] } };

const fixtures = {
  'should initializeEditor': () =>
    initializeEditor({
      ...editorOptions,
      isMasked: true,
      selectedView: 'preview',
      isRendering: true,
      ...editorOptions.data,
      locked: true,
      type: 'templates',
      hosts: [
        { host: { id: 2, name: 'host2' } },
        { host: { id: 3, name: 'host3' } },
      ],
    }),

  'should initializeEditor unlocked': () =>
    initializeEditor({
      ...editorOptions,
      renderedValue: 'renderedValue',
      isMasked: true,
      selectedView: 'preview',
      isRendering: true,
      hosts: [
        { host: { id: 2, name: 'host2' } },
        { host: { id: 3, name: 'host3' } },
      ],
    }),

  'should importFile': () => importFile(e),

  'should toggleModal': () => toggleModal(),

  'should change mode to Html': () => runChangeState({ mode: 'Html' }),

  'should not change state': () => runChangeState({ notInState: 'notInState' }),

  'should revertChanges': () => revertChanges('<template />'),

  'should previewTemplate and succeed': () =>
    runRenderTemplate(async () => serverRenderResponse),
  'should previewTemplate and fail': () =>
    runRenderTemplate(async () => {
      throw new Error('some-error');
    }),
};

describe('Editor actions', () => testActionSnapshotWithFixtures(fixtures));
