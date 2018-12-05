import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './DeleteModalActions';
import reducer from './DeleteModalReducer';

import DeleteModal from './DeleteModal';

// map state to props
const mapStateToProps = ({ deleteModal }) => ({
  isOpen: deleteModal.isOpen,
  title: deleteModal.title,
  primaryContent: deleteModal.primaryContent,
  secondaryContent: deleteModal.secondaryContent,
  primaryActionButtonContent: deleteModal.primaryActionButtonContent,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { deleteModal: reducer };

// export connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
