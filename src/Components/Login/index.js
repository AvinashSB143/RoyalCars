import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
  
const SliderTest = () => {
  
  // Our States
  const [value, setValue] =  React.useState([50000,2000000]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Price Range Selector in ReactJS?</h3>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
  );
}
  
export default SliderTest;