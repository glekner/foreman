import React from 'react';
import Proptypes from 'prop-types';

import { Paginator } from 'patternfly-react';
import { getURIpage, getURIperPage, changeQuery, translatePagination } from './PaginationHelper';
import './pagination.scss';

const Pagination = ({ data }) => {
  const urlPage = getURIpage();
  const urlPerPage = getURIperPage();

  return (
      <Paginator
        pagination={{
          page: urlPage || 1,
          perPage: urlPerPage || data.perPage,
          perPageOptions: data.perPageOptions,
        }}
        viewType={data.viewType}
        itemCount={data.itemCount}
        onPageSet={page => changeQuery({ page })}
        onPerPageSelect={perPage => changeQuery({ per_page: perPage })}
        messages={translatePagination(Paginator.defaultProps.messages)}
      />
  );
};

Pagination.propTypes = {
  data: Proptypes.shape({
    viewType: Proptypes.string,
    perPageOptions: Proptypes.arrayOf(Proptypes.number),
    itemCount: Proptypes.number,
    perPage: Proptypes.number,
  }).isRequired,
};

export default Pagination;
