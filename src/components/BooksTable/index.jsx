import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { getBooks, getTotalCount } from '../Home/selectors';
import { useHistory } from 'react-router-dom';
import TablePagination from "@material-ui/core/TablePagination";

export default function BooksTable(props) {
  const { onChangeRowsPerPage, rowsPerPage, currentPage, onChangePage } = props;
  const [page, setPage] = useState(currentPage);
  const history = useHistory();
  const books = useSelector(getBooks);
  const totalCount = useSelector(getTotalCount);

  useEffect(() => {
    history.push(`/${page + 1}`)
  }, [page])

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Book title', field: 'book_title' },
          { title: 'Author', field: 'book_author' },
          { title: 'Pages', field: 'book_pages', type: 'numeric' },
          { title: 'Publication Year', field: 'book_publication_year', type: 'numeric' },
          { title: 'Publication Country', field: 'book_publication_country' },
          { title: 'Publication City', field: 'book_publication_city' }
        ]}
        data={books}
        title=""
        onChangeRowsPerPage={onChangeRowsPerPage}
        components={{
          Pagination: paginationProps => (
            <TablePagination 
              {...paginationProps}
              onChangePage={(_, nextPage) => setPage(nextPage)}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          )
        }}
      />
    </div>
  )
};