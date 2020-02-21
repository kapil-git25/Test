import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import styles from './layoutStyle'


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
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              {React.cloneElement(this.props.children)}
          </main>
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
