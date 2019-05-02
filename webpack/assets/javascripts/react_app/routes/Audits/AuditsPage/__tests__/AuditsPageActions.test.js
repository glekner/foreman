import API from '../../../../API';

import { testActionSnapshotWithFixtures } from '../../../../common/testHelpers';
import {
  fetchAudits,
  fetchAndPush,
  initializeAudits,
  updateQueryParams,
} from '../AuditsPageActions';
import {
  getMock,
  responseMock,
  emptyResponseMock,
  state as stateMock,
} from '../AuditsPage.fixtures';

jest.mock('../../../../API');

const runWithGetState = (state, action, ...params) => dispatch => {
  const getState = () => ({
    auditsPage: state,
  });
  action(...params)(dispatch, getState);
};

const runFetchAuditsAPI = (state, resourceMock, serverMock) => {
  API.get.mockImplementation(serverMock);

  return runWithGetState(state, fetchAudits, resourceMock);
};

const fixtures = {
  'should fetch Audits': () =>
    runFetchAuditsAPI(stateMock.auditsPage, getMock, async () => responseMock),

  'should fetch empty Audits': () =>
    runFetchAuditsAPI(
      stateMock.auditsPage,
      { ...getMock, searchQuery: 'no-such-audit' },
      async () => emptyResponseMock
    ),

  'should fetch Audits and remove emptyState': () =>
    runFetchAuditsAPI(stateMock.auditsPage, getMock, async () => responseMock),

  'should fetch Audits and fail': () =>
    runFetchAuditsAPI(stateMock.auditsPage, getMock, async () => {
      throw new Error('some-error');
    }),

  'should fetchAndPush': () =>
    runWithGetState(
      {
        ...stateMock.auditsPage,
        query: { page: 1, perPage: 20, searchQuery: 'search' },
      },
      fetchAndPush,
      getMock
    ),
  'should updateQueryParams': () => updateQueryParams({ page: 5 }),
  'should initializeAudits': () =>
    runWithGetState({ searchQuery: 'search' }, initializeAudits, {}),
};

describe('AuditsPage actions', () => testActionSnapshotWithFixtures(fixtures));
