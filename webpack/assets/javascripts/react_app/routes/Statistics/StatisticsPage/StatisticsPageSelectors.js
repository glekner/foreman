export const selectStatisticsPage = state => state.statisticsPage.page;
export const selectStatisticsData = state => state.statisticsPage.data;

export const selectStatisticsCharts = state =>
  selectStatisticsPage(state).charts;
export const selectStatisticsMetadata = state =>
  selectStatisticsData(state).data;
export const selectStatisticsIsLoading = state =>
  selectStatisticsData(state).isLoading;
export const selectStatisticsMessage = state =>
  selectStatisticsData(state).message;
export const selectStatisticsHasError = state =>
  selectStatisticsData(state).hasError;
export const selectStatisticsHasMetadata = state =>
  !!selectStatisticsMetadata(state);
