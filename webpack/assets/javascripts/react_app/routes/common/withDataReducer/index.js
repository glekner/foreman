import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: null,
  isLoading: true,
  hasError: false,
  message: { type: 'empty', text: '' },
});

const withDataReducer = controller => (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case `${controller}_PAGE_DATA_RESOLVED`:
      return state.merge(payload);

    case `${controller}_PAGE_DATA_FAILED`:
      return state.merge(payload);

    case `${controller}_PAGE_HIDE_LOADING`:
      return state.set('isLoading', false);

    default:
      return state;
  }
};

export default withDataReducer;
