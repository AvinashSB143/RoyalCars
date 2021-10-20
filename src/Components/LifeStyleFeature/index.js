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
             <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <input type="checkbox" />
                        <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                  </div>
            
           </div>
           <div>

           </div>
        </div>
    )

}

export default withStyles(styles)(LifeStyleFeature);