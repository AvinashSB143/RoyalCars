import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="nav_header">
                  <div className="list_item">  BUDGET <ArrowDropDownIcon /></div>
                  <div className="list_item"> MAKE AND MODEL<ArrowDropDownIcon /></div>
                  <div className="list_item"> YEAR<ArrowDropDownIcon /></div>
                  <div className="list_item"> FUEL<ArrowDropDownIcon /></div>
                  <div className="list_item"> KM DRIVEN<ArrowDropDownIcon /></div>
                  <div className="list_item"> BODY TYPE<ArrowDropDownIcon /></div>
                  <div className="list_item"> TRANSMISSION<ArrowDropDownIcon /></div>
           </div>
    )

}

export default NavBar;

