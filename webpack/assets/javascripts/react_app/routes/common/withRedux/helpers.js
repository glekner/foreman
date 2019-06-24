import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

export const mapSelectorsToProps = selectors =>
  Object.assign(
    {},
    ...Object.entries(selectors).map(([key, selector]) => ({
      [key]: useSelector(selector),
    }))
  );

export const mapActionsToProps = actions =>
  bindActionCreators(actions, useDispatch());
