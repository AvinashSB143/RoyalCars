import { combineReducers } from "redux";

const initialState = {
    isValidUser: null,
    api_failure: false
}

const reducers = (state = initialState, action) => {
    if(action.type === "REGISTERED_USER") {
        return {
            isUserRegistered: action.payload
        }
    }
    if(action.type === "USER_VALIDATED") {
        return {
            isValidUser: action.payload
        }
    }
    if(action.type === "API_FAILURE") {
        return {
            api_failure: true
        }
    }
    return state;
}


const rootReducer = combineReducers({
    reducers
})

export default rootReducer;

