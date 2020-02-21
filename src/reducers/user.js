import {
    GET_USER_REQUEST,
    GET_USER_RECEIVE,
    GET_USER_FAILED,
  } from '../actions/user';
  
  const initialState = {
    apiStatus: 'done',
    users:[],
  };
  
  export const user = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
      return {...state,apiStatus:'loading'}
      case GET_USER_RECEIVE:
      return {...state,users:action.payload, apiStatus: 'done'}
      case GET_USER_FAILED:
      return {...state, apiStatus: 'failed'}
      default:
        return state
    }
  }
  