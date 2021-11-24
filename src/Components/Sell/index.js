import React, {useState} from "react";
import {connect} from 'react-redux';
import "./sell.css";
import Feedback from "../Feedback";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {sellCar} from "../../actions"


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
        src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png"
        alt="hiw-1.png"
        class=""
      />
      <div class="HowItsWork__contentSection">
        <p class="HowItsWork__heading">Instant online quote</p>
        <p class="HowItsWork__details">
          Fill in a few details about your car for an instant quote.
        </p>
        <a class="styles__btn" href="/check-car-valuation/">
          Get Quote
          <svg
            transform="rotate(0 0 0)"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#6300A3"
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
          </svg>
        </a>
      </div>
    </div>
  );
};
export const HowItWorks = () => {
  return (
    <div>
      <h3>Selling your car made simple</h3>
      <div class="HowItsWork__listWrap">
        <HowItsWork__listItem />
        <div class="HowItsWork__listItem">
          <img
            src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png"
            alt="hiw-2.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <p class="HowItsWork__heading">Free Doorstep Evaluation</p>
            <p class="HowItsWork__details">
              Schedule the evaluation at your convenience, from the comfort of
              your home or workplace
            </p>
            <a class="styles__btn" href="/check-car-valuation/">
              Schedule Evaluation
              <svg
                transform="rotate(0 0 0)"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#6300A3"
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
            </a>
          </div>
        </div>
        <div class="HowItsWork__listItem">
          <img
            src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-3.png"
            alt="hiw-3.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <p class="HowItsWork__heading">Same day payment</p>
            <p class="HowItsWork__details">
              Complete payment and paperwork on-the-spot
            </p>
            <a
              class="styles__btn"
              data-category="how_it_works"
              data-label="Sell Car"
              href="/check-car-valuation/"
            >
              Sell Car{" "}
              <svg
                transform="rotate(0 0 0)"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#6300A3"
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
              </svg>
            </a>
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

const {classes}  = props;
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


  const carModelsYear = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
  const carbrands = ["Chevrolet", "Datsun", "Fiat", "Ford","Honda", "Hyundai", "Isuzu","jeep","Kia","Mahindra","Maruti Suzuki"];
  const carModels = ["Chevrolet", "Datsun", "Fiat", "Ford","Honda", "Hyundai", "Isuzu","jeep","Kia","Mahindra","Maruti Suzuki"];
const carKmDriven = ["0km - 10,000km","10,000km - 20,000km","20,000km - 30,000km","30,000km - 40,000km", "40,000km -50,000km"]

const yearListContainer = carModelsYear.map((item, index) => {
  return(
  <button className={`${item===selectedyear ? "selected_option model_year_btn" : "model_year_btn"}`} 
  onClick={()=> {
    setselectedYear(item) 
    setShowYearList(false)
  }
  
  }>{item}</button>
  )
})


const carBrandsContainer = carbrands.map((item, index) => {
  return(
  <button className={`${selectedBrand === item ? "selected_option car_brand_btn" : "car_brand_btn"}`} 
  onClick={() => {
    setselectedBrand(item)
    setShowBrandList(false)
  }}
  >{item}</button>
  )
})

const carBrandsFiltered = carModels.map((item, index) => {
  return(
  <button className={`${selectedModel === item ? "selected_option car_brand_btn" : "car_brand_btn"}`} 
  onClick={() => {
    setsetselectedModel(item)
    setShowModelList(false)
  }}
  >{item}</button>
  )
})

const KmDriven = carKmDriven.map((item, index) => {
  return(
  <button className= {`${selectedKMDriven === item ? "selected_option car_brand_btn" : "car_brand_btn"}`}
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
  setShowYearList(!showYearList)
  setShowBrandList(false)
  setShowModelList(false)
  setShowVariantList(false)
  setShowOwnerList(false)
  setKMList(false)
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
  selectedModel && setShowOwnerList(!showOwnerList)
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
  selectedyear,
  selectedBrand,
  selectedModel,
  selectedVariant,
  selectedOwner,
  selectedKMDriven
}


  return (
    <>
      <div className="container_sell">
        <div className="background_image_wrapper">
          <h1 class="">Check your car's price in 10 secs </h1>
          <ul class="marketingContent">
            <li class="marketingItem">
              <div class="pointWrap">
                <span>1</span>
              </div>
              Instant Online Quote
            </li>
            <li class="marketingItem">
              <div class="pointWrap">
                <span>2</span>
              </div>
              Free Doorstep Evaluation
            </li>
            <li class="marketingItem">
              <div class="pointWrap">
                <span>3</span>
              </div>
              Same Day Payment
            </li>
          </ul>
          <h2 class="LandingFormDesktop__subHeading">
            Just a few more steps to go
          </h2>
          <div class="filter_form">
            <FormFields name="Year" value={selectedyear} 
            onClick={() => enableShowYearlist()} />
            <FormFields name="Brand" value={selectedBrand} disable={!selectedyear}
              onClick={() => enableShowBrandList()}/>
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
            onClick={() => props.dispatchSellCar(carDetails)}
            >Search</button>
          </div>
        {showYearList &&   <div className="sellcar_filter_container">
            {yearListContainer}
          </div>
        }
         {selectedyear && showBrandList && <div className="sellcar_filter_container select_car_filter">
          <div className="column_container car_list_options">
                  <div className="search_container">
                    <TextField
                    id="standard-search"
                    placeholder="Search field"
                    type="search"
                    variant="standard"
                    classes={{
                        root: classes.root,
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="search_text"
                    />
                    <SearchIcon className="search_icon"/>
                  </div>
                  {carBrandsContainer}
          </div>
          </div>}
         {selectedyear && selectedBrand && showModelList && <div className="sellcar_filter_container select_carbrand_filter">
          <div className="column_container car_list_options">
                  <div className="search_container">
                    <TextField
                    id="standard-search"
                    placeholder="Search field"
                    type="search"
                    variant="standard"
                    classes={{
                        root: classes.root,
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="search_text"
                    />
                    <SearchIcon className="search_icon"/>
                  </div>
                  {carBrandsFiltered}
          </div>
          </div>}
         {selectedModel && showVariantList &&  <div className="sellcar_filter_container select_variant_filter">
          <div className="column_container car_list_options">
                  <div className="search_container">
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                      classes={{
                        flexContainer: classes.flexContainer
                      }}
                      >
                        <Tab label="Petro" />
                        <Tab label="Diesel" />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Item Two
                    </TabPanel>
                  </Box>
                  </div>
          </div>
          </div>}
        { selectedModel && showOwnerList && <div className="sellcar_filter_container select_owner_filter column_container">
          <button className={`${selectedOwner ==="1st Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`}  onClick={() => {
            setselectedOwner("1st Owner")
            setShowOwnerList(false)
          }}>1st Owner</button>   
          <button className={`${selectedOwner ==="2nd Owner" ? "selected_option select_owner_btn" : "select_owner_btn"}`} 
          onClick={() => {
            setselectedOwner("2nd Owner")
            setShowOwnerList(false)
          }}>2nd Owner</button>   
          </div>}
          {selectedOwner && showKMList &&  <div className="sellcar_filter_container select_km_filter">
                <div className="column_container car_list_options">
                  {KmDriven}
                 </div>
          </div>}
        </div>
        <HowItWorks />
        <div class="HowItsWork_Button_Container">
          <button class="HowItsWorkVideoButton">
            <span class="btnInnerContent">
              Watch how it works{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                viewBox="0 0 76 76"
              >
                <g transform="translate(-535.437 -1563.437) scale(1.5 1.5)">
                  <path
                    d="M-89.991-5241.6l20.392,13.184-20.392,12Z"
                    transform="translate(464.721 6296.643)"
                    fill="#fff"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <Feedback />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return{ }
  
}


const mapDispatchToProps = dispatch => {
  return {
    dispatchSellCar: (data) => {
          dispatch(
              sellCar(data)
              )
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sell));
