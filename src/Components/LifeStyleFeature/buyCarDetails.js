import React from "react";
import { Button } from "@material-ui/core";
import { useCallback, useEffect, useState, useRef } from "react";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import useRazorpay from "react-razorpay";
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CarouselComponent from "../../Components/utils/Carousel";
import {
  bookNow,
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
  },
  testDriveBtn: {
    backgroundColor: "#ffdf00 !important",
    color: "#fff",
    marginLeft: "20px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    color: "black !important"

  }
});


const BuyCarDetails = (props) => {
  const { selectedCar, userDetails, classes } = props;
  const Razorpay = useRazorpay();
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  
  const selectedCarYear = localStorage.getItem("selectedCarYear");
  const selectedCarbrand = localStorage.getItem("selectedCarbrand");
  const selectedCarModel = localStorage.getItem("selectedCarModel");
  const selectedCarId = localStorage.getItem("selectedCarId");
  const selectedCarFuelType = localStorage.getItem("selectedCarFuelType");
  const selectedCarTransmission = localStorage.getItem("selectedCarTransmission");
  const selectedCarImagePath = localStorage.getItem("selectedCarImagePath");
  const selectedCarBudget = localStorage.getItem("selectedCarBudget");
  const selectedCarkmDriven = localStorage.getItem("selectedCarkmDriven");
  const selectedCarinsurance = localStorage.getItem("selectedCarinsurance");
  const selectedCarVariant = localStorage.getItem("selectedCarVariant");
  const selectedCarinsuranceValidTill = localStorage.getItem("selectedCarinsuranceValidTill");
  const car_bookedOrderId = localStorage.getItem("car_bookedOrderId");
  const carsImages = selectedCar ? selectedCar.imagePath.split(",") : selectedCarImagePath.split(",");


  const { vertical, horizontal, open } = state;


  const [testDrivePhoneNumber, setTestDrivePhoneNumber] = useState('')
  const [isOTPCreated, setisOTPCreated] = useState(false)
  const [OTP, setOTP] = useState(null)
  const [validateUser, setvalidateUser] = useState()
  const phoneNumberRef = useRef()

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_live_rpMlrTILaVynxt",
      amount: selectedCar ? selectedCar.budget : selectedCarBudget,
      currency: "INR",
      name: "Royal Cars",
      description: "Car Book Transaction",
      // image: "https://example.com/your_logo",
      order_id: props.bookedOrderId,
      handler: (res) => {
        console.log("razorpay response", res);
        const data = {
          razorpay_payment_id: res.razorpay_payment_id,
          razorpay_order_id: props.bookedOrderId ? props.bookedOrderId : car_bookedOrderId ? car_bookedOrderId : "",
          razorpay_signature: res.razorpay_signature ? res.razorpay_signature : "",
          carId: selectedCar ? selectedCar._id : selectedCarId ? selectedCarId : "",
          customerPhoneNo: userDetails ? userDetails.phone: "",
          paidAmmount: selectedCar ? selectedCar.budget : selectedCarBudget ? selectedCarBudget : ""
        }
        props.verifyPayment(data)
        window.location.href = "https://royalcarsmangalore.in/"
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
  }, [Razorpay])
  // const order = await createOrder(params);

  useEffect(() => {
    if (props.bookedOrderId) {
      handlePayment()
    }
  }, [props.bookedOrderId])


  useEffect(() => {
    if (props.OTPVerificationSuccessful) {
      props.bookTestDrive(phoneNumberRef.current, new Date(), selectedCar._id)
    }

  }, [props.OTPVerificationSuccessful])

  const carInformation = {
    "amount": selectedCar ? selectedCar.budget ? selectedCar.budget : "" : selectedCarBudget ? selectedCarBudget : ""
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
    if (!isOTPCreated) {
      props.createOTP(testDrivePhoneNumber)
      phoneNumberRef.current = testDrivePhoneNumber;
      setTestDrivePhoneNumber("")
      setisOTPCreated(true)
    } else if (OTP && OTP.length === 4) {
      props.validateOTP(OTP, phoneNumberRef.current)
      setvalidateUser(false)
      setisOTPCreated(false)
    }
  }


  return selectedCar || selectedCarYear ? (
    <div className={`${validateUser && 'overlay'} "car_details_container"`}
      style={{ position: "relative" }}>
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
              style={{ margin: "10px", borderRadius: "5px", backgroundColor: "#DDD", padding: "10px", width: "80%" }}
              type="tel"
              onChange={(e) => getPhoneNumber(e.target.value)}
              value={testDrivePhoneNumber}
            />)
              :
              (<TextField
                id="OTP"
                placeholder="OTP"
                InputProps={{
                  disableUnderline: true,
                  maxLength: 10,
                }}
                style={{ margin: "10px", borderRadius: "5px", backgroundColor: "#DDD", padding: 0 }}
                type="tel"
                onChange={(e) => readOTPValue(e.target.value)}
                value={OTP}
              />)
            }
          </div>
          <div className="test_drive_btn_submit column_container">
            {isOTPCreated && <button onClick={() => {
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
          className="buycar__container"
        >
          <div className="carView">
           
            <CarouselComponent cars={carsImages} />
          </div>
          <div className="carDetails">
            <div className="rightSection hide">
              <div>
                <h1>
                  {selectedCar ? selectedCar.year : selectedCarYear } {selectedCar ? selectedCar.brand : selectedCarbrand} {selectedCar ? selectedCar.model : selectedCarModel}
                </h1>
                <div className="carFeature">
                  <span>{selectedCar ? selectedCar.kmDriven : selectedCarkmDriven} Kms</span>
                  <span>&nbsp;.&nbsp; {selectedCar ? selectedCar.fuelType : selectedCarFuelType}</span>
                  <span> &nbsp;.&nbsp; {selectedCar ? selectedCar.transmission : selectedCarTransmission}</span>
                  <span> &nbsp; ₹ {selectedCar ? selectedCar.budget : selectedCarBudget}</span>
                </div>
                <div className="carFeature">
                  {((selectedCar && selectedCar.insurance) || selectedCarinsurance !== "undefined") && <div className="insurance_details insurance_details__selected">{(selectedCar && selectedCar.insurance) ?  selectedCar.insurance : selectedCarinsurance ? selectedCarinsurance : ""} Insurance</div>}
                  {((selectedCar && selectedCar.insuranceValidTill) || selectedCarinsuranceValidTill !== "undefined") && <div className="insurance_details insurance_details__Validity"> Valid Till &nbsp;
                  {(selectedCar && selectedCar.insuranceValidTill) ? selectedCar.insuranceValidTill : selectedCarinsuranceValidTill ? selectedCarinsuranceValidTill : "" }
                </div>}
                </div>
                {selectedCar && selectedCar.variant && <div className="insurance_details ">
                {/* {(selectedCar && selectedCar.variant) ? selectedCar.variant: ""} */}
                <span>variant: &nbsp; {(selectedCar && selectedCar.variant) ? selectedCar.variant: ""}</span>
                </div>}
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
                    backgroundColor: "#00011f",
                    color: "#fff",
                    borderRadius: "8px",
                    fontWeight: "bolder"
                  }}
                  onClick={() => {
                    if (props.authToken) {
                      props.bookNow(carInformation)
                      props.enableLogUser(false)
                    } else {
                      props.enableLogUser(true)
                    }
                  }}
                >
                  Book Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "#ed264f",
                    color: "#fff",
                    marginLeft: "20px",
                    borderRadius: "8px",
                    fontWeight: "bolder"

                  }}
                  classes={{
                    root: classes.testDriveBtn
                  }}
                  onClick={() => {
                    // if(props.authToken) {
                    //   props.bookTestDrive(userDetails.phone, new Date())
                    //   props.enableLogUser(false)
                    // }else {
                    //   props.enableLogUser(true)
                    // }
                    setvalidateUser(true);
                    window.scroll(0, 0)
                  }}
                >
                  Free Test Drive
                </Button>
              </div>
            </div>
            <div className="car_details_MobileView">
              <div className="car_details_heading">
                Car Details
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Year</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.year ? selectedCar.year  : selectedCarYear ? selectedCarYear : "" }</h2>
                </div>
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Car Brand</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.brand ? selectedCar.brand : selectedCarbrand ? selectedCarbrand : ""}</h2>
                </div>
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">KM Driven</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.kmDriven ? selectedCar.kmDriven : selectedCarkmDriven ? selectedCarkmDriven : ""  }</h2>
                </div>
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Fuel Type</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.fuelType ? selectedCar.fuelType : selectedCarFuelType ? selectedCarFuelType : "" }</h2>
                </div>
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Budget</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">₹ {selectedCar && selectedCar.budget ? selectedCar.budget : selectedCarBudget ? selectedCarBudget : "" }</h2>
                </div>
              </div>
              <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Transmission</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.transmission ? selectedCar.transmission : selectedCarTransmission ? selectedCarTransmission : "" }</h2>
                </div>
              </div>
              {((selectedCar && selectedCar.insuranceValidTill) || selectedCarinsuranceValidTill !== "undefined") && <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Insurance Validity</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.insuranceValidTill ? selectedCar.insuranceValidTill : selectedCarinsuranceValidTill ? selectedCarinsuranceValidTill : "" }</h2>
                </div>
              </div>}
              {((selectedCar && selectedCar.insurance) || selectedCarinsurance !== "undefined" ) && <div className="car_details_item colum_container">
                <div>
                  <p className="car_detail_desc">Insurance Type</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.insurance ? selectedCar.insurance : selectedCarinsurance ? selectedCarinsurance : ""}</h2>
                </div>
              </div>}
              {((selectedCar && selectedCar.variant) || selectedCarinsurance !== "undefined" ) && 
              <div className="car_details_item colum_container car_cariant">
                <div>
                  <p className="car_detail_desc">variant</p>
                </div>
                <div>
                  <h2 className="car_detail_desc_val">{selectedCar && selectedCar.variant ? selectedCar.variant : selectedCarVariant ? selectedCarVariant : ""}</h2>
                </div>
              </div>
              }
              <div className="transmission_details location_info">
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
              <div className="transmission_details location_info">
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
              <div className="car_details_mobile_buttons">
                <Button
                  style={{
                    backgroundColor: "#00011f",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    if (props.authToken) {
                      props.bookNow(carInformation)
                      props.enableLogUser(false)
                    } else {
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
                  classes={{
                    root: classes.testDriveBtn
                  }}
                  onClick={() => {
                    // if(props.authToken) {
                    //   props.bookTestDrive(userDetails.phone, new Date())
                    //   props.enableLogUser(false)
                    // }else {
                    //   props.enableLogUser(true)
                    // }
                    setvalidateUser(true);
                    window.scroll(0, 0)
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
  return {
    selectedCar: state.reducers.selectedCar,
    userDetails: state.reducers.userDetails,
    bookedOrderId: state.reducers.bookedOrderId,
    authToken: state.reducers.authToken,
    isBookedTestDriveSuccessFul: state.reducers.isBookedTestDriveSuccessFul,
    OTPVerificationSuccessful: state.reducers.OTPVerificationSuccessful,
    OTPcreatedForTestDrive: state.reducers.OTPcreatedForTestDrive,
    customerCarBooked: state.reducers.customerCarBooked,
  }

}
const mapDispatchToProps = dispatch => {
  return {
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
    bookTestDrive: (phoneNumber, date, carId) => {
      dispatch(
        bookTestDrive(phoneNumber, date, carId)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyCarDetails));