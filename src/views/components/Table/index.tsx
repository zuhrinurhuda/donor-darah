import React from 'react';
import { Table, TableProps, TableContainer } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import TablePagination from './components/TablePagination';

export type Column = {
  key: string;
  title: React.ReactNode;
  dataIndex: string | string[];
  render?: (row: any, index: number) => React.ReactNode;
  align?: 'left' | 'right' | 'center';
  width?: string;
};

export type SortDirections = 'asc' | 'desc';

type BaseTableProps = TableProps & {
  component?: React.ElementType;
  columns: Column[];
  rows: any;
  onPageChange?: (newPage: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onSortChange?: (orderBy: string, sortDirections: SortDirections) => void;
  limit?: number;
  total?: number;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#CD2F2A',
      '& .MuiTableSortLabel-root, & .MuiTableSortLabel-root.MuiTableSortLabel-active, & .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
        color: '#ffffff',
      },
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    body: {
      '& tr:nth-child(odd)': {
        backgroundColor: '#ffffff',
      },
      '& tr:nth-child(even)': {
        backgroundColor: '#ffeeed',
      },
      '& .MuiTableCell-root': {
        borderBottom: '1px solid #ffeeed',
      },
      '& .MuiTableCell-sizeSmall': {
        padding: '8px 16px',
      },
    },
    pagination: {},
  })
);

const BaseTable: React.FC<BaseTableProps> = ({
  component,
  columns,
  rows,
  total,
  onPageChange,
  onPageSizeChange,
  onSortChange,
  limit,
  size,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={component || 'div'}>
        <Table size={size}>
          <TableHead
            classes={classes}
            onSortChange={onSortChange}
            columns={columns}
          />
          <TableBody
            classes={classes}
            columns={columns}
            rows={rows}
          />
        </Table>
      </TableContainer>
      {onPageChange && onPageSizeChange && total && limit &&(
        <TablePagination
          classes={classes}
          count={total}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          limit={limit}
        />
      )}
    </>
  );
};

export default BaseTable;
