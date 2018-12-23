import API from '../../API';
import { translate } from '../../common/I18n';

import {
  EDITOR_INITIALIZE,
  EDITOR_CHANGE_STATE,
  EDITOR_IMPORT_FILE,
  EDITOR_REVERT_CHANGES,
  EDITOR_EXEC_PREVIEW,
  EDITOR_MODAL_TOGGLE,
} from './EditorConstants';

export const initializeEditor = props => dispatch => {
  const {
    data: { template, locked, type, hosts },
    readOnly,
    isMasked,
    selectedView,
    isRendering,
    renderedValue,
    showError,
  } = props;

  const initialState = {};

  // initialize after changing editors
  initialState.value = template || '';
  if (readOnly !== locked) {
    if (locked === true) initialState.readOnly = true;
    else initialState.readOnly = false;
  }
  if (isMasked && type === 'templates') initialState.isMasked = false;
  if (selectedView !== 'input') initialState.selectedView = 'input';
  if (isRendering) initialState.isRendering = false;
  if (renderedValue !== '') initialState.renderedValue = '';
  if (showError) initialState.showError = false;

  if (hosts && hosts.length !== 0) {
    initialState.hosts = hosts.map(element => ({
      label: element.host.name,
      value: element.host.id,
    }));
    console.log(initialState.hosts);
  }

  dispatch({
    type: EDITOR_INITIALIZE,
    payload: { initialState },
  });
};

export const changeState = newState => (dispatch, getState) => {
  if (
    // key exists in editor state
    Object.prototype.hasOwnProperty.call(
      getState().editor,
      Object.keys(newState)[0]
    )
  ) {
    dispatch({
      type: EDITOR_CHANGE_STATE,
      payload: {
        newState,
      },
    });
  }
};

export const importFile = e => dispatch => {
  const reader = new FileReader();
  reader.onload = event => {
    dispatch({
      type: EDITOR_IMPORT_FILE,
      payload: {
        value: event.target.result,
      },
    });
  };
  reader.readAsText(e.target.files[0]);
};

export const revertChanges = template => dispatch => {
  dispatch({
    type: EDITOR_REVERT_CHANGES,
    payload: {
      value: template || '',
    },
  });
};

export const previewTemplate = (host, template, url) => dispatch => {
  const params = {
    template,
  };
  if (host != null) {
    /* eslint-disable camelcase */
    params.preview_host_id = host;
  }
  dispatch(changeState({ renderedValue: translate('Rendering...') }));

  API.post(url, params)
    .then(response => {
      dispatch({
        type: EDITOR_EXEC_PREVIEW,
        payload: {
          value: response.data,
        },
      });
    })
    .catch(error => {
      const newState = {
        errorText: translate(error.response.data),
        showError: true,
        renderedValue: translate(
          'Error during rendering, Return to Editor tab.'
        ),
      };
      dispatch({
        type: EDITOR_CHANGE_STATE,
        payload: {
          newState,
        },
      });
    });
};

export const toggleModal = () => ({
  type: EDITOR_MODAL_TOGGLE,
});
