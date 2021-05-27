import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import Navigation from 'views/components/Navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: 0,
      backgroundColor: '#ffffff',
      width: 444,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.root}>
      <Toolbar>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;