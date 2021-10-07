import { useEffect, useState, Component } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "../../styles/styles.css";
import "./header.css";
import Logo from "../../images/Logo.png";

const styles = theme => ({ 
    root: {
      background: "#f2f3f5",
      padding: "10px"
    },
    input: {
        padding: "16px 0 17px 10px"
    }
    
  });

// const Header = (props) => {

//   const { classes } = props;
    
//     return(
//         <div className="header_container"> 
//             <div className="header_logo">
//             <img src={Logo} width="100px" height="100px" />
//             </div>
//             <div className="header_search_bar">
//             <div className="search_container">
//                 <TextField
//                 id="standard-search"
//                 placeholder="Search field"
//                 type="search"
//                 variant="standard"
//                 classes={{
//                     root: classes.root,
//                     input: classes.input
//                  }}
//                 InputProps={{ disableUnderline: true }}
//                 className="search_text"
//                 />
//                  <SearchIcon className="search_icon"/>
//             <div>
                    
//                 </div>

//             </div>
//             </div>
//             <div className="header_buy_car" 
//             >
//                 <b style={{fontSize: "16px"}} >
//                     Buy Car
//                 </b>
//                 {/* {expandBuyCarSection ? <ArrowDropUpIcon /> :  <ArrowDropDownIcon /> } */}
//                <ArrowDropDownIcon /> 
//             </div>
//             <div>
//                 <b style={{fontSize: "16px"}}>
//                    Sell Car
//                 </b>
//             </div>
//             <div className="header_buy_car">
//                 <b style={{fontSize: "16px"}}>
//                     more
//                 </b>
//                 <ArrowDropDownIcon />
//                 {/* <ArrowDropUpIcon /> */}
//             </div>
//             <div>
//                 <FavoriteBorderIcon />
//             </div>
//             <div className="header_SignIn_bar">
//                 <p>
//                     Hello, Sign in
//                 </p>
//                 <div className="header_account">
//                 <b style={{fontSize: "16px"}}>Account
//                 </b>
//                 {/* <ArrowDropUpIcon /> */}
//                 <ArrowDropDownIcon />
//                 </div>
//             </div>
//             <div className="header_SignIn_bar">
//                 <p>
//                     call at
//                 </p>
//                 <b style={{fontSize: "16px"}}>7788665544
//                 </b>
//             </div>
//         </div>
//     )
// }

class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            expandBuyCarSection: false,
            expandMoreSection: false,
            expandAccountSection: false
        }
    }

    changeArrow = (value) => {
        if(value) {
        this.setState({
            expandBuyCarSection: value === "buycar" ? !this.state.expandBuyCarSection : this.state.expandBuyCarSection,
            expandMoreSection: value === "more" ? !this.state.expandMoreSection : this.state.expandMoreSection,
            expandAccountSection: value === "account" ? !this.state.expandAccountSection: this.state.expandAccountSection
        })
    } 
    else {
        this.setState({
            expandBuyCarSection: false,
            expandMoreSection: false,
            expandAccountSection: false
        })
    }
    }
    
    render() {
    const {classes} = this.props;
        return(
            <div>
             <div className="header_container"> 
                         <div className="header_logo">
                         <img src={Logo} width="100px" height="100px" />
                         </div>
                         <div className="header_search_bar">
                         <div className="search_container">
                             <TextField
                            id="standard-search"
                            placeholder="Search field"
                            type="search"
                            variant="standard"
                            classes={{
                                root: classes.root,
                                input: classes.input
                             }}
                            InputProps={{ disableUnderline: true }}
                            className="search_text"
                            />
                             <SearchIcon className="search_icon"/>
                        <div>
                                
                            </div>
            
                        </div>
                        </div>
                        <div className="header_buy_car" 
                        
                        >
                            <b onMouseOver={() => this.changeArrow("buycar")}
                               onMouseOut={() => this.changeArrow()} style={{fontSize: "16px"}} >
                                Buy Car
                            </b>
                            {this.state.expandBuyCarSection ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon /> }
                        </div>
                        <div>
                            <b style={{fontSize: "16px"}}>
                               Sell Car
                            </b>
                        </div>
                        <div className="header_buy_car">
                            <b onMouseOver={() => this.changeArrow("more")}
                               onMouseOut={() => this.changeArrow()} style={{fontSize: "16px"}}>
                                more
                            </b>
                            {this.state.expandMoreSection ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon /> }
                        </div>
                        <div>
                            <FavoriteBorderIcon />
                        </div>
                        <div className="header_SignIn_bar">
                            <p>
                                Hello, Sign in
                            </p>
                            <div className="header_account">
                            <b onMouseOver={() => this.changeArrow("account")}
                               onMouseOut={() => this.changeArrow()} style={{fontSize: "16px"}}>Account
                            </b>
                            {this.state.expandAccountSection ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon /> }
                            </div>
                        </div>
                        <div className="header_SignIn_bar">
                            <p>
                                call at
                            </p>
                            <b style={{fontSize: "16px"}}>7788665544
                            </b>
                        </div>
                    </div>
                    <div className="main_container column_container">
                        <div className="main_container">
                             <h4>
                                 About Us
                             </h4>

                        </div>
                    </div>
                   </div> 
            )
    }
}

export default withStyles(styles)(Header);