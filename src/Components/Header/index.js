import {Link} from 'react-router-dom';
import { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import PersonIcon from '@mui/icons-material/Person';
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../../styles/styles.css";
import "./header.css";
import Logo from "../../images/Logo.png";
import Button from "@material-ui/core/Button"
import { login,
    validateNumber,
    validateOTP,
    getAvailableCars,
    signUp,
    logout,
    getOTP,
    updatePassword,
    getTestDriveCars,
    getBookedCars,
    sellOrders 
} from "../../actions"
import MenuBar from './MenuBar';
import { Redirect } from "react-router";
import { MonetizationOn } from '@material-ui/icons';
import { height } from '@mui/system';
import styled from "styled-components";

const styles = (theme) => ({
  root: {
    background: "#f2f3f5",
    padding: "10px",
    margin: "10px auto",
  },
  input: {
    padding: "16px 0 17px 10px",
  },
  mobile_Login_icon_root: {
    width: "2rem",
  },
});
const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
      isError: false,
      openAboutUs: false,
      isUserValidated: false,
      userName: "",
      password: "",
      email: "",
      isUserNamePresent: true,
      isPasswordPresent: true,
      isSignUp: false,
      isForgotPassword: false,
      isShowOTPEnabled: false,
      hideButton: false,
      expandLoginDetails: false,
    };
  }
  changeOnMouseLeave = () => {
    this.setState({
      expandMoreSection: false,
      expandBuyCarSection: false,
      expandMoreSection: false,
    });
  };

  changeArrow = (value) => {
    if (value) {
      this.setState({
        expandBuyCarSection: value === "buycar" ? true : false,
        expandMoreSection:
          value === "more" || value === "show_work_Flow" ? true : false,
        expandAccountSection: value === "account" ? true : false,
        showWorkFlow: value === "show_work_Flow" ? true : false,
      });
    } else {
      this.setState({
        expandBuyCarSection: false,
        expandMoreSection: false,
        expandAccountSection: false,
        showWorkFlow: false,
        otpRequested: false,
      });
    }
  };

  hideShowWorkFlow = () => {
    this.setState({
      showWorkFlow: false,
    });
  };

  watchTimer = () => {
    var refreshIntervalId = setInterval(() => {
      if (this.state.remainingTime > 0) {
        this.setState({ remainingTime: this.state.remainingTime - 1 });
      } else {
        this.setState({ remainingTime: 60, showTimeInterval: false });
        clearInterval(refreshIntervalId);
      }
    }, 1000);
  };

  validateUser = () => {
    if (!this.state.isSignUp && !this.state.isForgotPassword) {
      this.setState(
        {
          loginAttempted: true,
        },
        () =>
          this.setState({
            loginAttempted: true,
          })
      );
      if (this.state.userName && this.state.password) {
        this.props.loginUser(this.state.userName, this.state.password);
      }
    } else if (
      this.state.userName &&
      this.state.password &&
      this.state.mobileNumber
    ) {
      this.props.signUp(
        this.state.userName,
        this.state.password,
        this.state.mobileNumber,
        this.state.email
      );
      this.setState({
        isSignUp: false,
        userName: "",
        password: "",
      });
    } else if (this.state.isForgotPassword) {
      if (this.state.mobileNumber && this.state.mobileNumber.length === 10) {
        this.props.getOTP(this.state.mobileNumber);
        this.setState({
          isError: false,
          isShowOTPEnabled: true,
          hideButton: true,
        });
      } else {
        this.setState({
          isError: true,
        });
      }
    } else {
      this.setState({
        isError: true,
      });
    }

    // if(!this.state.userName) {
    //     this.setState({
    //         isUserNamePresent: false
    //     })
    // }
    // if(!this.state.password) {
    //     this.setState({
    //         isPasswordPresent: false
    //     })
    // }
    // else {
    //     this.props.loginUser(this.state.userName, this.state.password)
    // }
  };

  updatePassword = () => {
    if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        isPasswordMisMatched: true,
      });
    } else {
      this.props.updatePassword(
        this.state.mobileNumber,
        this.state.confirmPassword
      );
      this.setState({
        isPasswordMisMatched: false,
        showLoginContent: false,
        isForgotPassword: false,
      });
    }
  };

  validateOTP = (OTP) => {
    if (OTP && OTP.length === 4) {
      this.props.validateOTP(OTP);
    }
  };

  getMobileNumber = (number) => {
    if (number) {
      this.setState({ isError: false });
    }
    this.setState({
      mobileNumber: number,
    });
  };
  getUserName = (userName) => {
    this.setState({
      userName: userName,
      loginAttempted: false,
      isUserNamePresent: true,
    });
  };
  getPassword = (password) => {
    this.setState({
      password: password,
      loginAttempted: false,
      isPasswordPresent: true,
    });
  };
  getnewPassword = (password) => {
    this.setState({
      newPassword: password,
    });
  };
  getConfirmPassword = (password) => {
    this.setState({
      confirmPassword: password,
    });
  };

  getEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  // readName = name => {
  //     this.setState({
  //         username: name
  //     })
  // }

  onAboutUs = () => {
    this.setState({
      openAboutUs: true,
    });
  };
  render() {
    const expandMoreSection = (
      <div className="main_container column_container about_expanded_section">
        <div
          className="more_items"
          onMouseOver={this.hideShowWorkFlow}
          onClick={() => {
            this.props.authToken
              ? this.changeArrow()
              : this.setState({ showLoginContent: true }, () =>
                  this.changeArrow()
                );
          }}
        >
          <>
            <DescriptionIcon />
          </>
          <p4 className="options">
            <Link
              to={this.props.authToken ? "/more/AboutUs" : "#"}
              className="options"
              onClick={this.onAboutUs}
            >
              About Us
            </Link>
          </p4>
        </div>
        <div className="more_items">
          <DirectionsOutlinedIcon />
          <p4
            className="options"
            onMouseOver={() => {
              this.changeArrow("show_work_Flow");
            }}
          >
            <a>How it Works</a>
          </p4>
          <ArrowForwardIosIcon style={{ marginLeft: "90px" }} />
        </div>
      </div>
    );

    const expandShowWorkFlow = (
      <div className="main_container column_container about_expanded_section buying_process_container">
        <div className="more_items" onClick={() => this.changeArrow()}>
          <>
            <DescriptionIcon />
          </>
          <Link to="/how-it-works/buying/" className="options">
            Car buying process
          </Link>
        </div>
        <div className="more_items" onClick={() => this.changeArrow()}>
          <DirectionsOutlinedIcon />
          <Link to="/how-it-works/selling/" className="options">
            Car selling process
          </Link>
        </div>
        {/* <div className="more_items">
        <LocationOnIcon />
             <p4 className="options">
                Pricing
             </p4>

        </div> */}
      </div>
    );

    const expandAccountSection = (
      <div
        className="main_container column_container about_expanded_section buying_process_container"
        id="expanded_account_section"
      >
        <div className="more_items">
          <>
            <DescriptionIcon />
          </>
          <Link
            to={this.props.authToken ? "/account/testDrive" : "#"}
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
              this.props.getTestDriveCars();
            }}
          >
            Test Drives
          </Link>
        </div>
        <div className="more_items">
          <DirectionsOutlinedIcon />
          <Link
            to={this.props.authToken ? "/account/bookings" : "#"}
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
              this.props.getBookedCars();
            }}
          >
            Bookings
          </Link>
        </div>
        <div className="more_items">
          <LocationOnIcon />
          <Link
            to={this.props.authToken ? "/account/sellorders" : "#"}
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
              this.props.sellOrders();
            }}
          >
            Sell Orders
          </Link>
        </div>
        <div className="more_items">
          <LocationOnIcon />
          <Link
            to={this.props.authToken ? "/account/help_suport" : "#"}
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
            }}
          >
            Help and Support
          </Link>
        </div>
        <div className="more_items">
          <LocationOnIcon />
          <Link
            to={this.props.authToken ? "/account/refer_and_earn" : "#"}
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
            }}
          >
            Refer and Earn
          </Link>
        </div>
        <div className="more_items">
          <LocationOnIcon />
          <Link
            to="/account/ProfileInformation"
            className="options"
            onClick={() => {
              this.props.authToken
                ? this.changeArrow()
                : this.setState({ showLoginContent: true }, () =>
                    this.changeArrow()
                  );
            }}
          >
            Profile Information
          </Link>
        </div>
        <div
          className="more_items"
          onClick={() => {
            this.setState({ showLoginContent: true });
            this.changeArrow();
            if (this.props.authToken) {
              this.props.logout();
              this.setState({ showLoginContent: false });
            }
          }}
        >
          <LocationOnIcon />
          <Link
            to={this.props.authToken ? "/homePage" : "#"}
            className="options"
          >
            {!this.props.authToken ? "Login/Sign up" : "Logout"}
          </Link>
        </div>
      </div>
    );
    const { classes } = this.props;
    return (
      <>
        <div
          className={
            (this.state.showLoginContent &&
              !this.props.isValidUser &&
              !this.state.loginAttempted &&
              !this.props.authToken) ||
            (this.state.expandLoginDetails && "") //remove overlay to interact with buttons
          }
          onClick={() => {
            this.setState({
              showLoginContent: false,
              showEmailField: false,
              showNameField: false,
            });
          }}
        ></div>
        <div>
          <div className="header_container">
            {!this.state.expandLoginDetails && (
              <div className="morevert_icon_pos">
                <DensitySmallIcon
                  onClick={() =>
                    this.setState({
                      expandLoginDetails: true,
                    })
                  }
                />
              </div>
            )}
            {this.state.expandLoginDetails && (
              <div className="column_container mobile_login_container">
                {this.state.expandLoginDetails && (
                  <div className="mobile_login_closeIcon_pos">
                    <CloseIcon
                      onClick={() =>
                        this.setState({
                          expandLoginDetails: !this.state.expandLoginDetails,
                        })
                      }
                    />
                  </div>
                )}
                <div
                  style={{
                    borderBottom: "0.5px solid grey",
                    height: "auto",
                    padding: "1rem 0",
                  }}
                >
                  <StyledLink
                    to="#"
                    className="row_container mobile_login_content"
                    onClick={() => {
                      this.setState({
                        showLoginContent: true,
                        expandLoginDetails: false,
                      });
                      this.changeArrow();
                      if (this.props.authToken) {
                        this.props.logout();
                        this.setState({
                          showLoginContent: false,
                        });
                      }
                    }}
                  >
                    <PersonIcon
                      className="mobile_login_icon_pos"
                      classes={{
                        root: classes.mobile_Login_icon_root,
                      }}
                    />
                    <p style={{ fontSize: "25px" }}>Login/SignUp</p>
                  </StyledLink>
                </div>
                <div
                  style={{
                    borderBottom: "0.5px solid grey",
                    height: "auto",
                    padding: "1rem 0",
                  }}
                >
                  <StyledLink
                    to="#"
                    className="row_container mobile_login_content"
                  >
                    <PersonIcon className="mobile_login_icon_pos" />
                    <p style={{ fontSize: "25px" }}>Buy a Car</p>
                  </StyledLink>
                </div>
                <div
                  style={{
                    borderBottom: "0.5px solid grey",
                    height: "auto",
                    padding: "1rem 0",
                  }}
                >
                  <StyledLink
                    to="#"
                    className="row_container mobile_login_content"
                  >
                    <PersonIcon className="mobile_login_icon_pos" />
                    <p style={{ fontSize: "25px" }}>Sell your car</p>
                  </StyledLink>
                </div>
                <div
                  style={{
                    borderBottom: "0.5px solid grey",
                    height: "auto",
                    padding: "1rem 0",
                  }}
                >
                  <StyledLink
                    to="#"
                    className="row_container mobile_login_content"
                  >
                    <PersonIcon className="mobile_login_icon_pos" />
                    <p style={{ fontSize: "25px" }}> How it works</p>
                  </StyledLink>
                </div>
                <div
                  style={{
                    height: "auto",
                    marginLeft: "-1rem",
                  }}
                >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <PersonIcon className="mobile_login_icon_pos" />
                      <Typography style={{ fontSize: "25px" }}>
                        Account
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px", padding: "5px" }}>
                            {" "}
                            Test Drives
                          </p>
                        </StyledLink>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px", padding: "5px" }}>
                            {" "}
                            Bookings
                          </p>
                        </StyledLink>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px", padding: "5px" }}>
                            {" "}
                            Sell Orders
                          </p>
                        </StyledLink>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px", padding: "5px" }}>
                            {" "}
                            Refer and Earn
                          </p>
                        </StyledLink>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px", padding: "5px" }}>
                            {" "}
                            Personal Information
                          </p>
                        </StyledLink>
                      </div>
                      <div
                        style={{
                          borderBottom: "0.5px solid grey",
                          height: "auto",
                          padding: "1rem 0",
                        }}
                      >
                        <StyledLink
                          to="#"
                          className="row_container mobile_login_content"
                        >
                          <p style={{ fontSize: "25px" }}> Logout</p>
                        </StyledLink>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div
                  style={{
                    borderBottom: "0.5px solid grey",
                    height: "auto",
                    padding: "1rem 0",
                  }}
                >
                  <StyledLink
                    to="#"
                    className="row_container mobile_login_content"
                  >
                    <PersonIcon className="mobile_login_icon_pos" />
                    <p style={{ fontSize: "25px" }}>FAQ</p>
                  </StyledLink>
                </div>
              </div>
            )}

            <div className="header_logo">
              <img src={Logo} alt="App_LOGO" />
            </div>
            <div className="header_search_bar hide_option ">
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
                <SearchIcon className="search_icon" />
              </div>
            </div>
            <Link
              to={this.props.authToken ? "/lifeStyle" : "#"}
              className="header_buy_car show_desktop_menu"
              onClick={() => {
                this.props.authToken && this.props.getAvailableCars();
                this.setState({
                  showLoginContent: !this.props.authToken,
                });
              }}
            >
              <b>Buy Car</b>
            </Link>
            <Link
              to={this.props.authToken ? "/sell" : "#"}
              className="Header_options show_desktop_menu"
              onClick={() => {
                this.setState({
                  showLoginContent: !this.props.authToken,
                });
              }}
            >
              <b style={{ fontSize: "16px" }}>Sell Car</b>
            </Link>
            <div
              className="header_buy_car hide_option show_desktop_menu"
              onClick={() => {
                this.setState({
                  expandMoreSection: !this.state.expandMoreSection,
                });
              }}
            >
              <b
                onMouseOver={() => this.changeArrow("more")}
                //  onMouseOut={() => this.changeArrow()}
                style={{ fontSize: "16px" }}
              >
                more
              </b>
              {this.state.expandMoreSection ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </div>
            <div className="hide_option show_desktop_menu">
              <FavoriteBorderIcon />
            </div>
            <div className="hide_option header_SignIn_bar show_desktop_menu">
              <p>
                Hello,{" "}
                {this.props.userDetails
                  ? this.props.userDetails.username
                  : "Sign In"}
              </p>
              <div
                className="header_account"
                onClick={() => {
                  this.setState({
                    expandAccountSection: !this.state.expandAccountSection,
                  });
                }}
              >
                <b
                  onMouseOver={() => this.changeArrow("account")}
                  style={{ fontSize: "16px" }}
                >
                  Account
                </b>
                {this.state.expandAccountSection ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
            </div>
            <div className="header_SignIn_bar hide_option show_desktop_menu">
              <p>call at</p>
              <b style={{ fontSize: "16px" }}>7788665544</b>
            </div>
          </div>
          {this.state.expandMoreSection && expandMoreSection}
          {this.state.expandMoreSection &&
            this.state.showWorkFlow &&
            expandShowWorkFlow}
          {this.state.expandAccountSection && expandAccountSection}
          {this.state.showLoginContent &&
            !this.props.isValidUser &&
            !this.props.authToken && (
              <div
                className={`main_container column_container login_container ${
                  (this.state.isSignUp || this.state.isForgotPassword) &&
                  " signup_container"
                }`}
              >
                <CloseIcon
                  className="close_icon"
                  onClick={() => {
                    this.setState({
                      showLoginContent: false,
                      showEmailField: false,
                      showNameField: false,
                      loginAttempted: false,
                    });
                  }}
                />
                <VpnKeyIcon />
                {/* {!this.state.isUserValidated && !this.props.isValidUser && ( */}
                <>
                  <p4 className="content_pos">Login /Sign Up</p4>
                  {!this.state.isForgotPassword &&
                    !this.props.OTPVerificationSuccessful && (
                      <>
                        <TextField
                          id="userName"
                          placeholder="username"
                          classes={{
                            root: classes.root,
                            input: classes.input,
                          }}
                          InputProps={{
                            disableUnderline: true,
                            maxLength: 10,
                          }}
                          className={`${
                            this.state.isError
                              ? "login_text_field mobile_error"
                              : "login_text_field"
                          }`}
                          onChange={(e) => this.getUserName(e.target.value)}
                          error={
                            (this.state.loginAttempted &&
                              !this.state.userName) ||
                            this.state.isError
                          }
                          helperText={
                            (this.state.loginAttempted &&
                              !this.state.userName) ||
                            (this.state.isError && "Please enter userName")
                          }
                          value={this.state.userName}
                        />
                        <TextField
                          id="password"
                          placeholder="password"
                          classes={{
                            root: classes.root,
                            input: classes.input,
                          }}
                          InputProps={{
                            disableUnderline: true,
                            maxLength: 10,
                          }}
                          className={`${
                            this.state.isError
                              ? "login_text_field mobile_error"
                              : "login_text_field"
                          }`}
                          onChange={(e) => this.getPassword(e.target.value)}
                          error={
                            (this.state.loginAttempted &&
                              !this.state.password) ||
                            this.state.isError
                          }
                          helperText={
                            (this.state.loginAttempted &&
                              !this.state.userName) ||
                            (this.state.isError && "Please enter Password")
                          }
                          type="password"
                          value={this.state.password}
                        />
                      </>
                    )}
                  {((this.state.isSignUp && !this.props.signUpSuccess) ||
                    this.state.isForgotPassword) &&
                    !this.props.OTPVerificationSuccessful && (
                      <>
                        {this.state.isForgotPassword && (
                          <>
                            <p4 className="content_pos">
                              You will receive an OTP on the following number:
                            </p4>
                            <p4 className="content_pos">
                              {this.state.mobileNumber}{" "}
                              <button className="btn">EDIT</button>
                            </p4>
                          </>
                        )}
                        <TextField
                          id="mobile_number"
                          placeholder="Mobile Number"
                          classes={{
                            root: classes.root,
                            input: classes.input,
                          }}
                          InputProps={{
                            disableUnderline: true,
                            maxLength: 10,
                          }}
                          className={`${
                            this.state.isError
                              ? "login_text_field mobile_error"
                              : "login_text_field"
                          }`}
                          onChange={(e) => this.getMobileNumber(e.target.value)}
                          type="tel"
                          error={
                            (this.state.isSignUp && !this.state.mobileNumber) ||
                            this.state.isError
                          }
                          helperText={
                            (this.state.loginAttempted &&
                              !this.state.userName) ||
                            this.state.isError
                              ? "Please enter valid number"
                              : ""
                          }
                        />
                        {!this.state.isForgotPassword && (
                          <TextField
                            id="email"
                            placeholder="Enter Your Email(Optional)"
                            classes={{
                              root: classes.root,
                              input: classes.input,
                            }}
                            InputProps={{
                              disableUnderline: true,
                              maxLength: 10,
                            }}
                            className={`${
                              this.state.isError
                                ? "login_text_field mobile_error"
                                : "login_text_field"
                            }`}
                            onChange={(e) => this.getEmail(e.target.value)}
                            type="email"
                          />
                        )}
                      </>
                    )}
                </>
                {this.state.isForgotPassword &&
                  this.state.isShowOTPEnabled &&
                  !this.props.OTPVerificationSuccessful && (
                    <>
                      {/* <p4 className="content_pos">
                     You will receive an OTP on the following number:
                    </p4>
                    <p4 className="content_pos">
                    {this.state.mobileNumber} <button className="btn">EDIT</button>
                    </p4>    */}
                      <TextField
                        id="OTP"
                        placeholder="OTP"
                        classes={{
                          root: classes.root,
                          input: classes.input,
                        }}
                        InputProps={{ disableUnderline: true }}
                        className="login_text_field"
                        onChange={(e) => this.validateOTP(e.target.value)}
                      />
                      {this.state.showTimeInterval ? (
                        <p4 className="content_pos">
                          Resend OTP in {this.state.remainingTime} seconds
                        </p4>
                      ) : (
                        <p4 className="content_pos">
                          Din't you get OTP?{" "}
                          <button className="btn">RESEND AGAIN?</button>
                        </p4>
                      )}
                    </>
                  )}
                {this.props.OTPVerificationSuccessful && (
                  <>
                    <TextField
                      id="newPassword"
                      placeholder="New Password"
                      classes={{
                        root: classes.root,
                        input: classes.input,
                      }}
                      InputProps={{ disableUnderline: true, maxLength: 10 }}
                      className={`${
                        this.state.isError
                          ? "login_text_field mobile_error"
                          : "login_text_field"
                      }`}
                      onChange={(e) => this.getnewPassword(e.target.value)}
                      // helperText={(this.state.loginAttempted && !this.state.userName) || this.state.isError && "Please enter userName"}
                      value={this.state.newPassword}
                    />
                    <TextField
                      id="confirm_password"
                      placeholder="confirm Password"
                      classes={{
                        root: classes.root,
                        input: classes.input,
                      }}
                      InputProps={{ disableUnderline: true, maxLength: 10 }}
                      className={`${
                        this.state.isError
                          ? "login_text_field mobile_error"
                          : "login_text_field"
                      }`}
                      onChange={(e) => this.getConfirmPassword(e.target.value)}
                      error={this.state.isPasswordMisMatched}
                      helperText={
                        this.state.isPasswordMisMatched &&
                        "Password Doesnot Match"
                      }
                      type="password"
                      value={this.state.confirmPassword}
                    />
                  </>
                )}

                <div className="forgot_password">
                  {!this.props.signUpSuccess && (
                    <Link
                      to="#"
                      onClick={() =>
                        this.setState({
                          isSignUp: true,
                          userName: "",
                          password: "",
                        })
                      }
                    >
                      Sign Up
                    </Link>
                  )}
                  <Link
                    to="#"
                    onClick={() => {
                      this.setState({ isForgotPassword: true });
                    }}
                  >
                    Forgot Password
                  </Link>
                </div>
                {this.state.loginAttempted &&
                  !this.props.authToken &&
                  this.state.userName &&
                  this.state.password &&
                  !this.props.signUpSuccess && (
                    <p style={{ color: "red", margin: "5px" }}>
                      Invalid Credentials
                    </p>
                  )}
                {!this.state.hideButton && (
                  <button
                    className="login_proceed_btn"
                    onClick={() => {
                      this.validateUser();
                    }}
                  >
                    {this.state.isSignUp && !this.props.signUpSuccess
                      ? "Sign Up"
                      : this.props.signUpSuccess
                      ? "Proceed"
                      : "Proceed"}
                  </button>
                )}
                {this.props.OTPVerificationSuccessful && (
                  <button
                    className="login_proceed_btn"
                    onClick={() => {
                      this.updatePassword();
                    }}
                  >
                    Update Password
                  </button>
                )}
              </div>
            )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
    return{
        isUserRegistered: state.reducers.isUserRegistered,
        isValidUser: state.reducers.isValidUser,
        authToken: state.reducers.authToken,
        signUpSuccess: state.reducers.signUpSuccess,
        userDetails: state.reducers.userDetails,
        OTPVerificationSuccessful: state.reducers.OTPVerificationSuccessful,
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        validatePhoneNumber: (number) => {
            dispatch(
                validateNumber(number)
                )
        },
        getOTP: (number) => {
            dispatch(
                getOTP(number)
                )
        },
        validateOTP: (OTP) => {
            dispatch(
                validateOTP(OTP)
                )
        },
        getAvailableCars: () => {
            dispatch(
                getAvailableCars()
                )
        },
        loginUser : (name, number) =>{
            dispatch(
                login(name, number)
            )
        },
        signUp : (name, password, mobileNumber,email) =>{
            dispatch(
                signUp(name, password, mobileNumber,email)
            )
        },
        updatePassword : (newPassword) =>{
            dispatch(
                updatePassword(newPassword)
            )
        },
        getTestDriveCars : () =>{
            dispatch(
                getTestDriveCars()
            )
        },
        getBookedCars : () =>{
            dispatch(
                getBookedCars()
            )
        },
        sellOrders : () =>{
            dispatch(
                sellOrders()
            )
        },
        logout : () =>{
            dispatch(
                logout()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));