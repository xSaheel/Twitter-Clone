export const initialState = {
    data: []
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA': 
            return {
                ...state,
                data: action.payload
            }
        case 'ADD_DATA':
            return {
                ...state,
                data: [action.payload, ...state.data]
            }
        case 'ADD_LIKE':
            return {
                ...state,
                data: state.data
            }
        case 'DATA_ERROR':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}   

export default dataReducer;