import dataReducer from "./dataReducer";
import userReducer from "./userReducer";
import currentUserReducer from "./currentUserReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dataReducer,
    userReducer,
    currentUserReducer
})

export default rootReducer;