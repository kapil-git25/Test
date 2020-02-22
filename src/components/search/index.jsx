import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { withStyles } from '@material-ui/core/styles';

import { history } from "../../store";
import { getPlanets } from "../../actions/planets";


const styles = (theme => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
}));


class Search extends React.Component {

   state = {
      selectedPlanet: [],
   }

   componentWillMount() {
      if (localStorage.getItem('loggedName') === null || localStorage.getItem('loggedName') === undefined) {
         history.push("/");
      }
   }

   componentDidMount() {
      this.props.dispatch(getPlanets());
   }

   _onFormFieldChange = (event) => {

      const { planetsList } = this.props;

      const selectedPlanet = _.filter(planetsList, (planets) => (
         planets.name === event.target.value
      ));

      this.setState({ selectedPlanet: selectedPlanet })
   }

   renderResults() {
      let { selectedPlanet } = this.state;

      if (selectedPlanet.length == 0) {
         return (<div>No Search Results.</div>);
      }

      return (
         <div>
            <p>Name: {selectedPlanet[0].name}</p>
            <p>Rotation Period: {selectedPlanet[0].rotation_period}</p>
            <p>orbital Period: {selectedPlanet[0].orbital_period}</p>
            <p>Diameter: {selectedPlanet[0].diameter}</p>
            <p>Climate: {selectedPlanet[0].climate}</p>
            <p>Gravity: {selectedPlanet[0].gravity}</p>
            <p>Terrain: {selectedPlanet[0].terrain}</p>
            <p>Surface water: {selectedPlanet[0].surface_water}</p>
            <p>Population: {selectedPlanet[0].population}</p>
         </div>
      );

   }

   handleLogout() {
      localStorage.clear();
      history.push("/");
   }

   renderHeader() {
      const uname = localStorage.getItem('loggedName');

      return (
         <div>
            Welcome, {uname} <b><a onClick={this.handleLogout}>Logout</a></b>
         </div >

      );
   }

   render() {
      const { classes, planetsList } = this.props
      return (
         <div className={classes.paper}>
            {this.renderHeader()}
            <div>
               <Autocomplete
                  id="combo-box-demo"
                  options={planetsList}
                  getOptionLabel={option => option.name}
                  defaultValue={planetsList[0]}

                  renderInput={params => (
                     <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="searchBox"
                        label="Search Planets"
                        name="searchBox"

                        autoFocus
                        onChange={this._onFormFieldChange}
                     />
                  )}
               />
            </div>
            {this.renderResults()}
         </div>
      );
   }
}

const mapStateToProps = state => ({
   planetsList: state.planet.planets
});

const SearchComp = withStyles(styles)(Search);

export default connect(mapStateToProps)(SearchComp);
