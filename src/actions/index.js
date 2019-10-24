


export const FETCH_ACTORS_PENDING = 'FETCH_ACTORS_PENDING';
export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const FETCH_ACTORS_ERROR = 'FETCH_ACTORS_ERROR';
export const FETCH_TOPACTORS_PENDING = 'FETCH_TOPACTORS_PENDING';
export const FETCH_TOPACTORS_SUCCESS = 'FETCH_TOPACTORS_SUCCESS';
export const FETCH_TOPACTORS_ERROR = 'FETCH_TOPACTORS_ERROR';
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


export function fetchTopActorsPending() {
    return {
        type: FETCH_TOPACTORS_PENDING
    }
}

export function fetchTopActorsSuccess(topactors) {
    return {
        type: FETCH_TOPACTORS_SUCCESS,
        payload: topactors
    }
}

export function fetchTopActorsError(error) {
    return {
        type: FETCH_TOPACTORS_ERROR,
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


