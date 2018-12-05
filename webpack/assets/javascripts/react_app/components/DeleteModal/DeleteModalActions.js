import {
  DELETE_MODAL_CREATE,
  DELETE_MODAL_TOGGLE,
} from './DeleteModalConstants';

export const toggleModal = () => ({
  type: DELETE_MODAL_TOGGLE,
});

export const createModal = (
  title,
  primaryContent,
  secondaryContent,
  primaryActionButtonContent
) => dispatch => {
  dispatch({
    type: DELETE_MODAL_CREATE,
    payload: {
      title,
      primaryContent,
      primaryActionButtonContent,
      secondaryContent,
      isOpen: true,
    },
  });
};
