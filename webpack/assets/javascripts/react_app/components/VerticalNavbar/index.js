import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './VerticalNavbarActions';
import reducer from './VerticalNavbarReducer';

import VerticalNavbar from './VerticalNavbar';

// map state to props
const mapStateToProps = ({ verticalNavbar }) => ({
  items: verticalNavbar.items,
  isLoading: verticalNavbar.isLoading,
  activeMenu: verticalNavbar.activeMenu,
  currentOrg: verticalNavbar.currentOrg,
  currentLoc: verticalNavbar.currentLoc,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { verticalNavbar: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(VerticalNavbar);
