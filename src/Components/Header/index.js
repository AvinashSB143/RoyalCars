import { useEffect, useState, Component } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUpIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@material-ui/core/styles';
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
//                 {/* {expandArrowIcon ? <ArrowDropUpIcon /> :  <ArrowDropDownIcon /> } */}
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
            expandArrowIcon: false
        }
    }

    changeArrow = () => {
        this.setState({expandArrowIcon: !this.state.expandArrowIcon},() => {
            this.setState({expandArrowIcon: this.state.expandArrowIcon})
        })
        console.log(this.state.expandArrowIcon)
    }
    
    render() {
    const {classes} = this.props;
        return(
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
                            <b onMouseOver={this.changeArrow}
                        onMouseOut={this.changeArrow} style={{fontSize: "16px"}} >
                                Buy Car
                            </b>
                            {this.state.expandArrowIcon ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon /> }
                        </div>
                        <div>
                            <b style={{fontSize: "16px"}}>
                               Sell Car
                            </b>
                        </div>
                        <div className="header_buy_car">
                            <b style={{fontSize: "16px"}}>
                                more
                            </b>
                            <ArrowDropDownIcon />
                            {/* <ArrowDropUpIcon /> */}
                        </div>
                        <div>
                            <FavoriteBorderIcon />
                        </div>
                        <div className="header_SignIn_bar">
                            <p>
                                Hello, Sign in
                            </p>
                            <div className="header_account">
                            <b style={{fontSize: "16px"}}>Account
                            </b>
                            {/* <ArrowDropUpIcon /> */}
                            <ArrowDropDownIcon />
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
                )
    }
}

export default withStyles(styles)(Header);