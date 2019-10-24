import {actorsReducer, topActorsReducer} from './reducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  actors: actorsReducer,
  topactors: topActorsReducer
});
export default rootReducer