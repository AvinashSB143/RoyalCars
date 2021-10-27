import axios from "../axios";


export const login = (number) => {
    return dispatch => {
        try{
            axios.post('user/login', {
                phone: number
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
    