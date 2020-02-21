import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { history } from "../../store"
import { getUser } from "../../actions/user"

import { Alert } from "../common/alert"

const styles = (theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


class SignIn extends React.Component {

  state = {
    uname: '',
    pwd: '',
    loginError: false,
  }

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  _onFormFieldChange = (event) => {
    let formFieldObj = {}
    formFieldObj[event.target.name] = event.target.value
    this.setState(formFieldObj)
  }

  _validateSignIn = () => {
    const { userList } = this.props
    const { uname, pwd } = this.state

    const checkValidUser = _.filter(userList, (users) => (
      users.name === uname &&
      users.birth_year === pwd
    ))
    if (checkValidUser.length) {
      history.push("/search");
    } else {
      this.setState({
        loginError: true
      })
    }
  }

  render () {
    const { classes } = this.props
    const { loginError } = this.state
    return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {loginError && <Alert severity="error">Invalid username/password!</Alert>}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="uname"
            autoComplete="email"
            autoFocus
            onChange={this._onFormFieldChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pwd"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this._onFormFieldChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this._validateSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList:state.user.users,
});

const SignInComp = withStyles(styles)(SignIn);

export default connect(mapStateToProps)(SignInComp);
