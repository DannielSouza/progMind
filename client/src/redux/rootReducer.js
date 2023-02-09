import {combineReducers} from "redux"
import userReducer from "./user/slice"
import toughtReducer from "./tought/slice"

const rootReducer = combineReducers({userReducer, toughtReducer})

export default rootReducer