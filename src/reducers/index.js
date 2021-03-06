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
    carsByCategories: [],
    customerBookedCars: [],
    customerSellOrderList: [],
    carRegisteredForSell: false,
    bookedOrderId: "",
    customerCarBooked: null,
    showSearchBartoUser: false
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
            isValidUser: true,
            enableUserToBook: false
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
    if(action.type === "OTP_CREATED_TEST_DRIVE") {
        return {
            ...state,
            OTPcreatedForTestDrive: true
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
            availableCarList: action.payload
        }
    }
    if(action.type === "CARS_BY_CATEGORY") {
        return {
            ...state,
            availableCarList: action.payload
        }
    }
    if(action.type === "CARS_BY_BODYTYPE") {
        return {
            ...state,
            availableCarList: action.payload
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
    if(action.type === "SEARCH_CAR") {
        return {
            ...state,
            searchedCarName: action.payload
        }
    }
    if(action.type === "ENABLE_USER_TO_BOOK") {
        return {
            ...state,
            enableUserToBook: action.payload
        }
    }
    if(action.type === "API_FAILURE") {
        return {
            ...state,
            api_failure: true
        }
    }
    if(action.type === "CUSTOMER_BUY_ORDER") {
        return {
            ...state,
            bookedOrderId: action.payload
        }
    }
    if(action.type === "SELL_CAR") {
        return {
            ...state,
            carRegisteredForSell: !state.carRegisteredForSell
        }
    }
    if(action.type === "CLOSE_TEST_DRIVE_SNACKBAR") {
        return {
            ...state,
            isBookedTestDriveSuccessFul: false,
            customerCarBooked: null,
            OTPVerificationSuccessful: false
        }
    }
    if(action.type === "DISABLE_OTP_VALIDATION") {
        return {
            ...state,
            OTPVerificationSuccessful: false,
            signUpSuccess: false
        }
    }
    if(action.type === "BOOKED_TEST_DRIVE") {
        return {
            ...state,
            isBookedTestDriveSuccessFul: true,
            OTPcreatedForTestDrive: false
        }
    }
    if(action.type === "ASSURED_CARS") {
        return {
            ...state,
            assuredCarList: action.payload
        }
    }
    if(action.type === "CUSTOMER_BUY_ORDER_STATUS") {
        return {
            ...state,
            customerCarBooked: true
        }
    }
    if(action.type === "CLOSE_CARBOOKED_POPUP") {
        return {
            ...state,
            customerCarBooked: false
        }
    }
    if(action.type === "REFER_FRIEND_SUCCESS") {
        return {
            ...state,
            referFriendSuccessFul: action.payload
        }
    }
    if(action.type === "DISABLE_SNACKBAR_REFERRAL") {
        return {
            ...state,
            referFriendSuccessFul: false
        }
    }
    if(action.type === "TOGGLE_SEARCH_BAR") {
        return {
            ...state,
            showSearchBartoUser: action.payload
        }
    }
    if(action.type === "USER_DETAILS_UPDATED") {
        return {
            ...state,
            userDetailsUpdated: true,
        }
    }
    if(action.type === "DISABLE_USERDETAILS_SNACKBAR") {
        return {
            ...state,
            userDetailsUpdated: false
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

