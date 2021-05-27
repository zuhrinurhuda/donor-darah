import React from 'react';
import axios from 'axios';

import {
  Box,
  Grid,
  Paper,
  Typography,
 } from '@material-ui/core';
 import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Table, { Column } from 'views/components/Table';
import Loading from 'views/components/Loading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTypography-h1': {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 'unset',
      },
      '& .MuiTypography-body1': {
        fontSize: 14,
      },
      '& .MuiPaper-outlined': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      '& .MuiButton-containedSizeLarge': {
        fontWeight: 600,
      },
      '& a': {
        textDecoration: 'none',
        color: theme.palette.primary.main,
      },
    },
  }),
);

const Registration: React.FC = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const getUsers = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}pendaftaran/`)

      if (response.status === 200) {
        setRows(response.data)
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  const columns: Column[] = [
    {
      key: 'id',
      title: 'No',
      dataIndex: 'id',
      render: (row: any, index: number) => {
        return index + 1;
      },
    },
    {
      key: 'nameComplete',
      title: 'Nama',
      dataIndex: 'nameComplete',
    },
    {
      key: 'mobilePhoneNumber',
      title: 'Telepon',
      dataIndex: 'mobilePhoneNumber',
      render: (row) => {
        return row.mobilePhoneNumber && row.mobilePhoneNumber.replace(row.mobilePhoneNumber.substring(0, 9), "*******");
      },
      width: '100px',
    },
  ];

  if (isLoading) return <Loading />
  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Paper variant="outlined">
          <Box p={2}>
            <Grid container alignItems="center" justify="space-between">
              <Typography variant="h1">
                Calon pendonor:
              </Typography>
              <Typography variant="h1">
                <Box fontWeight={600} component="span">
                  {rows.length}
                </Box>
              </Typography>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Paper variant="outlined">
        <Table
          size="small"
          columns={columns}
          rows={rows}
        />
      </Paper>
    </div>
  )
}

export default Registration;
