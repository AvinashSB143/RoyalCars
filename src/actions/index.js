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


export const getOTP = number => {
    return dispatch => {
        try {
            axios.post('user/forgotPassword', {
                phone: number
            }).then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const createOTP = number => {
    return dispatch => {
        try {
            axios.post('user/createOTP', {
                phoneNumber: number
            }).then(res => {
                dispatch ({
                    type: "OTP_CREATED_TEST_DRIVE"
                }) 
                
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const updatePassword = (number, newPassword) => {
    return dispatch => {
        try {
            axios.post('user/updatePassword', {
                phone: number,
                newPassword: newPassword
            }).then(res => {
               if(res && res.data) {
                dispatch ({
                    type: "PASSWORD_UPDATE_SUCCESS"
                }) 
               }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const bookTestDrive = (number, data) => {
    return dispatch => {
        try {
            axios.post('user/bookTestDrive', {
                phoneNumber: number,
                bookedDate: data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()
            }).then(res => {
               if(res && res.data) {
                dispatch ({
                    type: "BOOKED_TEST_DRIVE"
                }) 
               }
            }).catch(err => dispatch ({
                type: "BOOKED_TEST_DRIVE"
            }) )
        } catch (error) {
            console.log(error)
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
            dispatch ({
                type: "API_FAILURE",
                payload: "success"
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const validateOTP = (OTP,phoneNumber) => {
    return dispatch => {
        try {
            axios.post('user/validateOTP', {
                otp: OTP,
                phoneNumber: phoneNumber
            }).then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "USER_VALIDATED",
                        payload: res.data
                    })
                }
            }).catch(err => console.log(err))
            dispatch ({  
                type: "API_FAILURE",
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAvailableCars = () => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar').then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "AVAILABLE_CARS",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAssuredCars = () => {
    return dispatch => {
        try {
            axios.get('customerCar/getWarrantyCar').then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "ASSURED_CARS",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCarsByYear = year => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar', {
                year: year
            }).then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "CARS_BY_YEAR",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
          
            dispatch ({
                type: "AVAILABLE_CARS",
                payload: []
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getCarsByBrand = brand => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar', {
                brand: brand
            }).then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "CARS_BY_BRAND",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
            dispatch ({
                type: "AVAILABLE_CARS",
                payload: []
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getCarsByCategory = category => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar', {
                categories: category
            }).then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "CARS_BY_CATEGORY",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
          
            dispatch ({
                type: "AVAILABLE_CARS",
                payload: []
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getCarsByBodyType = bodyType => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar', {
                bodyType: bodyType
            }).then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "CARS_BY_BODYTYPE",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
          
            dispatch ({
                type: "AVAILABLE_CARS",
                payload: []
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getCarsByModel = model => {
    return dispatch => {
        try {
            axios.post('customerCar/getCustomerCar', {
                model: model
            }).then(res => {
                if(res && res.data) {
                dispatch ({
                    type: "CARS_BY_MODEL",
                    payload: res.data.result
                })
                }
            }).catch(err => console.log(err))
          
            dispatch ({
                type: "AVAILABLE_CARS",
                payload: []
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
                "year": data.year,
                "brand": data.brand,
                "model": data.model,
                "variant": data.variant,
                "totalOwner": data.totalOwner,
                "kmDriven": data.kmDriven,
                "customerPhoneNo": data.customerPhoneNo
            }).then(res => {
                if(res.data) {
                    dispatch ({
                        type: "SELL_CAR",
                        payload: res
                    })
                }
            }).catch(err => console.log(err))
            dispatch ({
                type: "API_FAILURE",
                payload: "success"
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const closeSnackBar = () => {
    return dispatch => {
                    dispatch ({
                        type: "SELL_CAR",
                    })
                }
}
export const closeSnackBarTestDrive = () => {
    return dispatch => {
                    dispatch ({
                        type: "CLOSE_TEST_DRIVE_SNACKBAR",
                    })
                }
}
export const disableSnackBar = () => {
    return dispatch => {
                    dispatch ({
                        type: "DISABLE_OTP_VALIDATION",
                    })
                }
}

export const getTestDriveCars = data => {
    return dispatch => {
        try {
            axios.get('customerCar/getCustomerCar/testDrive').then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "TEST_DRIVE_CARS",
                        payload: res.data.result
                    })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getBookedCars = data => {
    return dispatch => {
        try {
            axios.get('customerCar/getCustomerCar/bookedCars').then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "CUSTOMER_BOOKED_CARS",
                        payload: res.data.result
                    })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}

export const sellOrders = data => {
    return dispatch => {
        try {
            axios.get('customerCar/getCustomerCar/sellOrders').then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "CUSTOMER_SELL_ORDER",
                        payload: res.data.result
                    })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}
export const selectedCar = data => {
    return dispatch => {
        dispatch ({
            type: "SELECTED_CAR",
            payload: data
        })
    }
}
export const searchCar = name => {
    return dispatch => {
        dispatch ({
            type: "SEARCH_CAR",
            payload: name
        })
    }
}
export const enableLogUser = data => {
    return dispatch => {
        dispatch ({
            type: "ENABLE_USER_TO_BOOK",
            payload: data
        })
    }
}
export const bookNow = data => {
    return dispatch => {
        try {
            axios.post('customerCar/buyCar/creatOrderId',{
                "ammount": data.amount
            }).then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "CUSTOMER_BUY_ORDER",
                        payload: res.data.orderId
                    })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}
export const verifyPayment = data => {
    return dispatch => {
        try {
            axios.post('customerCar/buyCar/verify',{
               data
            }).then(res => {
                if(res && res.data) {
                    dispatch ({
                        type: "CUSTOMER_BUY_ORDER_STATUS",
                        // payload: res.data.orderId
                    })
                }
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }
}
