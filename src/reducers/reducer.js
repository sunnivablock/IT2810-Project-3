

import {FETCH_ACTORS_PENDING, FETCH_ACTORS_SUCCESS, FETCH_ACTORS_ERROR} from '../actions/index'



const initialState = {
  pending:false,
  actors:[],
  error:null
  }


  export function actorsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ACTORS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_ACTORS_SUCCESS:
            return {
                ...state,
                pending: false,
                actors: action.payload
            }
        case FETCH_ACTORS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
 

export const getActors = state => state.actors;
export const getActorsPending = state => state.pending;
export const getActorsError = state => state.error;

export default actorsReducer;

 /* export default (state = initialState, action) => {
    switch (action.type) {
      case 'FIND_ACTORS':
        console.log("Found actors!")
        return Object.assign({}, state, {
          actors={
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            profession: this.profession,
            year: this.year,
            rating: this.rating
          }
        })
     
      default:
        return state
    }
  }*/