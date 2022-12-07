import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: userReducer
})

export default rootReducer