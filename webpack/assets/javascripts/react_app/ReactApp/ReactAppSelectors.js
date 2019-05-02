export const selectReactApp = state => state.app;
export const selectReactAppMetadata = state => selectReactApp(state).metadata;

export const selectReactAppDocUrl = state =>
  selectReactAppMetadata(state).docUrl;
export const selectReactAppPerPageOptions = state =>
  selectReactAppMetadata(state).perPageOptions;
