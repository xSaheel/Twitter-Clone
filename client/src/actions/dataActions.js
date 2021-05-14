// DATA / POSTS / TWEETS ACTIONS

// GET A POST

export const getData = (dispatch) => {

    fetch('/tweets')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dispatch({
            type: 'GET_DATA',
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'DATA_ERROR',
            payload: err
        })
    })
}

// ADD A NEW POST

export const addData = (dispatch, data) => {

    fetch('/tweets/add',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: 'ADD_DATA',
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'DATA_ERROR',
            payload: err
        })
    })
}

// ADD LIKE TO A POST

export const addLike = (dispatch, data) => {

    fetch(`/tweets/addlike/${data._id}`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: 'ADD_LIKE',
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'DATA_ERROR',
            payload: err
        })
    })

}

