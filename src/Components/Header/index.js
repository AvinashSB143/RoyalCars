import {Link} from 'react-router-dom';
import { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DescriptionIcon from '@material-ui/icons/Description';
import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import {AddLocationIcon} from '@material-ui/icons';
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "../../styles/styles.css";
import "./header.css";
import Logo from "../../images/Logo.png";
import Button from "@material-ui/core/Button"
import { login, validateNumber, validateOTP } from "../../actions"
import MenuBar from './MenuBar';
import { Redirect } from "react-router";


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

class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            expandBuyCarSection: false,
            expandMoreSection: false,
            expandAccountSection: false,
            showWorkFlow: false,
            showLoginContent: false,
            showNameField: false,
            showEmailField: false,
            remainingTime: 60,
            showTimeInterval: false,
            mobileNumber: null,
            username: null,
            isError: false,
            openAboutUs:false,
            isUserValidated: false
        }
    }
    changeOnMouseLeave = () => {
        this.setState({
            expandMoreSection:false,
            expandBuyCarSection:false,
            expandMoreSection:false
        })
    }

    changeArrow = (value) => {
            if(value) {
                this.setState({
                    expandBuyCarSection: value === "buycar" ? true: false,
                    expandMoreSection: value === "more" || value === "show_work_Flow" ? true : false,
                    expandAccountSection: value === "account" ? true : false,
                    showWorkFlow: value === "show_work_Flow" ? true : false
                })
                } 
                else {
                    this.setState({
                        expandBuyCarSection: false,
                        expandMoreSection: false,
                        expandAccountSection: false,
                        showWorkFlow: false,
                        otpRequested: false
                    })
                }  
        
    }

    hideShowWorkFlow = () => {
        this.setState({
            showWorkFlow: false
        })
    }
   
    watchTimer = () => {
        var refreshIntervalId =  setInterval(() => {
            if(this.state.remainingTime >0) {
            this.setState({remainingTime: this.state.remainingTime-1})
            } else {
                this.setState({remainingTime: 60, showTimeInterval: false})
                clearInterval(refreshIntervalId);
            }
        }, 1000)
    }

    validateUser = () => {
        if(this.state.mobileNumber && this.state.mobileNumber.length === 10) {
            this.watchTimer()
            this.props.validatePhoneNumber(this.state.mobileNumber)
             this.setState({ isUserValidated: true, showTimeInterval: true})
        } else {
            this.setState({ isError: true}, () => {
                this.setState({ isError: true, isUserValidated: false})
            })

        }


        // if(key === "Login") {
        //     this.setState({showNameField: true, showEmailField: true})
        // }
        // if(key === "getOTP") {
        //     this.setState({otpRequested: true, showTimeInterval: true});
        //     this.props.getOTP(this.state.username, this.state.mobileNumber)
        //     this.watchTimer()
        // }
    }

    validateOTP = (OTP) => {
        if(OTP.length === 4) {
            this.props.validateOTP(OTP)
        }
    } 

    getMobileNumber = number => {
        if(number) {
            this.setState({isError: false})
        }
        this.setState({
            mobileNumber: number
        })
    }

    readName = name => {
        this.setState({
            username: name
        })
    }
    
     onAboutUs = () => {
        this.setState({
            openAboutUs:true
        })
    }
    render() {  
    const expandMoreSection = <div className="main_container column_container about_expanded_section">
         <div className="more_items" onMouseOver={this.hideShowWorkFlow}>
             <>
         <DescriptionIcon />
         </>
              <p4 className="options">
                  <Link to="/more/AboutUs" className="options" onClick = {this.onAboutUs}>
                    About Us             
                 </Link>
              </p4>
         </div>
         <div className="more_items" >
         <DirectionsOutlinedIcon />
              <p4 className="options" onMouseOver={() => {
             this.changeArrow("show_work_Flow")
         }}>
                <a>How it Works</a>  
              </p4>
         <ArrowForwardIosIcon style={{marginLeft: "90px"}}/>
         </div>
         <div className="more_items" onMouseOver={this.hideShowWorkFlow}>
         <LocationOnIcon />
              <p4 className="options">
                 Car hub Location
              </p4>

         </div>
         <div className="more_items"  onMouseOver={this.hideShowWorkFlow}>
         <AddLocationIcon />
              <p4 className="options">
                ContactLess car Buying
              </p4>

             </div>
            </div>

        const expandShowWorkFlow = 
        <div className="main_container column_container about_expanded_section buying_process_container" >
            <div className="more_items">
            <>
                <DescriptionIcon />
            </>
             <p4 className="options">
                 Car buying process
             </p4>

        </div>
        <div className="more_items" >
        <DirectionsOutlinedIcon />
             <p4 className="options">
                 Car selling process
             </p4>
        </div>
        <div className="more_items">
        <LocationOnIcon />
             <p4 className="options">
                Pricing
             </p4>

        </div>
        </div>
 
         const expandAccountSection = <div className="main_container column_container about_expanded_section buying_process_container" id="expanded_account_section" 
         >
         <div className="more_items">
             <>
         <DescriptionIcon />
         </>
              <Link to={this.props.isValidUser ? "/account/testDrive" : "#"} className="options" 
              onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }
            }>
                  Test Drives
              </Link>

         </div>
         <div className="more_items" >
         <DirectionsOutlinedIcon />
              <Link to="/account/bookings" className="options" onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }}>
                  Bookings
              </Link>
         </div>
         <div className="more_items">
         <LocationOnIcon />
              <Link to="/account/sellorders" className="options" onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }}>
                 Sell Orders
              </Link>

         </div>
         <div className="more_items">
         <LocationOnIcon />
              <Link to="/account/help_suport" className="options" onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }}>
                Help and Support
              </Link>

         </div>
         <div className="more_items">
         <LocationOnIcon />
              <Link to="/account/refer_and_earn" className="options" onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }}>
                Refer and Earn
              </Link>

         </div>
         <div className="more_items">
         <LocationOnIcon />
              <Link to="/account/profileInformation" className="options" onClick={() => { 
                  this.props.isValidUser ? this.changeArrow() : this.setState({showLoginContent: true}, () => this.changeArrow())
                }}>
                 Profile Information
              </Link>

         </div>
         <div className="more_items" onClick={() => {
            this.setState({showLoginContent: true})
            this.changeArrow()
         } }>
         <LocationOnIcon />
              <Link to= {this.props.isValidUser ? "/homePage" : "#" } className="options">
                {!this.props.isValidUser ? "Login/Sign up" : "Logout" } 
              </Link>

         </div>
    </div>
    const {classes} = this.props;
        return(
            <>
            <div className={this.state.showLoginContent && !this.props.isValidUser && "overlay"} 
            onClick={() => {
                this.setState({showLoginContent: false, showEmailField: false, showNameField: false})
            }}
            ></div>
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
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="search_text"
                    />
                    <SearchIcon className="search_icon"/>
                    </div>
                    </div>
                    <Link to="/lifeStyle" className="header_buy_car" >
                     <b onMouseOver={() => this.changeArrow("buycar")}
                        onMouseOut={() => this.changeArrow()} style={{fontSize: "16px"}} >
                        Buy Car
                     </b>
                     {this.state.expandBuyCarSection ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon /> }
                     </Link>
                    <Link to="/sell" className="Header_options">
                    <b style={{fontSize: "16px"}}>
                        Sell Car
                    </b>
                    </Link >
                    <div className="header_buy_car">
                      <b onMouseOver={() => this.changeArrow("more")}
                        //  onMouseOut={() => this.changeArrow()}
                          style={{fontSize: "16px"}}>
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
                            <b onMouseOver={() => 
                            this.changeArrow("account")
                        }
                                style={{fontSize: "16px"}}>Account
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
                    {this.state.expandMoreSection && expandMoreSection}
                    {this.state.expandMoreSection &&  this.state.showWorkFlow &&  expandShowWorkFlow }
                    {this.state.expandAccountSection  && expandAccountSection}
                    {this.state.showLoginContent && !this.props.isValidUser && <div className="main_container column_container login_container ">
                    <CloseIcon className="close_icon" onClick={() => {
                this.setState({showLoginContent: false, showEmailField: false, showNameField: false})
            }}/>
                    <VpnKeyIcon />
                    {!this.state.isUserValidated && !this.props.isValidUser && (
                     <>
                        <p4 className="content_pos">
                            Login /Sign Up
                        </p4>
                        <TextField
                        id="mobile_number"
                        placeholder="Mobile Number"
                        classes={{
                            root: classes.root,
                            input: classes.input
                        }}
                        InputProps={{ disableUnderline: true, maxLength: 10}}
                        className={`${this.state.isError ? "login_text_field mobile_error": "login_text_field"}`}
                        onChange={e => this.getMobileNumber(e.target.value)}
                        type="tel"
                        error={this.state.isError}
                        helperText={this.state.isError ? "Please enter valid number" : "" }
                        />
                        </>
                    )
                    }
                   {!this.props.isUserRegistered && this.state.mobileNumber && this.state.mobileNumber.length === 10 && this.state.isUserValidated && 
                    <TextField
                    id="name"
                    placeholder="Enter your name"
                    classes={{
                        root: classes.root,
                        input: classes.input
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="login_text_field"
                    onChange={e => this.readName(e.target.value)}
                    error
                    helperText="enter your name"
                    />
                    }
                 {!this.props.isUserRegistered && this.state.mobileNumber && this.state.mobileNumber.length === 10 && this.state.isUserValidated && 
                  <TextField
                    id="email"
                    placeholder="Enter Your Email(Optional)"
                    classes={{
                        root: classes.root,
                        input: classes.input
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="login_text_field"

                    />
                } 
                {!this.state.isUserValidated && !this.props.isUserRegistered && (
                        <>
                        <div className="main_container">
                    <input type="checkbox" id="whatsAppNumber" name="whatsAppNumber" value="whatsAppNumber" />
                    <p5 className="content_pos">
                        Send Updates on WhatsApp
                    </p5>
                    </div>
                     <p6 className="content_pos">
                     By logging in, I agree to <Link to="#">terms</Link> and  <Link to="#">privacy policy</Link>
                     </p6>
                     <button className="login_proceed_btn" onClick={() => {
                    this.validateUser();
                    }}>
                      {!this.props.isUserRegistered ? "Proceed" : "Sign Up"} 
                    </button>
                     </>
                    )
                    }
                    {this.state.isUserValidated && this.props.isUserRegistered && 
                     <>
                     <p4 className="content_pos">
                     You will receive an OTP on the following number:
                    </p4>
                    <p4 className="content_pos">
                    {this.state.mobileNumber} <button className="btn">EDIT</button>
                    </p4>   
                    <TextField
                    id="OTP"
                    placeholder="OTP"
                    classes={{
                        root: classes.root,
                        input: classes.input
                    }}
                    InputProps={{ disableUnderline: true }}
                    className="login_text_field"
                    onChange={(e) => this.validateOTP(e.target.value)}
                    />
                    {this.state.showTimeInterval ? 
                     <p4 className="content_pos">
                     Resend OTP in {this.state.remainingTime} seconds
                    </p4> 
                    :
                     <p4 className="content_pos">
                     Din't you get OTP? <button className="btn">RESEND AGAIN?</button>
                    </p4>
                    }
                    </>
                    }
                    </div>
                    }
            </div> 
            </>
            )
            
    }
}

const mapStateToProps = state => {
    return{
        isUserRegistered: state.reducers.isUserRegistered,
        isValidUser: state.reducers.isValidUser

    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        validatePhoneNumber: (number) => {
            dispatch(
                validateNumber(number)
                )
        },
        validateOTP: (OTP) => {
            dispatch(
                validateOTP(OTP)
                )
        },
        login : (name, number) =>{
            dispatch(
                login(name, number)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));