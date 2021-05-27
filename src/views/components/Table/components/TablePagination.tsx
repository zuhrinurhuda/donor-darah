import React from 'react';
import { TablePagination } from '@material-ui/core';

import { useStyles } from '../index';

type PaginationProps = {
  classes: ReturnType<typeof useStyles>;
  count: number;
  limit: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  classes,
  count,
  onPageChange,
  onPageSizeChange,
  limit,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(limit);

  /**
   * Handle on change page
   * Will set local state and callback
   * @param event - Event handler
   * @param newPage - New page
   */
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);

    // Callback to set offset value
    onPageChange(limit * newPage);
  };

  /**
   * Handle on change page size
   * Will set local state and callback
   * @param event - Event handler
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);

    // Callback to set limit value
    onPageSizeChange(parseInt(event.target.value, 10));
  };

  return (
    <TablePagination
      className={classes.pagination}
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default Pagination;
