import {combineReducers} from "redux"
import userReducer from "./user/slice"
import toughtReducer from "./tought/slice"
import sidebarReducer from "./sidebar/slice"

const rootReducer = combineReducers({userReducer, toughtReducer, sidebarReducer})

export default rootReducer