import axios from "../axios";


export const login = (number) => {
    return dispatch => {
        try{
            axios.post('user/login', {
                username: number
            }).then(res => {
                console.log(res)
                dispatch ({
                    type: "LOGIN_SUCCESS",
                    payload: res
                })
            }).catch(err => console.log(err))
            dispatch ({
                type: "API_FAILURE",
                payload: "success"
            })
           } 
           catch (error) {
            console.log(error);
          }

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
