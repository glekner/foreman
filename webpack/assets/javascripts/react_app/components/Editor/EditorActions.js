import API from '../../API';
import { translate as __ } from '../../common/I18n';

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

export const initializeEditor = initializeData => dispatch => {
  const {
    template,
    locked,
    type,
    hosts,
    readOnly,
    isMasked,
    selectedView,
    isRendering,
    renderedValue,
    showError,
  } = initializeData;

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
    initialState.hosts = Object.assign(
      {},
      ...hosts.map(element => ({ [element.host.name]: element.host.id }))
    );
  }

  dispatch({
    type: EDITOR_INITIALIZE,
    payload: initialState,
  });
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

  API.post(url, params)
    .then(response => {
      dispatch({
        type: EDITOR_EXEC_PREVIEW,
        payload: {
          renderedValue: response.data,
        },
      });
    })
    .catch(error =>
      dispatch({
        type: EDITOR_SHOW_ERROR,
        payload: {
          showError: true,
          errorText: __(error.response.data),
          renderedValue: __('Error during rendering, Return to Editor tab.'),
        },
      })
    );
};

export const toggleModal = () => ({
  type: EDITOR_MODAL_TOGGLE,
});

export const changeDiffViewType = viewType => dispatch => {
  dispatch({
    type: EDITOR_CHANGE_DIFF_VIEW,
    payload: viewType,
  });
};

export const changeEditorValue = value => dispatch => {
  dispatch({
    type: EDITOR_CHANGE_VALUE,
    payload: value,
  });
};

export const dismissErrorToast = () => dispatch => {
  dispatch({
    type: EDITOR_DISMISS_ERROR,
    payload: { showError: false, errorText: '' },
  });
};

export const changeTab = selectedView => dispatch => {
  dispatch({
    type: EDITOR_CHANGE_TAB,
    payload: selectedView,
  });
};

export const toggleMaskValue = () => ({
  type: EDITOR_TOGGLE_MASK,
});

export const changeSetting = newSetting => dispatch => {
  dispatch({
    type: EDITOR_CHANGE_SETTING,
    payload: newSetting,
  });
};

export const toggleRenderView = isRendering => ({
  type: EDITOR_TOGGLE_RENDER_VIEW,
});
