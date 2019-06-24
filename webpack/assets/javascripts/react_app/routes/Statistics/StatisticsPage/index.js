import { compose } from 'redux';
import { callOnMount } from '../../../common/HOC';
import { withRedux } from '../../common/withRedux';
import withDataReducer from '../../common/reducerHOC/withDataReducer';

import * as actions from './StatisticsPageActions';
import { selectors } from './StatisticsPageSelectors';
import StatisticsPage from './StatisticsPage';

// export reducers
export const reducers = { statisticsPage: withDataReducer('STATISTICS_PAGE') };

// export connected component
export default compose(
  withRedux(selectors, actions),
  callOnMount(({ getStatisticsMeta }) => getStatisticsMeta())
)(StatisticsPage);
