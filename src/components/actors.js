import React, {useEffect} from 'react'

import {fetchActorsPending, fetchActorsSuccess, fetchActorsError} from '../actions/index'

function fetchActors() {
    return dispatch => {
        dispatch(fetchActorsPending());
        fetch('/actors/')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchActorsSuccess(res.actors));
            return res.actors;
        })
        .catch(error => {
            dispatch(fetchActorsError(error));
        })
    }
}

export default fetchActors;