import { combineReducers } from "redux";

const initialState = {
    isValidUser: false,
    api_failure: false,
    customerCarList: [],
    authenticationStatus: null,
    authToken: null,
    OTPVerificationSuccessful: false,
    availableCarList: []
}

const reducers = (state = initialState, action) => {
    if(action.type === "AUTHENTICATION_FAILURE") {
        return {
            authenticationStatus: false
        }
    }
    if(action.type === "LOGIN_SUCCESS") {
        return {
            authToken: action.payload.token,
            userDetails: action.payload,
            isValidUser: true
        }
    }
    if(action.type === "SIGNUP_SUCCESS") {
        return {
            signUpSuccess: true
        }
    }
    if(action.type === "REGISTERED_USER") {
        return {
            isUserRegistered: action.payload
        }
    }
    if(action.type === "PASSWORD_UPDATE_SUCCESS") {
        return {
            OTPVerificationSuccessful: false
        }
    }
    if(action.type === "USER_VALIDATED") {
        return {
            // isValidUser: action.payload
            // isValidUser: true,
            OTPVerificationSuccessful: true
        }
    }
    if(action.type === "AVAILABLE_CARS") {
        return {
            availableCarList: action.payload
        }
    }
    if(action.type === "API_FAILURE") {
        return {
            api_failure: true
        }
    }
    if(action.type === "LOGOUT") {
        return {
            authToken: null,
            signUpSuccess: false
        }
    }
    return state;
}


const rootReducer = combineReducers({
    reducers
})

export default rootReducer;

