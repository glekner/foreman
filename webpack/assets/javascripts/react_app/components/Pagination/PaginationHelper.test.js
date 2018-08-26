import { Paginator } from 'patternfly-react';

import { translatePagination } from './PaginationHelper';

describe('PaginationHelper', () => {
  it('translatePagination', () => {
    const translated = translatePagination(Paginator.defaultProps.messages);
    expect(translated).toMatchSnapshot();
  });
});

