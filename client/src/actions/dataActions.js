export const addData = (data) => {
    return {
        type: 'ADD_DATA',
        payload: data
    };
}

export const addUser = (userData) => {
    return {
        type: 'ADD_USER',
        payload: userData
    }
}

export const addLike = (data) => {
    return {
        type: 'ADD_LIKE',
        payload: data
    };
}
