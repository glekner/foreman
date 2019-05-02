import history from '../../../history';
import API from '../../../API';
import {
  AUDITS_PATH,
  AUDITS_API_PATH,
  AUDITS_PAGE_DATA_RESOLVED,
  AUDITS_PAGE_DATA_FAILED,
  AUDITS_PAGE_HIDE_LOADING,
  AUDITS_PAGE_UPDATE_QUERY,
  AUDITS_PAGE_CLEAR_ERROR,
} from '../constants';
import {
  selectAuditsSelectedPage,
  selectAuditsHasError,
  selectAuditsPerPage,
  selectAuditsSearch,
  selectAuditsIsLoadingPage,
} from './AuditsPageSelectors';
import { stringifyParams, getParams } from '../../../common/urlHelpers';
import { translate as __ } from '../../../common/I18n';

// on didMount or popstatee
export const initializeAudits = () => dispatch => {
  const params = getParams();
  dispatch(fetchAudits(params));
  dispatch(updateQueryParams(params));
  if (!history.action === 'POP') {
    history.replace({
      pathname: AUDITS_PATH,
      search: stringifyParams(params),
    });
  }
};

export const fetchAudits = (
  { page, perPage, searchQuery },
  url = AUDITS_API_PATH
) => (dispatch, getState) => {
  if (selectAuditsHasError(getState()))
    dispatch({
      type: AUDITS_PAGE_CLEAR_ERROR,
    });

  const onRequestSuccess = ({ data: { audits, itemCount } }) => {
    if (selectAuditsIsLoadingPage(getState()))
      dispatch({ type: AUDITS_PAGE_HIDE_LOADING });

    dispatch({
      type: AUDITS_PAGE_DATA_RESOLVED,
      payload: {
        audits,
        hasData: itemCount > 0,
      },
    });
    dispatch({
      type: AUDITS_PAGE_UPDATE_QUERY,
      payload: {
        itemCount,
      },
    });
  };
  const onRequestFail = error => {
    if (selectAuditsIsLoadingPage(getState()))
      dispatch({ type: AUDITS_PAGE_HIDE_LOADING });

    dispatch({
      type: AUDITS_PAGE_DATA_FAILED,
      payload: {
        message: {
          type: 'error',
          text: __(`${error.response.status} ${error.response.statusText}`),
        },
      },
    });
  };
  API.get(
    url,
    {},
    {
      page,
      per_page: perPage,
      search: searchQuery,
    }
  ).then(onRequestSuccess, onRequestFail);
};

export const fetchAndPush = params => (dispatch, getState) => {
  const query = buildQuery(params, getState());
  dispatch(fetchAudits(query));
  dispatch(updateQueryParams(query));
  history.push({
    pathname: AUDITS_PATH,
    search: stringifyParams(query),
  });
};

export const updateQueryParams = query => dispatch =>
  dispatch({
    type: AUDITS_PAGE_UPDATE_QUERY,
    payload: {
      ...query,
    },
  });

const buildQuery = (query, state) => ({
  page: query.page || selectAuditsSelectedPage(state),
  perPage: query.perPage || selectAuditsPerPage(state),
  searchQuery: query.searchQuery || selectAuditsSearch(state),
});
