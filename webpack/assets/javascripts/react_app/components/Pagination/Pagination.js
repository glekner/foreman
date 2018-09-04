import React from 'react';
import Proptypes from 'prop-types';

import { Paginator } from 'patternfly-react';
import { getURIpage, getURIperPage, translatePagination } from './PaginationHelper';
import './pagination.scss';

class Pagination extends React.Component {
  componentDidMount() {
    const {
      page, perPage, changePage, changePerPage,
    } = this.props;

    const urlPage = getURIpage();
    const urlPerPage = getURIperPage();
    if (urlPage && page !== urlPage) changePage(urlPage);
    if (urlPerPage && perPage !== urlPerPage) changePerPage(urlPerPage);
  }

  componentWillUnmount() {
    console.log('unmounting');
    const {
      page, perPage, data, resetComponent,
    } = this.props;
    if (page !== 1 || perPage !== data.perPage) resetComponent(1, data.perPage);
  }

  render() {
    const {
      data, page, perPage, changePage, changePerPage,
    } = this.props;
    return (
      <Paginator
        pagination={{
          page,
          perPage,
          perPageOptions: data.perPageOptions,
        }}
        viewType={data.viewType}
        itemCount={data.itemCount}
        onPageSet={changePage}
        onPerPageSelect={changePerPage}
        messages={translatePagination(Paginator.defaultProps.messages)}
      />
    );
  }
}

Pagination.propTypes = {
  data: Proptypes.shape({
    viewType: Proptypes.string,
    perPageOptions: Proptypes.arrayOf(Proptypes.number),
    itemCount: Proptypes.number,
    perPage: Proptypes.number,
  }).isRequired,
};

export default Pagination;
