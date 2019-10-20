import {fetchActorsPending, fetchActorsSuccess, fetchActorsError} from '../actions/index'

function fetchActors(url) {
    return dispatch => {
        dispatch(fetchActorsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchActorsSuccess(res));
           return res.actors;
        })
        .catch(error => {
            dispatch(fetchActorsError(error));
        })
    }
}

export default fetchActors;