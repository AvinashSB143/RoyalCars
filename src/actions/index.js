import axios from "../axios";


export const getOTP = (name, number) => {
   try{
    // axios.post('user/login', {
    //     username: "Avinah",
    //     password: "12345"
    // }).then(res => {
    //     console.log(res)
    //     return {
    //         type: "LOGIN_SUCCESS",
    //         payload: res
    //     }
    // }).catch(err => console.log(err))
    return {
        type: "LOGIN_SUCCESS",
        payload: "success"
    }
   } 
   catch (error) {
    console.log(error);
  }
 
}
    