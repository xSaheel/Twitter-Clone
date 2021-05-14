export const initialState = {
    userData: {
        name: "Anonymous",
        email: "",
        password: ""
    }
}

const currentUserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                userData: action.payload
            }
        case 'RESET_CURRENT_USER':
            return {
                ...state,
                userData: {
                    name: "Anonymous",
                    email: "",
                    password: ""
                }
            }
        default:
            return state;
    }
}   

export default currentUserReducer;