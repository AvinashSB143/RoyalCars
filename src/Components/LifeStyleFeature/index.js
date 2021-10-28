import "./lifestylefeature.css";
import { useState } from 'react';
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



const styles = theme => ({ 
    root: {
      background: "#f2f3f5",
      padding: "10px",
      margin: "10px auto"
    },
    input: {
        padding: "16px 0 17px 10px"
    },
  });

const LifeStyleFeature = (props) => {
const {classes} = props;
const [yearSelected, setYearSelected] = useState('');
const [kmDriven, setkmDriven] = useState('');
const [fuelType, setFuelType] = useState([]);

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

  const handleFuelTypeChange = name => event => { };
  const handleBodyTypeChange = name => event => { };
  const handletransmissionChange = name => event => { };
  const handleOwner = name => event => { };
  const handleCatogory = name => event => { };
  const handleAvailability = name => event => { };


  const handleCategory = () => {}
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
                              <Checkbox checked={false} onChange={handleFuelTypeChange('petrol')} value="petrol" />
                            }
                            label="Petrol"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleFuelTypeChange('diesel')} value="diesel" />
                            }
                            label="diesel"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={antoine}
                                checked={false}
                                onChange={handleFuelTypeChange('electric')}
                                value="electric"
                              />
                            }
                            label="electric"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={antoine}
                                checked={false}
                                onChange={handleFuelTypeChange('CNG')}
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
                              <Checkbox checked={false} onChange={handleBodyTypeChange('HatchBack')} value="HatchBack" />
                            }
                            label="HatchBack"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleBodyTypeChange('Sedan')} value="Sedan" />
                            }
                            label="Sedan"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={antoine}
                                checked={false}
                                onChange={handleBodyTypeChange('SUV')}
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
                              <Checkbox checked={false} onChange={handletransmissionChange('automatic')} value="automatic" />
                            }
                            label="automatic"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handletransmissionChange('manual')} value="manual" />
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
                              <Checkbox checked={false} onChange={handleOwner('1st Owner')} value="1st Owner" />
                            }
                            label="1st Owner"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleOwner('2nd Owner')} value="2nd Owner" />
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
                              <Checkbox checked={false} onChange={handleCatogory('Adventure')} value="Adventure" />
                            }
                            label="Adventure"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleCatogory('Commuter')} value="Commuter" />
                            }
                            label="Commuter"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleCatogory('Family')} value="Family" />
                            }
                            label="Family"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleCatogory('Feature Packed')} value="Feature Packed" />
                            }
                            label="Feature Packed"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleCatogory('Luxury')} value="Luxury" />
                            }
                            label="Luxury"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleCatogory('value')} value="value" />
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
                              <Checkbox checked={false} onChange={handleAvailability('in stock')} value="in stock" />
                            }
                            label="in stock"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleAvailability('Booked')} value="Booked" />
                            }
                            label="Booked"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} onChange={handleAvailability('Upcoming')} value="Upcoming" />
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
             <p>Used Family Cars</p>
             <div className="row_container"> 
                <div className="column_container">
                  <img className="filter_car_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                  <div className="column_container">
                  <span className="row_container description"> <p>Ford Eco Sport</p><FavoriteBorderIcon /></span>
                 </div>
             </div>
             </div>
           </div>
        </div>
    )

}

export default withStyles(styles)(LifeStyleFeature);