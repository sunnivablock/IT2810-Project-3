import {fetchTopActorsPending, fetchTopActorsSuccess, fetchTopActorsError} from '../actions/index'

function fetchTopActors(url) {
    return dispatch => {
        dispatch(fetchTopActorsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTopActorsSuccess(res));
           return res.topactors;
        })
        .catch(error => {
            dispatch(fetchTopActorsError(error));
        })
    }
}

export default fetchTopActors;