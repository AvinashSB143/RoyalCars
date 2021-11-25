import axios from "../axios";


export const login = (name, password) => {
    return dispatch => {
        try{
            axios.post('user/login', {
                username: name,
                password: password
            }).then(res => {
                if(res && res.data && res.data.token)
                dispatch ({
                    type: "LOGIN_SUCCESS",
                    payload: res.data
                })
            }).catch(err =>  dispatch ({
                type: "AUTHENTICATION_FAILURE",
            }))
           
           } 
           catch (error) {
            console.log(error);
          }
        }
}

export const signUp = (name, password, phoneNumber, email) => {
    return dispatch => {
        try{
            axios.post('user/signup', {
                username: name,
                phone: phoneNumber,
                email: email,
                password: password
            }).then(res => {
                if(res.data) {
                    dispatch ({
                        type: "SIGNUP_SUCCESS",
                    }) 
                }
            }).catch(err =>  dispatch ({
                type: "API_FAILURE",
            }))
           
           } 
           catch (error) {
            console.log(error);
          }
    }
}

export const logout = () => {
    return dispatch => {
        dispatch ({
            type: "LOGOUT",
        }) 
    }
}


export const validateNumber = number => {
    return dispatch => {
        try {
            axios.post('user/validateUser', {
                phoneNumber: number
            }).then(res => {
                console.log(res)
                dispatch ({
                    type: "REGISTERED_USER",
                    payload: "existing_user"
                })
            }).catch(err => console.log(err))
            // dispatch ({
            //     type: "API_FAILURE",
            //     payload: "success"
            // })
            dispatch ({
                type: "REGISTERED_USER",
                payload: "existing_user"
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const validateOTP = OTP => {
    return dispatch => {
        try {
            axios.post('user/verifyOtp', {
                otp: OTP
            }).then(res => {
                console.log(res)
                dispatch ({
                    type: "USER_VALIDATED",
                    payload: "valid_user"
                })
            }).catch(err => console.log(err))
            // dispatch ({
            //     type: "API_FAILURE",
            //     payload: "success"
            // })
            dispatch ({
                type: "USER_VALIDATED",
                payload: "valid_user"
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getCustomerCars = OTP => {
    return dispatch => {
        try {
            axios.get('customerCar/get').then(res => {
                console.log(res)
                dispatch ({
                    type: "CUSTOMER_CAR_LIST",
                    payload: res
                })
            }).catch(err => console.log(err))
            // dispatch ({
            //     type: "API_FAILURE",
            //     payload: "success"
            // })
            dispatch ({
                type: "USER_VALIDATED",
                payload: "valid_user"
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const sellCar = data => {
    return dispatch => {
        try {
            axios.post('customerCar/sell', {
                data
            }).then(res => {
                console.log(res)
                dispatch ({
                    type: "CUSTOMER_CAR_LIST",
                    payload: res
                })
            }).catch(err => console.log(err))
            // dispatch ({
            //     type: "API_FAILURE",
            //     payload: "success"
            // })
            dispatch ({
                type: "USER_VALIDATED",
                payload: "valid_user"
            })

        } catch (error) {
            console.log(error)
        }
    }
}
