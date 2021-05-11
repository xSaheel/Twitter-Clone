export const initialState = {
    userData: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return {
                ...state,
                userData: [action.payload, ...state.userData]
            }
        default:
            return state;
    }
}   

export default userReducer;