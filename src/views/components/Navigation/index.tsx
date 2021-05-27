import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  ListAlt as ListAltIcon,
  PersonAdd as PersonAddIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& .MuiBottomNavigationAction-root': {
      maxWidth: 'unset',
    }
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    setValue(history.location.pathname);
  }, [history])

  const handleOnChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleOnChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Pendonor" value="/daftar-pendonor" icon={<ListAltIcon />} />
      <BottomNavigationAction label="Daftar" value="/pendaftaran" icon={<PersonAddIcon />} />
    </BottomNavigation>
  );
}
