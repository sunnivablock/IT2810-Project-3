


export const FETCH_ACTORS_PENDING = 'FETCH_ACTORS_PENDING';
export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const FETCH_ACTORS_ERROR = 'FETCH_ACTORS_ERROR';

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