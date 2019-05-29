import {combineReducers} from 'redux';

import authReducers from './authReducers';
import toursReducers from './toursReducer';

export default combineReducers({
  auth: authReducers,
  tour: toursReducers,
});
