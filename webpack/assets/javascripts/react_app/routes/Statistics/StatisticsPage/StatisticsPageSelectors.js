export const selectors = {
  statisticsMeta: state => state.statisticsPage.metadata,
  isLoading: state => state.statisticsPage.isLoading,
  message: state => state.statisticsPage.message,
  hasData: state => state.statisticsPage.hasData,
  hasError: state => state.statisticsPage.hasError,
};
