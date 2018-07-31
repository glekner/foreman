import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './LayoutActions';
import reducer from './LayoutReducer';
import { patternflyMenuItemsSelector } from './LayoutSelectors';

import Layout from './Layout';

// map state to props
const mapStateToProps = state => ({
  items: patternflyMenuItemsSelector(state),
  isLoading: state.layout.isLoading,
  activeMenu: state.layout.activeMenu,
  currentOrganization: state.layout.currentOrganization,
  currentLocation: state.layout.currentLocation,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { layout: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
