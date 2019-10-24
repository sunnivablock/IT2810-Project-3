


export const FETCH_ACTORS_PENDING = 'FETCH_ACTORS_PENDING';
export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const FETCH_ACTORS_ERROR = 'FETCH_ACTORS_ERROR';

export const SEARCH_PENDING = 'SEARCH_PENDING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';


export function fetchActorsPending() {
    return {
        type: FETCH_ACTORS_PENDING
    }
}

export function fetchActorsSuccess(actors) {
    return {
        type: FETCH_ACTORS_SUCCESS,
        payload: actors
    }
}

export function fetchActorsError(error) {
    return {
        type: FETCH_ACTORS_ERROR,
        error: error
    }
}

export function SearchPending() {
    return {
        type: SEARCH_PENDING
    }
}

export function SearchSuccess( values) {
    return {
        type: SEARCH_SUCCESS,
        payload: values
    }
}

export function SearchError(error) {
    return {
        type: SEARCH_ERROR,
        error: error
    }
}

