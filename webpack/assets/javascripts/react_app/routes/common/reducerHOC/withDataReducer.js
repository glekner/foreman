import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isLoading: true,
  isFetching: false,
  hasError: false,
  hasData: false,
  message: { type: 'empty', text: '' },
});

const withDataReducer = controller => (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case `${controller}_DATA_PENDING`:
      return state.set('isFetching', true);

    case `${controller}_DATA_RESOLVED`:
      return state.merge({ ...payload, isFetching: false });

    case `${controller}_DATA_FAILED`:
      return state.merge({ ...payload, isFetching: false, hasError: true });

    case `${controller}_HIDE_LOADING`:
      return state.set('isLoading', false);

    case `${controller}_CLEAR_ERROR`:
      return state.set('hasError', false);

    default:
      return state;
  }
};

export default withDataReducer;
