import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import { history } from "../../store";
import { getPlanets } from "../../actions/planets";


const styles = (theme => ({
   root: {
      width: "100%"
   },
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%"
   },
}));


class Search extends React.Component {

   state = {
      selectedPlanet: [],
   }

   componentDidMount() {
      if (!localStorage.getItem('loggedName')) {
         history.push("/");
      }
      else {
         this.props.dispatch(getPlanets());
      }
   }

   _onFormFieldChange = (event, value) => {

      const { planetsList } = this.props;

      const selectedPlanet = _.filter(planetsList, (planets) => (
         planets.name === value
      ));

      this.setState({ selectedPlanet: selectedPlanet })
   }

   _renderSearchResults = ({classes, selectedPlanet}) => (
      <React.Fragment>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
            {selectedPlanet[0].name}
         </Typography>
         <Typography variant="h5" component="h2">
            Population: {selectedPlanet[0].population}
         </Typography>
         <Typography className={classes.pos} color="textSecondary">
            Rotation Period: {selectedPlanet[0].rotation_period}
         </Typography>
         <Typography variant="body2" component="p">
            orbital Period: {selectedPlanet[0].orbital_period}
         </Typography>
         <Typography variant="body2" component="p">
            Diameter: {selectedPlanet[0].diameter}
         </Typography>
         <Typography variant="body2" component="p">
            Climate: {selectedPlanet[0].climate}
         </Typography>
         <Typography variant="body2" component="p">
            Gravity: {selectedPlanet[0].gravity}
         </Typography>
         <Typography variant="body2" component="p">
            Terrain: {selectedPlanet[0].terrain}
         </Typography>
         <Typography variant="body2" component="p">
            Surface water: {selectedPlanet[0].surface_water}
         </Typography>
      </React.Fragment>
   )

   _renderNoResults = () => (
      <Typography variant="body2" component="p">
         No Search Results...
      </Typography>
   )

   _renderResults() {
      const { selectedPlanet } = this.state;
      const { classes } = this.props

      return (
         <Card className={classes.root}>
            <CardContent>
               {selectedPlanet.length === 0 ? this._renderNoResults() : this._renderSearchResults({classes, selectedPlanet})}
            </CardContent>
         </Card>
      );

   }

   render() {
      const { classes, planetsList } = this.props
      return (
         <div className={classes.paper}>
            <Autocomplete
               id="combo-box-demo"
               name="combo-box-demo"
               options={planetsList}
               className={classes.root}
               getOptionLabel={option => option.name}
               onInputChange={(event, value) => {
                  this._onFormFieldChange(event, value)
               }}
               renderInput={params => (
                  <TextField
                     {...params} 
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     id="searchBox"
                     label="Search Planets"
                     name="searchBox"
                     autoFocus
                     //onChange={this._onFormFieldChange}
                  />
               )}
            />
            {this._renderResults()}
         </div>
      );
   }
}

const mapStateToProps = state => ({
   planetsList: state.planet.planets
});

const SearchComp = withStyles(styles)(Search);

export default connect(mapStateToProps)(SearchComp);
