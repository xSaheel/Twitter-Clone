import dataReducer from "./dataReducer";
import userReducer from "./userReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dataReducer,
    userReducer
})

export default rootReducer;