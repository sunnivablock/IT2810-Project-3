import {actorsReducer} from '../reducers/reducer'
//import * as types from '../../constants/ActionTypes'

describe('actorsReducer', () => {
  it('should return the initial state', () => {
    expect(actorsReducer(undefined, {})).toEqual(
      {
        
            pending:false,
            actors:[],
            error:null
            
      }
    )
  })})