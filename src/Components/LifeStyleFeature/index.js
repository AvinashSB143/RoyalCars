import "./lifestylefeature.css";
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import { selectedCar, getAvailableCars } from "../../actions";



const styles = theme => ({ 
    root: {
      background: "#f2f3f5",
      padding: "10px",
      margin: "10px auto"
    },
    input: {
        padding: "16px 0 17px 10px"
    },
    icon_root: {
      position: "absolute",
      right: 0
    } 
  });

const LifeStyleFeature = (props) => {
const {classes} = props;
const [yearSelected, setYearSelected] = useState('');
const [kmDriven, setkmDriven] = useState('');
const [fuelType, setFuelType] = useState({
  petrol: false,
  diesel: false,
  electric: false,
  CNG: false
});
const [bodyType, setBodyType] = useState({
  HatchBack: false,
  Sedan: false,
  SUV: false
});
const [transmissionType, setTransmissionType] = useState({
  automatic: false,
  manual: false
});
const [ownerType, setOwnerType] = useState({
  "1": false,
  "2": false
});
const [category, setCategory] = useState({
  adventure: false,
  commuter: false,
  family: false,
  feature_packed: false,
  luxury: false,
  value: false
});
const [availability, setAvailability] = useState({
  inStock: false,
  booked: false,
  upcoming: false
});

const [budget, setBudget] = useState([0, 200000]);
const [filteredCars, setFilteredCars] = useState({});
const [filteredCarsKMDriven, setFilteredCarsKMDriven] = useState([]);
const [filteredCarsYears, setFilteredCarsYears] = useState([]);
const [filteredCarsList, setFilteredCarsList] = useState(props.availableCarList);
const [selectedBrands, setSelectedBrands] = useState([])
const [selectedModels, setSelectedModels] = useState([])

const updatebudget = (event) => {
  if(event) {
    setFilteredCars({...filteredCars, "budget": event.target.value})
  }
  setBudget(event.target.value)
  return `${event.target.value}`
}

const searchCarByName = (name) => {
  let newCarList = props.availableCarList && props.availableCarList.filter(function(car) {
    return car["brand"] === name || car["model"] === name;
    // keys && keys.every(function(_k) {
    //     return (_k === "year" || _k === "kmDriven") ? typeof car[_k] === "number" && values && Number(values[0][0]) >= car[_k] : values && car[_k] && values[0].includes(car[_k].toString().toLowerCase())
    // })
  })
  setFilteredCarsList(newCarList)
}

const getFilteredCarsList = () => {
  let keys = filteredCars && Object.keys(filteredCars);
  let list = [];
  let values  = filteredCars && Object.values(filteredCars).map(i => {
    if(typeof i === "object") {
    i.forEach((_i) => {
      list.push(_i)
    })
    }
    else {
    list.push(i)
    }
    return list;
    });

  let newCarList = props.availableCarList && props.availableCarList.filter(function(car) {
    return keys && keys.every(function(_k) {
        return (_k === "year" || _k === "kmDriven" || _k === "budget") ? typeof car[_k] === "number" && values && (_k === "kmDriven" || _k === "budget" ) ? Number(values[0][0]) >= car[_k] : Number(values[0][0]) <= car[_k] : values && car[_k] && values[0].includes(car[_k].toString().toLowerCase())
    })
  })
  setFilteredCarsList(newCarList)
}

  const handleYearChange = (event) => {
    setYearSelected(event.target.value);
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "year": event.target.value})
    }
  };
  const handleKMChange = (event) => {
    setkmDriven (event.target.value);
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "kmDriven": event.target.value})
    }
  };

  const handleFuelTypeChange = event => {
    setFuelType({...fuelType, [event.target.value] : event.target.checked});
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "fuelType": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
      for (const [key, value] of Object.entries(filteredCars)) {
        if(key === "fuelType") {
        newObj = filteredCars && filteredCars[key].filter((_val)=>{
           return _val !== event.target.value
          })
        }
      }
    }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleSelectedBrand = event => {
    setSelectedBrands([...selectedBrands, event.target.value]);
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "brand": filteredCars && filteredCars.brand ? [...filteredCars.brand, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
        for (const [key, value] of Object.entries(filteredCars)) {
          if(key === "brand") {
          newObj = filteredCars && filteredCars[key].filter((_val)=>{
             return _val !== event.target.value
            })
          }
        }
      }
     
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleSelectedModel = event => {
    setSelectedModels([...selectedModels, event.target.value]);
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "model": filteredCars && filteredCars.model ? [...filteredCars.model, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
      for (const [key, value] of Object.entries(filteredCars)) {
        if(key === "model") {
        newObj = filteredCars && filteredCars[key].filter((_val)=>{
           return _val !== event.target.value
          })
        }
      }
    }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleBodyTypeChange = event => {
    setBodyType({...bodyType, [event.target.value] : event.target.checked})
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "bodyType": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
      for (const [key, value] of Object.entries(filteredCars)) {
        if(key === "bodyType") {
        newObj = filteredCars && filteredCars[key].filter((_val)=>{
           return _val !== event.target.value
          })
        }
      }
    }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handletransmissionChange =  event => {
    setTransmissionType({...transmissionType, [event.target.value] : event.target.checked})
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "transmission": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
        for (const [key, value] of Object.entries(filteredCars)) {
          if(key === "transmission") {
          newObj = filteredCars &&  filteredCars[key].filter((_val)=>{
             return _val !== event.target.value
            })
          }
        }
      }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleOwner = event => {
    setOwnerType({...ownerType, [event.target.value] : event.target.checked})
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "totalOwner": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
        for (const [key, value] of Object.entries(filteredCars)) {
          if(key === "totalOwner") {
          newObj = filteredCars && filteredCars[key].filter((_val)=>{
             return _val !== event.target.value
            })
          }
        }
      }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleCatogory = event => {
    setCategory({...category, [event.target.value] : event.target.checked})
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "categories": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars){
        for (const [key, value] of Object.entries(filteredCars)) {
          if(key === "categories") {
          newObj = filteredCars && filteredCars[key].filter((_val)=>{
             return _val !== event.target.value
            })
          }
        }
      }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }
  const handleAvailability = event => {
    setAvailability({...availability, [event.target.value] : event.target.checked})
    if(event.target.checked) {
      setFilteredCars({...filteredCars, "isActive": filteredCars && filteredCars.fuelType ? [...filteredCars.fuelType, event.target.value]: [event.target.value]})
    } else {
      let newObj;
      if(filteredCars) {
        for (const [key, value] of Object.entries(filteredCars)) {
          if(key === "isActive") {
          newObj = filteredCars && filteredCars[key].filter((_val)=>{
             return _val !== event.target.value
            })
          }
        }
      }
      setFilteredCars(newObj)
      getFilteredCarsList()
    }
  }

  
  useEffect(() => {
    getFilteredCarsList()
  },[filteredCars, filteredCarsKMDriven, filteredCarsYears])

  useEffect(() => {
    if(props.searchedCarName) {
        searchCarByName(props.searchedCarName)
    }else {
      getFilteredCarsList()
    }
  },[props.searchedCarName])

  const carList = (filteredCarsList && filteredCarsList.length !==0 ? filteredCarsList : props.availableCarList && props.availableCarList).map((car) => {
    return (
              <div className="column_container car_list_buyCar hide_option">
                  <Link to = "/buyCar/cars" onClick={() => props.seletedCar(car)}>
                  <img className="filter_car_img" src={`http://3.111.30.111:5000/${car.imagePath}`} />
                  </Link>
                  <div className="column_container"  style={{position: "relative"}}>
                     <span className="row_container description"> <h4 className="car_name_info">{car.year}</h4><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4><FavoriteBorderIcon classes={{root: classes.icon_root}}/></span>
                     <div className="row_container car_km_ifo">
                       <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                     </div>
                     {/* <div>
                       <h3 className="car_info_amount">Rs. {car.amount}</h3 >
                     </div> */}
                  </div>
              </div>
    )
  }) 

  let showFilteredCarList = filteredCarsList.length !== 0 && filteredCarsList.map((car) => {
    return (
            <div className="column_container car_list_buyCar hide_option">
                <Link to = "/buyCar/cars" onClick={() => props.seletedCar(car)}>
                <img className="filter_car_img" src={`http://3.111.30.111:5000/${car.imagePath}`} />
                </Link>
                <div className="column_container"  style={{position: "relative"}}>
                   <span className="row_container description"> <h4 className="car_name_info">{car.year}</h4><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4><FavoriteBorderIcon classes={{root: classes.icon_root}}/></span>
                   <div className="row_container car_km_ifo">
                     <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                   </div>
                </div>
            </div>
  )
  })

  const clearAllFilters = () => {
    setFilteredCars([]);
    setFilteredCarsYears([]);
    setFilteredCarsKMDriven([])
  }

  
    return (
      <div className="main_container feature_container mobile_buy_main_container">
        <div className="lifeStyle_filters main_container column_container hide_option">
          <div className="budget_slider column_container">
            <p>Budget</p>
            <div className="row_container budget_range">
              <p>{budget[0]}</p>
              <p>{budget[1]}</p>
            </div>
            <Box>
              <Slider
                defaultValue={50000}
                onChange={updatebudget}
                valueLabelDisplay="auto"
                step={50000}
                marks
                min={50000}
                max={2000000}
              />
              <p style={{
                position: "absolute",
                right: "0",
                top: "0",
                fontSize: "18px",
                fontWeight: "500"
              }}>{budget}</p>
            </Box>
          </div>
          <div>
            <p> Make + Model</p>
            {/* <div className="search_container car_model_search">
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
              <SearchIcon className="search_icon" />
            </div> */}
          </div>
          <div className="make__model">
          <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="maruti suzuki"
                      />
                    }
                    label="Maruti Suzuki"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Hyundai"
                      />
                    }
                    label="Hyundai"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Honda"
                      />
                    }
                    label="Honda"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Ford"
                      />
                    }
                    label="Ford"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Renault"
                      />
                    }
                    label="Renault"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Volkswagen"
                      />
                    }
                    label="Volkswagen"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Mahindra"
                      />
                    }
                    label="Mahindra"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Skoda"
                      />
                    }
                    label="Skoda"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Tata"
                      />
                    }
                    label="Tata"
                  />
            </AccordionSummary>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <FormControlLabel
                    control={
                      <Checkbox
                        // checked={}
                        onChange={handleSelectedBrand}
                        value="Toyata"
                      />
                    }
                    label="Toyata"
                  />
            </AccordionSummary>
            
            </Accordion>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset">
                <FormLabel component="legend">Year</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={yearSelected}
                  onChange={handleYearChange}
                >
                  <FormControlLabel
                    value="2019"
                    control={<Radio />}
                    label="2019 & above"
                  />
                  <FormControlLabel
                    value="2017"
                    control={<Radio />}
                    label="2017 & above"
                  />
                  <FormControlLabel
                    value="2015"
                    control={<Radio />}
                    label="2015 & above"
                  />
                  <FormControlLabel
                    value="2010"
                    control={<Radio />}
                    label="2010 & above"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset">
                <FormLabel component="legend">KM Driven</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={kmDriven}
                  onChange={handleKMChange}
                >
                  <FormControlLabel
                    value="10000"
                    control={<Radio />}
                    label="10000Km and less"
                  />
                  <FormControlLabel
                    value="30000"
                    control={<Radio />}
                    label="30000km and less"
                  />
                  <FormControlLabel
                    value="50000"
                    control={<Radio />}
                    label="50000km and less"
                  />
                  <FormControlLabel
                    value="70000"
                    control={<Radio />}
                    label="75000km and less"
                  />
                  <FormControlLabel
                    value="100000"
                    control={<Radio />}
                    label="100000km and less"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Fuel Type</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fuelType.petrol}
                        onChange={handleFuelTypeChange}
                        value="petrol"
                      />
                    }
                    label="Petrol"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fuelType.diesel}
                        onChange={handleFuelTypeChange}
                        value="diesel"
                      />
                    }
                    label="diesel"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fuelType.electric}
                        onChange={handleFuelTypeChange}
                        value="electric"
                      />
                    }
                    label="electric"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fuelType.CNG}
                        onChange={handleFuelTypeChange}
                        value="CNG"
                      />
                    }
                    label="CNG"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Body Type</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bodyType.HatchBack}
                        onChange={handleBodyTypeChange}
                        value="HatchBack"
                      />
                    }
                    label="HatchBack"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bodyType.Sedan}
                        onChange={handleBodyTypeChange}
                        value="Sedan"
                      />
                    }
                    label="Sedan"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bodyType.SUV}
                        onChange={handleBodyTypeChange}
                        value="SUV"
                      />
                    }
                    label="SUV"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Transmission</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={transmissionType.automatic}
                        onChange={handletransmissionChange}
                        value="automatic"
                      />
                    }
                    label="automatic"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={transmissionType.manual}
                        onChange={handletransmissionChange}
                        value="manual"
                      />
                    }
                    label="manual"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Owner</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ownerType["1"]}
                        onChange={handleOwner}
                        value="1"
                      />
                    }
                    label="1st Owner"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ownerType["2"]}
                        onChange={handleOwner}
                        value="2"
                      />
                    }
                    label="2nd Owner"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ownerType["3"]}
                        onChange={handleOwner}
                        value="3"
                      />
                    }
                    label="3rd Owner"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Category</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.adventure}
                        onChange={handleCatogory}
                        value="adventure"
                      />
                    }
                    label="Adventure"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.commuter}
                        onChange={handleCatogory}
                        value="commuter"
                      />
                    }
                    label="Commuter"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.family}
                        onChange={handleCatogory}
                        value="family"
                      />
                    }
                    label="Family"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.Featured_packed}
                        onChange={handleCatogory}
                        value="feature_packed"
                      />
                    }
                    label="Feature Packed"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.luxury}
                        onChange={handleCatogory}
                        value="luxury"
                      />
                    }
                    label="Luxury"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={category.value}
                        onChange={handleCatogory}
                        value="value"
                      />
                    }
                    label="value"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className="filter_option_container">
            <div className="search_container car_model_search">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Availability</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={availability.inStock}
                        onChange={handleAvailability}
                        value="inStock"
                      />
                    }
                    label="in stock"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={availability.booked}
                        onChange={handleAvailability}
                        value="booked"
                      />
                    }
                    label="Booked"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={availability.upcoming}
                        onChange={handleAvailability}
                        value="upcoming"
                      />
                    }
                    label="Upcoming"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="colunm_container featured_filtered_cars mobile_buy_main_container">
          <ul>
            <Link to="/homePage" style={{marginRight: "15px"}}>HOME</Link>
            <Link>USED CARS</Link>
          </ul>
          <div className="row_container  selected_filter_list hide_option">
               <button className="clear_Filter_btn" onClick={clearAllFilters}> <ReplayIcon /> Clear All Filters</button>
             </div>
             {props.availableCarList && props.availableCarList.length !== 0 && <p>Used Family Cars</p>}
             <div className="row_container car_list_container"> 
             {filteredCarsList && filteredCarsList.length !==0 ? <> {showFilteredCarList}</>  : filteredCars && Object.keys(filteredCars).length !== 0 ? 
             <div className="empty_car_list hide_option">
                No Cars Available..!
              </div>
             : props.availableCarList && props.availableCarList.length !== 0 ?  
               <>
               {carList}
               </>
              : (
               <div className="empty_car_list hide_option">
                 No Cars Available..!
               </div>
             )
            }
          </div>
        </div>
      </div>
    );

}

const mapStateToProps = state => {
  return{
      availableCarList: state.reducers.availableCarList,
      searchedCarName: state.reducers.searchedCarName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seletedCar: data => {
      dispatch(
        selectedCar(data)
      )
    },
    getCustomerCars: () => {
      dispatch(
        getAvailableCars()
    )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LifeStyleFeature));