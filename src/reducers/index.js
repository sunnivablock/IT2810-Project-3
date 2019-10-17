import actorsReducer from './reducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  actors: actorsReducer
});
export default rootReducer