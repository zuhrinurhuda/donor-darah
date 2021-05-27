import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
 } from '@material-ui/core';
 import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

const Registration: React.FC<Props> = ({
  open,
  onClose,
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary" autoFocus>
          Tutup
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Registration;
