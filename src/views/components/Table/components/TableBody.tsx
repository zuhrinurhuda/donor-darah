import React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

import { Column, useStyles } from '../index';

type BodyProps = {
  classes: ReturnType<typeof useStyles>;
  columns: Column[];
  rows: any;
};

const Body: React.FC<BodyProps> = ({ classes, columns, rows }) => {
  return (
    <TableBody className={classes.body}>
      {rows.map((row: any, index: number) => {
        return (
          <TableRow key={index}>
            {columns.map((column) => {
              if (column.render) {
                return (
                  <TableCell
                    key={index}
                    align={column.align}
                    width={column.width}
                  >
                    {column.render(row, index)}
                  </TableCell>
                );
              } else {
                return (
                  <TableCell
                    key={index}
                    align={column.align}
                    width={column.width}
                  >
                    {Array.isArray(column.dataIndex)
                      ? column.dataIndex.map(
                          (dataIndex) => `${row[dataIndex]} `
                        )
                      : row[column.dataIndex]}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default Body;
