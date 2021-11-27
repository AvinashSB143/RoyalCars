import "./lifestylefeature.css";
import { useState } from 'react';
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
  "1st_Owner": false,
  "2nd_Owner": false
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

const marks = [
    {
      value: 500,
      label: '500',
    },
    {
      value: 1000000,
      label: '1000000',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleYearChange = (event) => {
    setYearSelected(event.target.value);
  };
  const handleKMChange = (event) => {
    setkmDriven (event.target.value);
  };

  const handleFuelTypeChange = event => {
    setFuelType({...fuelType, [event.target.value] : event.target.checked})
  }
  const handleBodyTypeChange = event => {
    setBodyType({...bodyType, [event.target.value] : event.target.checked})
  }
  const handletransmissionChange =  event => {
    setTransmissionType({...transmissionType, [event.target.value] : event.target.checked})
  }
  const handleOwner = event => {
    setOwnerType({...ownerType, [event.target.value] : event.target.checked})
  }
  const handleCatogory = event => {
    setCategory({...category, [event.target.value] : event.target.checked})
  }
  const handleAvailability = event => {
    setAvailability({...availability, [event.target.value] : event.target.checked})
  }

  const carList = props.availableCarList && props.availableCarList.map((car) => {
    return (
     <div className="column_container car_list">
                  <Link to = "/buyCar/cars">
                  <img className="filter_car_img" src={car.img} />
                  </Link>
                  <div className="column_container"  style={{position: "relative"}}>
                     <span className="row_container description"> <h4 className="car_name_info">{car.mode}</h4><h4 className="car_name_info">{car.name}</h4><FavoriteBorderIcon classes={{root: classes.icon_root}}/></span>
                     <div className="row_container car_km_ifo">
                       <span className="row_container car_details"><p className="car_info">{car.KMDriven}</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.orientationType}</p></span>
                     </div>
                     <div>
                       <h3 className="car_info_amount">Rs. {car.amount}</h3 >
                     </div>
                  </div>
                </div>
    )
  }) 
  
    return(
        <div className="main_container feature_container">
           <div className="lifeStyle_filters main_container column_container">
             <div>
                <p>Budget</p>
                <Box sx={{ width: 300 }}>
                <Slider
                aria-label="Custom marks"
                defaultValue={50000}
                getAriaValueText={valuetext}
                // step={50000}
                // valueLabelDisplay="auto"
                marks={marks}
                />
                </Box>
             </div>
             <div>
                <p> Make + Model</p>
                <div className="search_container car_model_search">
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
                </div>
                <div style={{width: "300px"}}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <input type="checkbox" />
                        <Typography>Maruti Suzuki</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <input type="checkbox" />
                        <Typography>Baleno</Typography>
                        </AccordionSummary>
                        </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <input type="checkbox" />
                        <Typography>Hyundai</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <input type="checkbox" />
                        <Typography>Creta</Typography>
                        </AccordionSummary>
                        </Accordion>
                        </AccordionDetails>
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
                    <FormControlLabel value="2019" control={<Radio />} label="2019 % above" />
                    <FormControlLabel value="2017" control={<Radio />} label="2017 % above" />
                    <FormControlLabel value="2015" control={<Radio />} label="2015 % above" />
                    <FormControlLabel value="2010" control={<Radio />} label="2010 % above" />
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
                    <FormControlLabel value="10000" control={<Radio />} label="10000Km and less" />
                    <FormControlLabel value="30000" control={<Radio />} label="30000km and less" />
                    <FormControlLabel value="50000" control={<Radio />} label="50000km and less" />
                    <FormControlLabel value="70000" control={<Radio />} label="75000km and less" />
                    <FormControlLabel value="100000" control={<Radio />} label="100000km and less" />
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
                              <Checkbox checked={fuelType.petrol} onChange={handleFuelTypeChange} value="petrol" />
                            }
                            label="Petrol"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={fuelType.diesel} onChange={handleFuelTypeChange} value="diesel" />
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
                              <Checkbox checked={bodyType.HatchBack} onChange={handleBodyTypeChange} value="HatchBack" />
                            }
                            label="HatchBack"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={bodyType.Sedan} onChange={handleBodyTypeChange} value="Sedan" />
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
                              <Checkbox checked={transmissionType.automatic} onChange={handletransmissionChange} value="automatic" />
                            }
                            label="automatic"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={transmissionType.manual} onChange={handletransmissionChange} value="manual" />
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
                              <Checkbox checked={ownerType["1st_Owner"]} onChange={handleOwner} value="1st_Owner" />
                            }
                            label="1st Owner"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={ownerType["2nd_Owner"]} onChange={handleOwner} value="2nd_Owner" />
                            }
                            label="2nd Owner"
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
                              <Checkbox checked={category.adventure} onChange={handleCatogory} value="adventure" />
                            }
                            label="Adventure"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={category.commuter} onChange={handleCatogory} value="commuter" />
                            }
                            label="Commuter"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={category.family} onChange={handleCatogory} value="family" />
                            }
                            label="Family"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={category.Featured_packed} onChange={handleCatogory} value="feature_packed" />
                            }
                            label="Feature Packed"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={category.luxury} onChange={handleCatogory} value="luxury" />
                            }
                            label="Luxury"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={category.value} onChange={handleCatogory} value="value" />
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
                              <Checkbox checked={availability.inStock} onChange={handleAvailability} value="inStock" />
                            }
                            label="in stock"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={availability.booked} onChange={handleAvailability} value="booked" />
                            }
                            label="Booked"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={availability.upcoming} onChange={handleAvailability} value="upcoming" />
                            }
                            label="Upcoming"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
             </div>
            
           </div>
           <div className="colunm_container featured_filtered_cars">
             <ul>
               <li>HOME</li>
               <li>USED CARS</li>
               <li>FAMILY CARS</li>
             </ul>
             <div className="row_container  selected_filter_list">
               <button className="clear_Filter_btn"> <ReplayIcon /> Clear All</button>
             </div>
             {props.availableCarList && props.availableCarList.length !== 0 && <p>Used Family Cars</p>}
             <div className="row_container car_list_container"> 
             {props.availableCarList && props.availableCarList.length !== 0 ? (
               <>
               {carList}
               </>
             ) : (
               <div className="empty_car_list">
                 No Cars Available..!
               </div>
             )
            }
             </div>
           </div>
        </div>
    )

}

const mapStateToProps = state => {
  return{
      availableCarList: state.reducers.availableCarList,
  }
  
}


export default connect(mapStateToProps)(withStyles(styles)(LifeStyleFeature));