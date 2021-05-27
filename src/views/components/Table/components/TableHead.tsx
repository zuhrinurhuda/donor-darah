import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';

import { Column, SortDirections, useStyles } from '../index';

type HeadProps = {
  classes: ReturnType<typeof useStyles>;
  onSortChange?: (orderBy: string, sortDirections: SortDirections) => void;
  columns: Column[];
};

const Head = ({ classes, onSortChange, columns }: HeadProps) => {
  const [orderBy, setOrderBy] = React.useState<Column['key'] | ''>(
    onSortChange ? columns[0].key : ''
  );
  const [sortDirections, setSortDirections] = React.useState<SortDirections>(
    'asc'
  );

  /**
   * Trigger sorting
   * Will set local state and callback
   * @param property - Key for sorting
   */
  const createSortHandler = (property: Column['key']) => () => {
    const isAsc = orderBy === property && sortDirections === 'asc';

    setSortDirections(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    // Callback to set orderBy and sortDirections
    onSortChange && onSortChange(property, isAsc ? 'desc' : 'asc');
  };

  return (
    <TableHead className={classes.head}>
      <TableRow>
        {columns.map((column: Column) => (
          <TableCell
            key={column.key}
            sortDirection={orderBy === column.key ? sortDirections : false}
            align={column.align}
          >
            <TableSortLabel
              active={orderBy === column.key}
              direction={orderBy === column.key ? sortDirections : 'asc'}
              onClick={onSortChange && createSortHandler(column.key)}
              hideSortIcon={!onSortChange}
            >
              {column.title}
              {orderBy === column.key ? (
                <span className={classes.visuallyHidden}>
                  {sortDirections === 'desc'
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
