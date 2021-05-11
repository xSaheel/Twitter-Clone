export const initialState = {
    data: []
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                data: [action.payload, ...state.data]
            }
        case 'ADD_LIKE':
            action.payload.likes = action.payload.likes + 1;
            return {
                ...state,
                data: [...state.data]
            }
        default:
            return state;
    }
}   

export default dataReducer;