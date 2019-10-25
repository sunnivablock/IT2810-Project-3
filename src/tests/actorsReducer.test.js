import {actorsReducer} from '../reducers/reducer'
import * as types from '../actions/index'


describe('actorsReducer', () => {
  it('should return the initial state', () => {
    expect(actorsReducer(undefined, {})).toEqual(
      {
        
            pending:false,
            actors:[],
            error:null
            
      }
    )
  })
})

it('should handle FETCH_ACTORS_PENDING', () => {
  expect(
    actorsReducer([], {

      type: types.FETCH_ACTORS_PENDING,
      pending:true,
      
    })
  ).toEqual(
    {
      pending:true
    }
  )
})

it('should handle FETCH_ACTORS_SUCCESS', () => {
  expect(
    actorsReducer([], {

      type: types.FETCH_ACTORS_SUCCESS,
      pending:false,
      actors: actorsReducer.payload
    })
  ).toEqual(
    {
      pending: false,
      actors: actorsReducer.payload
    }
  )
})

it('should handle FETCH_ACTORS_ERROR', () => {
  expect(
    actorsReducer([], {

      type: types.FETCH_ACTORS_ERROR,
      pending: false,
      error: actorsReducer.error
    })
  ).toEqual(
    {
      pending: false,
      error: undefined
    }
  )
})