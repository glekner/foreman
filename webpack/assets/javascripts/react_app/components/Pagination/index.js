import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './PaginationActions';
import reducer from './PaginationReducer';

import Pagination from './Pagination';

// map state to props
const mapStateToProps = ({ pagination }) => ({
  page: pagination.page,
  perPage: pagination.perPage,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { pagination: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
