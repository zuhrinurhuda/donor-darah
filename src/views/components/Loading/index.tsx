import React from 'react';

import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
  }),
);

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <CircularProgress />
    </Grid>
  );
}

export default Loading;
