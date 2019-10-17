import actorsReducer from './reducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  reducer: actorsReducer
});
export default rootReducer