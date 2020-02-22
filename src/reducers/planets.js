import {
   GET_PLANETS_REQUEST,
   GET_PLANETS_RECEIVE,
   GET_PLANETS_FAILED,
} from '../actions/planets';

const initialState = {
   apiStatus: 'done',
   planets: []
};

export const planet = (state = initialState, action) => {
   switch (action.type) {
      case GET_PLANETS_REQUEST:
         return { ...state, apiStatus: 'loading' }
      case GET_PLANETS_RECEIVE:
         return { ...state, planets: action.payload, apiStatus: 'done' }
      case GET_PLANETS_FAILED:
         return { ...state, apiStatus: 'failed' }
      default:
         return state
   }
}

