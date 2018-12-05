import store from './react_app/redux';

import * as diffModalActions from './react_app/components/ConfigReports/DiffModal/DiffModalActions';
import * as deleteModalActions from './react_app/components/DeleteModal/DeleteModalActions';

export const showDiff = log => {
  store.dispatch(
    diffModalActions.createDiff(log.dataset.diff, log.dataset.title)
  );
};

export const deleteModal = model => {
  store.dispatch(
    deleteModalActions.createModal(
      `Delete ${model.id}?`,
      'This cannot be undone',
      'secondary',
      'Delete'
    )
  );
};
