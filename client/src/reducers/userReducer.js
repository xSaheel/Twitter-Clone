export const initialState = {
    userData: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                userData: action.payload
            }
        case 'ADD_USER':
            return {
                ...state,
                userData: [action.payload, ...state.userData]
            }
        case 'USER_ERROR':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}   

export default userReducer;