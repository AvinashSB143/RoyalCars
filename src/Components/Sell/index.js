import React, { useState, Fragment } from "react";
import { connect } from 'react-redux';
import "./sell.css";
import Feedback from "../Feedback";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { sellCar, getCarsByYear, getCarsByBrand, getCarsByModel, closeSnackBar } from "../../actions"

import CarSellingOnline from "../../assests/carSellingOnline.jpg";
import HomeCarEvaluation from "../../assests/homeCarevaluation.jpg";
import InstantPayment from "../../assests/instantPayment.jpg";


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
  accordianroot: {
    background: "#FFDF00"
  }
});


export const FormFields = ({ name, value, component, onClick, disable }) => {
  return (
    <div class="container_FormFields">
      <span>
        <div class="valueWrap" onClick={onClick} disable={disable}>
          <label title="Model" className="title">
            {name}
          </label>
          <span title="Model" className="selected-value">
            {value}
          </span>
        </div>
      </span>
    </div>
  );
};

export const HowItsWork__listItem = ({
  heading,
  details,
  linkName,
  imgsrc,
}) => {
  return (
    <div class="HowItsWork__listItem">
      <img
        src={CarSellingOnline}
        alt="hiw-1.png"
        class=""
      />
      <div class="HowItsWork__contentSection">
        <h3 class="HowItsWork__heading">Selling your car made easy</h3>
        <p class="HowItsWork__details">
          Sell your car hassle free
        </p>
      </div>
    </div>
  );
};
export const HowItWorks = () => {
  return (
    <div className="sell_car_container">
      <h3>Selling your car made simple</h3>
      <div class="HowItsWork__listWrap">
        <HowItsWork__listItem />
        <div class="HowItsWork__listItem">
          <img
            src={HomeCarEvaluation}
            alt="hiw-2.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <h3 class="HowItsWork__heading">Free Doorstep Evaluation</h3>
            <p class="HowItsWork__details">
              Schedule the evaluation at your convenience, from the comfort of
              your home or workplace
            </p>
            {/* <a class="styles__btn" href="/check-car-valuation/">
              <svg
                transform="rotate(0 0 0)"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#4169e1"
                width="9"
                height="9"
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
              </svg>{" "}
            </a> */}
          </div>
        </div>
        <div class="HowItsWork__listItem">
          <img
            src={InstantPayment}
            alt="hiw-3.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <h3 class="HowItsWork__heading">Same day payment</h3>
            <p class="HowItsWork__details">
              Complete payment and paperwork on-the-spot
            </p>
            {/* <a
              class="styles__btn"
              data-category="how_it_works"
              data-label="Sell Car"
              href="/check-car-valuation/"
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
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Sell = (props) => {

  const { classes, authToken } = props;
  const [showYearList, setShowYearList] = useState(false)
  const [showBrandList, setShowBrandList] = useState(false)
  const [showModelList, setShowModelList] = useState(false)
  const [showVariantList, setShowVariantList] = useState(false)
  const [showOwnerList, setShowOwnerList] = useState(false)
  const [showKMList, setKMList] = useState(false)
  const [selectedyear, setselectedYear] = useState();
  const [selectedBrand, setselectedBrand] = useState();
  const [selectedModel, setsetselectedModel] = useState();
  const [selectedVariant, setselectedVariant] = useState();
  const [selectedOwner, setselectedOwner] = useState();
  const [selectedKMDriven, setselectedKMDriven] = useState();
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const [selectedDate, handleDateChange] = useState(new Date());

  const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const handleClose = () => {
    props.disableSnackBar()
  };

  const handleYearChange = (event) => {
    handleDateChange();
    setShowYearList(false)
    setselectedYear(event.getFullYear())
  }


  const carbrands = ["Chevrolet", "Datsun", "Fiat", "Ford","Honda", "Hyundai", "Isuzu","jeep","Kia","Mahindra","Maruti Suzuki","ToyoTa","Others"];
const carKmDriven = ["0km - 10,000km","10,000km - 20,000km","20,000km - 30,000km","30,000km - 40,000km", "40,000km -50,000km"]


  const carBrandsContainer = carbrands.map((item, index) => {
    return (
      <button
        className={`${selectedBrand === item ? "selected_option car_brand_btn" : "car_brand_btn"}`}
        onClick={() => {
          props.getCarsByBrand(item)
          setselectedBrand(item)
          setShowBrandList(false)
        }}
      >{item}</button>
    )
  })


  const petrolCars = props.carsByModel && props.carsByModel.filter((item, index) => {
    return (
      item.fuelType.toLowerCase().includes("petrol")
    )
  })
  const dieselCars = props.carsByModel && props.carsByModel.filter((item, index) => {
    return (
      item.fuelType.toLowerCase().includes("diesel")
    )
  })

  const petrolCarsList = petrolCars && petrolCars.map((item) => {
    return (
      <button className={`${selectedModel === item ? "selected_option car_brand_btn" : "car_brand_btn"}`}
        onClick={() => {
          setselectedVariant(item.fuelType)
          setShowModelList(false)
        }}
      >{item.fuelType}</button>
    )
  })

  const dieselCarsList = dieselCars && dieselCars.map((item) => {
    return (
      <button className={`${selectedModel === item ? "selected_option car_brand_btn" : "car_brand_btn"}`}
        onClick={() => {
          setselectedVariant(item.fuelType)
          setShowVariantList(false)
        }}
      >{item.fuelType}</button>
    )
  })

  const KmDriven = carKmDriven.map((item, index) => {
    return (
      <button className={`${selectedKMDriven === item ? "selected_option car_brand_btn" : "car_brand_btn"}`}
        onClick={() => {
          setselectedKMDriven(item)
          setKMList(false)
        }}
      >{item}</button>
    )
  })
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const enableShowYearlist = () => {
    // props.getCarsByYears()
    if (props.authToken) {
      setShowYearList(!showYearList)
      setShowBrandList(false)
      setShowModelList(false)
      setShowVariantList(false)
      setShowOwnerList(false)
      setKMList(false)
    }
  }
  const enableShowBrandList = () => {
    setShowYearList(false)
    selectedyear && setShowBrandList(!showBrandList)
    setShowModelList(false)
    setShowVariantList(false)
    setShowOwnerList(false)
    setKMList(false)
  }
  const enableShowModelList = () => {
    setShowYearList(false)
    setShowBrandList(false)
    selectedyear && selectedBrand && setShowModelList(!showModelList)
    setShowVariantList(false)
    setShowOwnerList(false)
    setKMList(false)
  }

  const enableShowMvariantList = () => {
    setShowYearList(false)
    setShowBrandList(false)
    setShowModelList(false)
    selectedModel && setShowVariantList(!showVariantList)
    setShowOwnerList(false)
    setKMList(false)
  }

  const enableShowOwnerList = () => {
    setShowYearList(false)
    setShowBrandList(false)
    setShowModelList(false)
    setShowVariantList(false)
    selectedVariant && setShowOwnerList(!showOwnerList)
    setKMList(false)
  }

  const enableShowKMList = () => {
    setShowYearList(false)
    setShowBrandList(false)
    setShowModelList(false)
    setShowVariantList(false)
    setShowOwnerList(false)
    selectedOwner && setKMList(!showKMList)
  }

  const carDetails = {
    "year": JSON.stringify(selectedyear),
    "brand": selectedBrand,
    "model": selectedModel,
    "variant": selectedVariant,
    "totalOwner": selectedOwner,
    "kmDriven": selectedKMDriven,
    "customerPhoneNo": props.userDetails && props.userDetails.phone ? props.userDetails.phone : ""
  }

  
  const submitCarDetailsforSale = () => {
    props.dispatchSellCar(carDetails)
    setselectedYear("");
    setselectedBrand("");
    setsetselectedModel("");
    setselectedVariant("");
    setselectedOwner("");
    setselectedKMDriven("");
  }


  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.carRegisteredForSell}
        message="Thanks for Choosing Royal cars for Selling your Car. We will get in touch with you shortly"
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
      <div className="container_sell">
        <div className="background_image_wrapper">
          {/* <h1 class="">Check your car's price in 10 secs </h1> */}
          {/* <ul class="marketingContent"> */}
          {/* <li class="marketingItem">
              <div class="pointWrap">
                <span>1</span>
              </div>
              Instant Online Quote
            </li> 
            <li class="marketingItem">
              <div class="pointWrap">
                <span>1</span>
              </div>
              Free Doorstep Evaluation
            </li>
            <li class="marketingItem">
              <div class="pointWrap">
                <span>2</span>
              </div>
              Same Day Payment
            </li>
          {/* </ul> */}
          <h2 class="LandingFormDesktop__subHeading">
            Just a few more steps to go
          </h2>
          <div class="filter_form">
            <FormFields name="Year" value={selectedyear}
              onClick={() => enableShowYearlist()} />
            <FormFields name="Brand" value={selectedBrand} disable={!selectedyear}
              onClick={() => enableShowBrandList()} />
            <FormFields name="Model" value={selectedModel}
              onClick={() => enableShowModelList()}
            />
            <FormFields name="Variant" value={selectedVariant}
              onClick={() => enableShowMvariantList()}
            />
            <FormFields name="Owner" value={selectedOwner}
              onClick={() => enableShowOwnerList()}
            />
            <FormFields name="KM" value={selectedKMDriven}
              onClick={() => enableShowKMList()}
            />
            <button class="search-button"
              onClick={() => { 
                submitCarDetailsforSale()
               }
              }
            >Submit</button>
          </div>
          <div className="filter_form_mobile">
              <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        Year
                        {selectedyear && <p style={{fontSize: "12px"}}>{selectedyear}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                        views={["year"]}
                        label="Please Select Year"
                        value={selectedDate}
                        onChange={e => handleYearChange(e)}
                        classes={{
                          root: classes.datePickerRoot,
                          animated: classes.animated
                        }}
                        disableUnderline={true}
                      />
                    </MuiPickersUtilsProvider>
                    </AccordionDetails>
              </Accordion>
              <Accordion disabled={!selectedyear}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        Brand
                        {selectedBrand && <p style={{fontSize: "12px"}}>{selectedBrand}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                      {carBrandsContainer}
                    </AccordionDetails>
              </Accordion>
              <Accordion disabled={!selectedBrand}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        Variant
                        {selectedVariant && <p style={{fontSize: "12px"}}>{selectedVariant}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                      <TextField
                          id="standard-search"
                          placeholder="Please type Variant"
                          type="search"
                          variant="standard"
                          classes={{
                              root: classes.root,
                          }}
                          InputProps={{ disableUnderline: true }}
                          className="search_text"
                          onChange={e => setselectedVariant(e.target.value)}
                          />
                    </AccordionDetails>
              </Accordion>
              <Accordion disabled={!selectedVariant}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        Model
                        {selectedModel && <p style={{fontSize: "12px"}}>{selectedModel}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                      <div >
                      <TextField
                          id="standard-search"
                          placeholder="Please enter car Model"
                          type="search"
                          variant="standard"
                          classes={{
                              root: classes.root,
                          }}
                          InputProps={{ disableUnderline: true }}
                          className="search_text"
                          onChange={e => setsetselectedModel(e.target.value)}
                          />
                      </div>
                    </AccordionDetails>
              </Accordion>
              <Accordion disabled={!selectedModel}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        Owner
                        {selectedOwner && <p style={{fontSize: "12px"}}>{selectedOwner}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                    <div className="sellcar_filter_container select_owner_filter column_container">
                        <button className={`${selectedOwner ==="1st Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`}  onClick={() => {
                          setselectedOwner("1")
                          setShowOwnerList(false)
                        }}>1st Owner</button>   
                        <button className={`${selectedOwner ==="2nd Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`} 
                        onClick={() => {
                          setselectedOwner("2")
                          setShowOwnerList(false)
                        }}>2nd Owner</button>   
                        <button className={`${selectedOwner ==="2nd Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`} 
                        onClick={() => {
                          setselectedOwner("3")
                          setShowOwnerList(false)
                        }}>3nd Owner</button>   
                        </div>
                    </AccordionDetails>
              </Accordion>
              <Accordion disabled={!selectedOwner}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background: "#FFDF00"}}
                    >
                      <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                        KM Driven
                        {selectedKMDriven && <p style={{fontSize: "12px"}}>{selectedKMDriven}</p>}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backhround: "#d9d7d7"}}>
                      <div >
                      <TextField
                        id="standard-search"
                        placeholder="KMs Driven"
                        type="search"
                        variant="standard"
                        classes={{
                            root: classes.root,
                        }}
                        InputProps={{ disableUnderline: true }}
                        className="search_text"
                        onChange={e => setselectedKMDriven(e.target.value)}
                        />
                      </div>
                    </AccordionDetails>
              </Accordion>
              <div className="sell_submit_mobile">
                <button style={{padding: "10px 30px", width: "50%", fontSize: "18px",
                  fontWeight: "700", background: "red", color: "white"}}
                  onClick={() => {props.dispatchSellCar(carDetails)}}
                  disabled={!selectedKMDriven}
                  >
                  Submit
                </button>
              </div>
          </div>
        {showYearList &&   <div className="sellcar_filter_container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                views={["year"]}
                label="Please Select Year"
                value={selectedDate}
                onChange={e => handleYearChange(e)}
                classes={{
                  root: classes.datePickerRoot,
                  animated: classes.animated
                }}
                disableUnderline={true}
              />
            </MuiPickersUtilsProvider>
          </div>
          }
          {selectedyear && showBrandList && <div className="sellcar_filter_container select_car_filter">
            <div className="column_container car_list_options">
              {carBrandsContainer}
            </div>
          </div>}
          {selectedyear && selectedBrand && showModelList && <div className="sellcar_filter_container select_carbrand_filter">
            <div className="column_container car_list_options">
              <div className="search_container">
                <TextField
                  id="standard-search"
                  placeholder="Please enter car Model"
                  type="search"
                  variant="standard"
                  classes={{
                    root: classes.root,
                  }}
                  InputProps={{ disableUnderline: true }}
                  className="search_text"
                  onChange={e => setsetselectedModel(e.target.value)}
                />
                <button onClick={() => setShowModelList(false)}>
                  Okay
                </button>
              </div>
            </div>
          </div>}
          {selectedModel && showVariantList && <div className="sellcar_filter_container select_variant_filter">
            <div className="column_container car_list_options">
              <div className="search_container">
                <TextField
                  id="standard-search"
                  placeholder="Please type Variant"
                  type="search"
                  variant="standard"
                  classes={{
                    root: classes.root,
                  }}
                  InputProps={{ disableUnderline: true }}
                  className="search_text"
                  onChange={e => setselectedVariant(e.target.value)}
                />
                <button onClick={() => setShowVariantList(false)}>
                  Okay
                </button>
              </div>
            </div>
          </div>}
          {selectedModel && showOwnerList && <div className="sellcar_filter_container select_owner_filter column_container">
            <button className={`${selectedOwner === "1st Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`} onClick={() => {
              setselectedOwner("1")
              setShowOwnerList(false)
            }}>1st Owner</button>
            <button className={`${selectedOwner === "2nd Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`}
              onClick={() => {
                setselectedOwner("2")
                setShowOwnerList(false)
              }}>2nd Owner</button>
            <button className={`${selectedOwner === "2nd Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`}
              onClick={() => {
                setselectedOwner("3")
                setShowOwnerList(false)
              }}>3nd Owner</button>
          </div>}
          {selectedOwner && showKMList && <div className="sellcar_filter_container select_km_filter">
            <div className="column_container car_list_options">
              <div className="search_container">
                <TextField
                  id="standard-search"
                  placeholder="KMs Driven"
                  type="search"
                  variant="standard"
                  classes={{
                    root: classes.root,
                  }}
                  InputProps={{ disableUnderline: true }}
                  className="search_text"
                  onChange={e => setselectedKMDriven(e.target.value)}
                />
                <button onClick={() => setKMList(false)}>
                  Okay
                </button>
              </div>
            </div>
          </div>}
        </div>
        <HowItWorks />

        {/* <Feedback /> */}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    carsByYears: state.reducers.carsByYears,
    carsByBrand: state.reducers.carsByBrand,
    carsByModel: state.reducers.carsByModel,
    carRegisteredForSell: state.reducers.carRegisteredForSell,
    authToken: state.reducers.authToken,
    userDetails: state.reducers.userDetails,
  }

}


const mapDispatchToProps = dispatch => {
  return {
    dispatchSellCar: (data) => {
      dispatch(
        sellCar(data)
      )
    },
    getCarsByYear: (year) => {
      dispatch(
        getCarsByYear(year)
      )
    },
    getCarsByBrand: (brand) => {
      dispatch(
        getCarsByBrand(brand)
      )
    },
    getCarsByModel: (model) => {
      dispatch(
        getCarsByModel(model)
      )
    },
    disableSnackBar: () => {
      dispatch(
        closeSnackBar()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sell));
