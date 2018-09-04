import Immutable from 'seamless-immutable';

import {
  PAGINATION_CHANGE_PER_PAGE,
  PAGINATION_CHANGE_PAGE,
  PAGINATION_RESET,
} from './PaginationConstants';

const initialState = Immutable({
  page: 1,
  perPage: 20,
});

export default (state = initialState, action) => {
  const { payload: { page, perPage } = {}, type } = action;

  switch (type) {
    case PAGINATION_CHANGE_PER_PAGE:
      return state.set('perPage', perPage);

    case PAGINATION_CHANGE_PAGE:
      return state.set('page', page);

    case PAGINATION_RESET:
      return state.merge({ page, perPage });

    default:
      return state;
  }
};
