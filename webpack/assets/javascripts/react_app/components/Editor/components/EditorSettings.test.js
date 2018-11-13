import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';
import { noop } from '../../../common/helpers';

import EditorSettings from './EditorSettings';
import { dropdowns } from '../Editor.fixtures';

const fixtures = {
  'renders EditorSettings': {
    ...dropdowns,
    mode: 'Ruby',
    theme: 'Github',
    keyBinding: 'vim',
    changeState: noop,
  },
};

describe('EditorSettings', () =>
  testComponentSnapshotsWithFixtures(EditorSettings, fixtures));
