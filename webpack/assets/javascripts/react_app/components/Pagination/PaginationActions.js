import {
  PAGINATION_CHANGE_PER_PAGE,
  PAGINATION_CHANGE_PAGE,
  PAGINATION_RESET,
} from './PaginationConstants';

import { changeQuery } from './PaginationHelper';


export const changePage = page => (dispatch) => {
  dispatch({
    type: PAGINATION_CHANGE_PAGE,
    payload: {
      page,
    },
  });
  changeQuery({ page });
};


export const changePerPage = perPage => (dispatch) => {
  dispatch({
    type: PAGINATION_CHANGE_PER_PAGE,
    payload: {
      perPage,
    },
  });
  changeQuery({ per_page: perPage });
};

export const resetComponent = (page, perPage) => (dispatch) => {
  dispatch({
    type: PAGINATION_RESET,
    payload: {
      page,
      perPage,
    },
  });
};
