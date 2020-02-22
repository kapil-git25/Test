import axios from 'axios';

export const GET_PLANETS_REQUEST = "GET_PLANETS_REQUEST"
export const GET_PLANETS_RECEIVE = "GET_PLANETS_RECEIVE"
export const GET_PLANETS_FAILED = "GET_PLANETS_FAILED"

export const GET_PLANETS_SEARCH = "GET_PLANETS_SEARCH"

export const getPlanetRequest = () => ({ type: GET_PLANETS_REQUEST })
export const getPlanetFailed = () => ({ type: GET_PLANETS_FAILED })
export const getPlanetReceive = (response) => ({ type: GET_PLANETS_RECEIVE, payload: response })

export const getPlanets = () => {
   return dispatch => {
      dispatch(getPlanetRequest());
      axios
         .get("https://swapi.co/api/planets/")
         .then(res => {
            dispatch(getPlanetReceive(res.data.results));
         })
         .catch(error => {
            dispatch(getPlanetFailed());
         })
   }
}

