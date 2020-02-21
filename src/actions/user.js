import axios from 'axios';

export const GET_USER_REQUEST = "GET_USER_REQUEST"
export const GET_USER_RECEIVE = "GET_USER_RECEIVE"
export const GET_USER_FAILED = "GET_USER_FAILED"

export const getUserRequest = () => ({ type: GET_USER_REQUEST })
export const getUserFailed = () => ({ type: GET_USER_FAILED })
export const getUserReceive = (response) => ({ type: GET_USER_RECEIVE, payload: response })

export const getUser = () => {
    return dispatch => {
        dispatch(getUserRequest());
        axios
            .get("https://swapi.co/api/people")
            .then(res => {
                dispatch(getUserReceive(res.data.results));
            })
            .catch(error => {
                dispatch(getUserFailed());
            })
    }
}