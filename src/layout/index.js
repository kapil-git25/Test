import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar, Box, Button, CssBaseline, Container, Typography, Link, Toolbar, IconButton, } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import styles from './layoutStyle'

import { history } from "../store"


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#40546E",
      main: '#041f41',
      dark: "#17304F",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#DD1385',
    },
  },
  radio: {
    '&$checked': {
      color: '#DD1385'
    }
  },
});

class Layout extends React.Component {

  _clearTempSession = () => {
    localStorage.setItem('loggedName', "");
    history.push("/");
  }

  _getWelcomeMsg = (name) => (
    <Typography variant="h6" className={this.props.classes.title}>
        {`Welcome ${name}`}
    </Typography>
  )

  _renderHeader = () => {
    const { classes } = this.props;
    const getLoggedInInfo = localStorage.getItem('loggedName')
    console.log("getLoggedInInfo", getLoggedInInfo)
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {getLoggedInInfo && this._getWelcomeMsg(getLoggedInInfo)}
          {getLoggedInInfo && <Button color="inherit" onClick={this._clearTempSession}>Logout</Button>}
        </Toolbar>
      </AppBar>
    )
  }

  _footerContent = () => {
    return (
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Altimetrik
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    );
  }
  
  render() {

    const { classes } = this.props;
    const getLoggedInInfo = localStorage.getItem('loggedName')

    return (
      <ThemeProvider theme={theme}>
        {this._renderHeader()}
        <Container component="main" maxWidth={!getLoggedInInfo ? "xs" : "lg"}>
          <CssBaseline />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              {React.cloneElement(this.props.children)}
          </main>
          {this._footerContent()}
        </Container>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

const LayoutComp = withStyles(styles)(Layout);


export default LayoutComp;
