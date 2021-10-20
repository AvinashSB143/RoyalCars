import { combineReducers } from "redux";

const reducers = (state = {}, action) => {
    if(action.type === "LOGIN_SUCCESS") {
        return {
            action
        }
    }
    return state;
}


const rootReducer = combineReducers({
    reducers
})

export default rootReducer;

