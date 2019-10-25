
import {FETCH_ACTORS_PENDING, FETCH_ACTORS_SUCCESS, FETCH_ACTORS_ERROR,
  FETCH_TOPACTORS_PENDING, FETCH_TOPACTORS_SUCCESS, FETCH_TOPACTORS_ERROR,
  SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR} from '../actions/index'


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
        Født: '',
        Sorting: '',
        SortDirection:'asc',
      },
    error:null
    
    }

  const initialStateTop= {
    pending:false,
    topactors:[],
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

export function topActorsReducer(state = initialStateTop, action) {
  switch(action.type) {
      case FETCH_TOPACTORS_PENDING: 
          return {
              ...state,
              pending: true
          }
      case FETCH_TOPACTORS_SUCCESS:
          return {
              ...state,
              pending: false,
              topactors: action.payload
          }
      case FETCH_TOPACTORS_ERROR:
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
     
      default: 
          return state;
  }
}


export const getActors = state => state.actors;
export const getActorsPending = state => state.pending;
export const getActorsError = state => state.error;

export const getTopActors = state => state.topactors;
export const getTopActorsPending = state => state.pending;
export const getTopActorsError = state => state.error;

export const getSearch = state => state.values;
export const getSearchPending = state => state.pending;
export const getSearchError = state => state.error;

export default actorsReducer & searchReducer;

