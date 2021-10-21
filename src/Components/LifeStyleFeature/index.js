import "./lifestylefeature.css";
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