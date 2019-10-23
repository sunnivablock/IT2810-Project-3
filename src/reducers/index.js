import {actorsReducer, searchReducer} from './reducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  actors: actorsReducer,
  values: searchReducer
});
export default rootReducer