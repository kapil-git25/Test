import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';


const initialState = {
   visibilityFilter: VisibilityFilters.SHOW_ALL,
   testAppValues: []
}

function testApp(state = initialState, action) {
   switch (action.type) {
      case SET_VISIBILITY_FILTER:
         return Object.assign({}, state, { visibilityFilter: action.VisibilityFilters });
      default:
         return state;
   }
}

export default testApp;