import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CookieConsent from './CookiConsent';
import CookiConsent from '../components/CookiConsent'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
       {'< codflaw />'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const TopFooter = () => {
  const classes = useStyles();

    return(
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>{'< codflaw />'}</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>Services</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>No Cost Service</Paper>
            </Grid>
              <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>About</Paper>
            </Grid>
          </Grid>

        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '80vh',
//   },
paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
},
backgroundColor:{
  background: '#2E3B55'
},
  footer: {
    padding: theme.spacing(3, 2),

    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
      {/* <CookieConsent /> */}
    </div>
  );
}