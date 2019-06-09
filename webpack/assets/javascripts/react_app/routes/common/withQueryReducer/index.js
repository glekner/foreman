import Immutable from 'seamless-immutable';

const initialState = Immutable({
  page: 1,
  perPage: 25,
  searchQuery: '',
  itemCount: 0,
});

const withQueryReducer = controller => (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case `${controller}_PAGE_UPDATE_QUERY`:
      return state.merge(payload);

    default:
      return state;
  }
};

export default withQueryReducer;
