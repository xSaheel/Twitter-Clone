// USERS / AUTH ACTIONS

export const getUsers = (dispatch) => {

    fetch('/users')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'USER_ERROR',
            payload: err
        })
    })
}

export const addUser = (dispatch, userData) => {

    fetch('/users/add',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: 'ADD_USER',
            payload: data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'USER_ERROR',
            payload: err
        })
    })
}

export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}

export const resetCurrentUser = () => {
    return {
        type: 'SET_CURRENT_USER',
    }
}