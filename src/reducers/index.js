import { combineReducers } from "redux";

const initialState = {
    isValidUser: false,
    api_failure: false,
    customerCarList: [],
    authenticationStatus: null,
    authToken: null,
    OTPVerificationSuccessful: false,
    availableCarList: [],
    carsByYears: [],
    carsByBrand: [],
    carsByModel: [],
    testDriveCars: [],
    customerBookedCars: [],
    customerSellOrderList: [],
    carRegisteredForSell: false
}

const reducers = (state = initialState, action) => {
    if(action.type === "AUTHENTICATION_FAILURE") {
        return {
            ...state,
            authenticationStatus: false
        }
    }
    if(action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            authToken: action.payload.token,
            userDetails: action.payload,
            isValidUser: true
        }
    }
    if(action.type === "SIGNUP_SUCCESS") {
        return {
            ...state,
            signUpSuccess: true
        }
    }
    if(action.type === "REGISTERED_USER") {
        return {
            ...state,
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
            ...state,
            OTPVerificationSuccessful: true
        }
    }
    if(action.type === "AVAILABLE_CARS") {
        return {
            ...state,
            availableCarList: action.payload
        }
    }
    if(action.type === "CARS_BY_YEAR") {
        return {
            ...state,
            carsByYears: action.payload
        }
    }
    if(action.type === "CARS_BY_BRAND") {
        return {
            ...state,
            carsByBrand: action.payload
        }
    }
    if(action.type === "CARS_BY_MODEL") {
        return {
            ...state,
            carsByModel: action.payload
        }
    }
    if(action.type === "TEST_DRIVE_CARS") {
        return {
            ...state,
            testDriveCars: action.payload
        }
    }
    if(action.type === "CUSTOMER_BOOKED_CARS") {
        return {
            ...state,
            customerBookedCars: action.payload
        }
    }
    if(action.type === "CUSTOMER_SELL_ORDER") {
        return {
            ...state,
            customerSellOrderList: action.payload
        }
    }
    if(action.type === "SELECTED_CAR") {
        return {
            ...state,
            selectedCar: action.payload
        }
    }
    if(action.type === "API_FAILURE") {
        return {
            api_failure: true
        }
    }
    if(action.type === "SELL_CAR") {
        return {
            ...state,
            carRegisteredForSell: !state.carRegisteredForSell
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

