import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import routes from "routes";
import Header from 'views/components/Header';
import Footer from 'views/components/Footer';
import backgroundImage from 'assets/images/blood-donation-pattern.jpeg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 'calc(100vh - 112px)',
      backgroundImage: `url(${backgroundImage})`,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(7),
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
    spinner: {
      color: '#ffffff',
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.root}>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*">
          <Redirect to="/pendaftaran" />
        </Route>
      </Container>
      <Footer />
    </>
  );
}

export default App;
