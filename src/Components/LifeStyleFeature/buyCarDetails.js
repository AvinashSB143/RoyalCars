import React from "react";
import { Button } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import useRazorpay from "react-razorpay";
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from 'react-router-dom';  
import { connect } from "react-redux";
import {bookNow,
  verifyPayment,
  enableLogUser,
  bookTestDrive,
  createOTP,
  validateOTP,
  closeSnackBarTestDrive
} from "../../actions";



const styles = theme => ({ 
  root: {
    background: "#f2f3f5",
    padding: "10px",
    margin: "10px auto"
  },
  input: {
      padding: "16px 0 17px 10px"
  },
  flexContainer: {
    justifyContent: "space-around"
  },
  snackBarRoot: {
    backgroundColor: "green"
  },
  datePickerRoot: {
    left: "20%",
  },
  animated: {
    fontSize: "18px",
    fontWeight: "400"
  }
});


const BuyCarDetails = (props) => {
    const {selectedCar, userDetails, classes} = props;
    const Razorpay = useRazorpay();
    const [state, setState] = React.useState({
      vertical: 'top',
      horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;


    const [testDrivePhoneNumber,setTestDrivePhoneNumber] = useState('')
    const [isOTPCreated, setisOTPCreated] = useState(false)
    const [OTP, setOTP] = useState(null)
    const [validateUser, setvalidateUser] = useState()

    const handlePayment =  useCallback(() => {
      const options = {
        key: "rzp_test_HrnE7wPqX9HFyT",
        amount: selectedCar.budget,
        currency: "INR",
        name: "Acme Corp",
        description: "Car Book Transaction",
        // image: "https://example.com/your_logo",
        order_id: props.bookedOrderId,
        handler: (res) => {
         console.log("razorpay response",res);
         const data = {
           razorpay_payment_id: "",
           razorpay_order_id: "",
           razorpay_signature: "",
           cardId: "",
           customerPhoneNo: userDetails.phone
         }
         props.verifyPayment(res)
         window.location.href = "http://3.111.30.111:3000/"
        },
        // prefill: {
        //   name: "Piyush Garg",
        //   email: "piyushgarg.dev@gmail.com",
        //   contact: "9999999999",
        // },
        // notes: {
        //   address: "Razorpay Corporate Office",
        // },
        // theme: {
        //   color: "#3399cc",
        // },
      };
  
      const rzpay = new Razorpay(options);
      rzpay.open();
    },[Razorpay])
      // const order = await createOrder(params);
  
    useEffect(() => {
      if(props.bookedOrderId) {
        handlePayment()
      }
    },[props.bookedOrderId])
  

    useEffect(() => {
      if(props.OTPVerificationSuccessful) {
          props.bookTestDrive(userDetails.phone, new Date())
      }

    },[props.OTPVerificationSuccessful])

    const carInformation = {
        "amount": selectedCar ? selectedCar.budget: ""
    }

    const getPhoneNumber = number => {
      setTestDrivePhoneNumber(number)
    }
    const readOTPValue = value => {
      setOTP(value)
    }

    const handleClose = () => {
      props.disableSnackBar()
    };

    const validateForTestDrive = () => {
      if(!isOTPCreated) {
        props.createOTP(testDrivePhoneNumber)
        setTestDrivePhoneNumber("")
        setisOTPCreated(true)
      } else if(OTP && OTP.length === 4){
        props.validateOTP(OTP, testDrivePhoneNumber)
        setvalidateUser(false)
        setisOTPCreated(false)
      }
    }

    return selectedCar ? (
      <div className={`${validateUser && 'overlay'} "car_details_container"`} 
          style={{position : "relative"}}>
            {!(props.OTPVerificationSuccessful && props.OTPcreatedForTestDrive) && validateUser &&
          <div className="test_drive_validate_container">
            <CloseIcon
                  className="close_Test_Drive_container"
                  onClick={() => {
                   setvalidateUser(false)
                  }}
                />
            <div className="test_drive_mobileNo_container">
            <h4>
              Please Enter your PhoneNumber
            </h4>
            {!props.OTPcreatedForTestDrive ? (<TextField
              id="mobile_number"
              placeholder="Mobile Number"
              InputProps={{
                disableUnderline: true,
                 maxLength: 10,
              }}
              style={{ margin: "10px", borderRadius: "5px", backgroundColor:"#DDD", padding: "10px", width: "80%"}}
              type="tel"
              onChange={(e) => getPhoneNumber(e.target.value)}
              value={testDrivePhoneNumber}
            /> )
            : 
            (<TextField
              id="OTP"
              placeholder="OTP"
              InputProps={{
                disableUnderline: true,
                 maxLength: 10,
              }}
              style={{ margin: "10px", borderRadius: "5px", backgroundColor:"#DDD", padding: 0}}
              type="tel"
              onChange={(e) => readOTPValue(e.target.value)}
              value={OTP}
            /> )
            }
            </div>
            <div className="test_drive_btn_submit column_container">
            { isOTPCreated && <button onClick={() => {
              props.createOTP(testDrivePhoneNumber)
            }}>
                Resend OTP
              </button> 
              }
              <button className="verify_btn" onClick={validateForTestDrive}>
              {!isOTPCreated ? "Send OTP" : "Validate OTP"} 
              </button>
          </div>
        </div>
      }
             <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={props.isBookedTestDriveSuccessFul}
                message="Test Drive has been Booked as per your request."
                key={vertical + horizontal}
                className={
                classes.snackBarRoot
                }
                classes={{
                message: classes.snackBarRoot,
                root: classes.snackBarRoot
                }}
                action={
                  <React.Fragment>
                    <IconButton
                        aria-label="close"
                      color="inherit"
                      sx={{ p: 0.5 }}
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </React.Fragment>
                }
              />
       
      <div className="pageStyle">
        <div>
          <ul className="carsList">
            <li title="Home">
              <Link to="/homePage">
                Home
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#4169e1"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
            <li title="Buy Cars">
              <Link to="/lifeStyle">
                Buy Cars
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#2E054E"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
            <li title="Cars List">
              <Link to="/buyCar/cars">
                Car List
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#2E054E"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div
          //   style={{ display: "flex", marginTop: "20px" }}
          className="buycar__container"
        >
          <div className="carView">
            {/* <img className="filter_car_img" src={selectedCar.imagePath} /> */}
            <img
              className="filter_car_img"
              src={`http://3.111.30.111:5000/${selectedCar.imagePath}`}
            />
          </div>
          <div className="carDetails">
            <div className="rightSection">
              <div>
                <h1>
                  {selectedCar && selectedCar.year} {selectedCar && selectedCar.brand} {selectedCar && selectedCar.model}
                </h1>
                <div className="carFeature">
                  <span>{selectedCar && selectedCar.kmDriven} Kms</span>
                  <span>&nbsp;.&nbsp; {selectedCar && selectedCar.fuelType}</span>
                  <span> &nbsp;.&nbsp; {selectedCar && selectedCar.transmission}</span>
                </div>
                <div className="testDrive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      opacity="1"
                      d="M12.336 5.618L6.69.177a.645.645 0 00-.888 0L.157 5.618a.37.37 0 00-.137.413c.03.074.12.2.382.2h.636v4.836a.946.946 0 00.925.929h2.861V8.722h2.769V12h2.937a.935.935 0 00.906-.929V6.239h.655c.263 0 .352-.129.382-.2a.37.37 0 00-.137-.421z"
                      fill="#888888"
                    ></path>
                  </svg>
                  &nbsp; Home Test Drive: &nbsp;
                  <span>Available</span>
                </div>
                <div className="carLocation">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99998 0.166672C2.54998 0.166672 0.333313 2.04501 0.333313 4.95001C0.333313 6.80501 1.76248 8.98667 4.61498 11.5008C4.83665 11.6933 5.16915 11.6933 5.39081 11.5008C8.23748 8.98667 9.66665 6.80501 9.66665 4.95001C9.66665 2.04501 7.44998 0.166672 4.99998 0.166672ZM4.99998 6.00001C4.35831 6.00001 3.83331 5.47501 3.83331 4.83334C3.83331 4.19167 4.35831 3.66667 4.99998 3.66667C5.64165 3.66667 6.16665 4.19167 6.16665 4.83334C6.16665 5.47501 5.64165 6.00001 4.99998 6.00001Z"
                      fill="#888888"
                    ></path>
                  </svg>
                  <span>&nbsp; Royal Cars Car Hub, Mangalore</span>
                  <span className="arrowIcon">
                    <svg
                      transform="rotate(0 0 0)"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#2E054E"
                      width="7"
                      height="7"
                      viewBox="0 0 14 8"
                    >
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        d="M386 48L392 54 398 48"
                        transform="translate(-385 -47)"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="carPriceMargin">
                </div>
                <p className="fixedPrice">Fixed on road price</p>
                {/* <div className="availableOffer">
                  <h1>Available Offers</h1>
                  <ul className="offerList">
                    <li className="offerItem">
                      <div className="offerIcon">
                        {/* <LocalOfferIcon /> 
                      </div>
                      <div className="offerText">
                        <span>Guaranteed buyback: &nbsp;</span>
                        Return this car to us within tenure of 6, 12 or 18
                        months at guranteed prices
                      </div>
                      <div className="offerArrow">
                        <svg
                          transform="rotate(-90 0 0)"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#2e054e"
                          width="12"
                          height="12"
                          viewBox="0 0 14 8"
                        >
                          <path
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M386 48L392 54 398 48"
                            transform="translate(-385 -47)"
                          ></path>
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "24px 0",
                  margin: "0 0 0 10px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#4169e1",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    if(props.authToken) {
                      props.bookNow(carInformation)
                      props.enableLogUser(false)
                    }else {
                      props.enableLogUser(true)
                    }
                  }}
                >
                  Book Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    marginLeft: "20px",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    // if(props.authToken) {
                    //   props.bookTestDrive(userDetails.phone, new Date())
                    //   props.enableLogUser(false)
                    // }else {
                    //   props.enableLogUser(true)
                    // }
                    setvalidateUser(true)
                  }}
                >
                  Free Test Drive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    ) : (
      <p>Loaing...!</p>
    );
};

const mapStateToProps = state => {
    return{
        selectedCar: state.reducers.selectedCar,
        userDetails: state.reducers.userDetails,
        bookedOrderId: state.reducers.bookedOrderId,
        authToken: state.reducers.authToken,
        isBookedTestDriveSuccessFul: state.reducers.isBookedTestDriveSuccessFul,
        OTPVerificationSuccessful: state.reducers.OTPVerificationSuccessful,
        OTPcreatedForTestDrive: state.reducers.OTPcreatedForTestDrive,
    }
    
}
const mapDispatchToProps = dispatch => {
    return{
        bookNow: data => {
            dispatch(
                bookNow(data)
            )
        },
        validateOTP: (OTP, phoneNumber) => {
            dispatch(
                validateOTP(OTP, phoneNumber)
            )
        },
        enableLogUser: data => {
            dispatch(
              enableLogUser(data)
            )
        },
        createOTP: data => {
            dispatch(
              createOTP(data)
            )
        },
        verifyPayment: data => {
            dispatch(
              verifyPayment(data)
            )
        },
        disableSnackBar: () => {
            dispatch(
              closeSnackBarTestDrive()
            )
        },
        bookTestDrive: (phoneNumber, data) => {
            dispatch(
              bookTestDrive(phoneNumber, data)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyCarDetails));