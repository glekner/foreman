import { compose, bindActionCreators, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { callOnMount } from '../../../common/HOC';

import * as actions from './StatisticsPageActions';
import charts from './StatisticsPageReducer';
import withDataReducer from '../../common/withDataReducer';
import {
  selectStatisticsMetadata,
  selectStatisticsMessage,
  selectStatisticsIsLoading,
  selectStatisticsHasMetadata,
  selectStatisticsHasError,
  selectStatisticsCharts,
} from './StatisticsPageSelectors';

import StatisticsPage from './StatisticsPage';

// map state to props
const mapStateToProps = state => ({
  statisticsMeta: selectStatisticsMetadata(state),
  charts: selectStatisticsCharts(state),
  isLoading: selectStatisticsIsLoading(state),
  message: selectStatisticsMessage(state),
  hasData: selectStatisticsHasMetadata(state),
  hasError: selectStatisticsHasError(state),
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = {
  statisticsPage: combineReducers({
    page: charts,
    data: withDataReducer('STATISTICS'),
  }),
};

// export connected component
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  callOnMount(({ getStatisticsMeta }) => getStatisticsMeta())
)(StatisticsPage);