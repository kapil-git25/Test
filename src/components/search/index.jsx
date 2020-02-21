import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = (theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


class Search extends React.Component {

  render () {
    const { classes } = this.props
    return (
      <div className={classes.paper}>
        Hello Login successfully!!!
      </div>
    );
  }
}

const SearchComp = withStyles(styles)(Search);

export default SearchComp;
