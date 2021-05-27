import React from 'react';

import {
  AppBar,
  Grid,
  Toolbar,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import alIman from 'assets/images/al-iman.png'
import ipmi from 'assets/images/ipmi.png'
import pmi from 'assets/images/pmi.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 444,
      margin: '0 auto',
      backgroundColor: '#ffffff',
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Grid item>
            <a href="https://alimannarogong.info/">
              <img src={alIman} alt="al-iman" height={40} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://alimannarogong.info/ipmi/">
              <img src={ipmi} alt="ipmi" height={32} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://pmi.or.id/">
              <img src={pmi} alt="pmi" height={32} />
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header;