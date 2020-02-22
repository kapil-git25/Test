import { combineReducers } from 'redux'

import { user } from './user';
import { planet } from './planets';

export default combineReducers({
   user,
   planet
})