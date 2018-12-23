import { radioMock } from './DiffContainer.fixtures';
import { testComponentSnapshotsWithFixtures } from '../../common/testHelpers';

import DiffRadioButtons from './DiffRadioButtons';

const fixtures = {
  'render DiffRadioButtons': radioMock,
};

describe('DiffRadioButton', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(DiffRadioButtons, fixtures));
});
