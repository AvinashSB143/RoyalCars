import { useState } from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./navBar.css";
import "../../styles/styles.css";


const NavBar = () => {
    const [showBudgetOptions, setShowBudgetOptions] = useState(false);
    const [showModelOptions, setShowModelOptions] = useState(false);
    const [showYearsOptions, setShowYearOptions] = useState(false);
    const [showFuelOptions, setShowFuelOptions] = useState(false);
    const [showKMDriver, setShowKMDrivenOptions] = useState(false);
    const [showBodyType, setShowBodyType] = useState(false);
    const [showTransmissionOptions, setShowTransmissionOptions] = useState(false);

    const expandBudgetOptions = <div className="main_container column_container budget_expanded_section" >
         <li className="budget_options" onMouseOver={() => setShowBudgetOptions(true)} >
              Under 3 Lakhs
         </li>
         <li className="budget_options" >
              3 - 4 lakhs
         </li>
         <li className="budget_options">
         4 - 5 lakhs
         </li>
         <li className="budget_options">
             5-6 lakhs
         </li>
         <li className="budget_options">
              6 - 8 lakhs         </li>
         <li className="budget_options">
            more than 10 lakhs
         </li>
    </div>
    return (
        <div className="row_container nav_header" 
                        //   onMouseOut={() => setShowBudgetOptions(false) }
        >
                  <div className="list_item" onMouseOver={() => setShowBudgetOptions(true)} 
                //   onMouseOut={() => setShowBudgetOptions(false) }
                  >  BUDGET <ArrowDropDownIcon /></div>
                  <div className="list_item"> MAKE AND MODEL<ArrowDropDownIcon /></div>
                  <div className="list_item"> YEAR<ArrowDropDownIcon /></div>
                  <div className="list_item"> FUEL<ArrowDropDownIcon /></div>
                  <div className="list_item"> KM DRIVEN<ArrowDropDownIcon /></div>
                  <div className="list_item"> BODY TYPE<ArrowDropDownIcon /></div>
                  <div className="list_item"> TRANSMISSION<ArrowDropDownIcon /></div>
                  {showBudgetOptions && expandBudgetOptions}
           </div>
    )
}

export default NavBar;

