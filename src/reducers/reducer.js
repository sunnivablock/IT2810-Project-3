

import {FETCH_ACTORS_PENDING, FETCH_ACTORS_SUCCESS, FETCH_ACTORS_ERROR} from '../actions/index'
import {SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_FIELD} from '../actions/index'


const initialState = {
  pending:false,
  actors:[],
  error:null
  
  }
  const initialStateSearch = {
    pending:false,
    values:{ 
        Rating:'',
        Fornavn: '',
        Etternavn: '',
        Født: ''
      },
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
 
export function searchReducer(state = initialStateSearch, action) {
  switch(action.type) {
      case SEARCH_PENDING: 
          return {
              ...state,
              pending: true
          }
      case SEARCH_SUCCESS:
          return {
              ...state,
              pending: false,
              values: action.payload
          }
      case SEARCH_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      case SEARCH_FIELD:
          return {
              ...state,
              text: action.payload 
            }
      default: 
          return state;
  }
}


export const getActors = state => state.actors;
export const getActorsPending = state => state.pending;
export const getActorsError = state => state.error;
export const getSearch = state => state.values;
export const getSearchPending = state => state.pending;
export const getSearchError = state => state.error;

export default actorsReducer & searchReducer;

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