import {actorsReducer, topActorsReducer, searchReducer} from './reducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  actors: actorsReducer,
  topactors: topActorsReducer,
  values: searchReducer
});
export default rootReducer