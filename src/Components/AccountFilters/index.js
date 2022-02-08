import {useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import "./accountFilters.css"
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {
    getAvailableCars,
    getTestDriveCars,
    getBookedCars,
    sellOrders,
    logout,
    selectedCar,
    showSearchBar
 } from "../../actions"
import PersonalInfo from './PersonalInfo';
import ReferEarn from './referandEarn';

const styles = theme => ({
    root: {
        width: "2rem",
        height: "2rem"
    },
    arrow_root: {
        fontSize: "1rem",
        padding: "0 5px"
    },
    icon_root: {
        position: "absolute",
        right: 0
      } 
})

const AccountFilters = (props) => {
    const {filter} = useParams();
    const {classes} = props;

    const customertestDriveCarsList = useRef();

    const heading = ["test", "bookings", "sellorders", "help_suport", "refer_and_earn", "profile"];
    const PageTitle = ["TEST DRIVES", "BOOKINGS", "SELL ORDERS", "HELP & SUPPORT", "REFER & EARN", "PROFILE"];
    const userTestDriveCarsStored = localStorage.getItem("userTestDriveCarsStored");
    const userBookedDriveCarsStored = localStorage.getItem("userBookedDriveCarsStored");
    const userSellOrderCarsStored = localStorage.getItem("userSellOrderCarsStored");
    const selectedUserDetailsPhoneNumber = localStorage.getItem("selectedUserDetailsPhoneNumber");

    const [showAllCars,setShowAllCars] = useState(false);
    const getUserInfo = useSelector(state => state.reducers)
    const carList = props.availableCarList && props.availableCarList.map((car) => {
        const carImage = car.imagePath.split(",");
        return(
             <div className={`column_container ${showAllCars ? "car_list_testDrive feature-box" : "car_list"}`}
             onClick={() => props.seletedCar(car)}>
                  <Link to = "/buyCar/cars">
                  <img className="filter_car_img" src={`https://royalcarsmangalore.in:5000/${carImage[0]}`} alt="Buy A Car" />
                  </Link>
                  <div className="column_container account-cars"  style={{position: "relative"}}>
                     <span className="row_container description"> <h4 className="car_name_info_sellOrder">{car.year}</h4> &nbsp;&nbsp;<h4 className="car_name_info_sellOrder">{car.brand}</h4>&nbsp;&nbsp;<h4 className="car_name_info_sellOrder">{car.model}</h4></span>
                     <div className="row_container car_km_ifo">
                       <span className="row_container car_details"><p className="car_info">{car.kmDriven}KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                     </div>
                  </div>
              </div>
        )
    })
   

    useEffect(() => {
        if(props.testDriveCars && customertestDriveCarsList.current !== props.testDriveCars.length && (props.availableCarList && props.availableCarList.length == 0)) {
            props.getCustomerCars();
            customertestDriveCarsList.current = props.testDriveCars.length
        }
    },[props.testDriveCars])

    useEffect(() => {
        props.testDriveCars && props.testDriveCars.length !==0 && localStorage.setItem("userTestDriveCarsStored", JSON.stringify(props.testDriveCars));
    },[props.testDriveCars])
    
    useEffect(() => {
        props.customerBookedCars && props.customerBookedCars.length !==0 && localStorage.setItem("userBookedDriveCarsStored", JSON.stringify(props.customerBookedCars));
    },[props.customerBookedCars])
   
   
    useEffect(() => {
        props.customerSellOrderList && props.customerSellOrderList.length !==0 && localStorage.setItem("userSellOrderCarsStored", JSON.stringify(props.customerSellOrderList));
    },[props.customerSellOrderList])



    

    const getSortedTestDriveCars = (ar1,ar2) => {
        let res = [];
        res = ar1 && ar2 && ar1.filter(el => {
          return ar2.find(element => {
            return element.carId === el._id;
          });
        });
        res.forEach((item, index) => {
            props.testDriveCars.forEach((sortedCar) => {
                if(item._id === sortedCar.carId) {
                   res[index] = {...item, "bookedDate": sortedCar.bookedDate, "phoneNumber": sortedCar.phoneNumber} 
                }
            })
        })

        return res;
    }

    const customerTestDriveCars = getSortedTestDriveCars(props.availableCarList, props.testDriveCars && props.testDriveCars.length !== 0 ? props.testDriveCars : userTestDriveCarsStored ? JSON.parse(userTestDriveCarsStored) : []);
         
    const testDriveCarsList = customerTestDriveCars && customerTestDriveCars.length !== 0 ? customerTestDriveCars.map((car) => {
        const carImage = car.imagePath.split(",");
        return(
                        <Link className="feature-box" href="#">
                            <img
                                src={`https://royalcarsmangalore.in:5000/${carImage[0]}`}
                                class="feature-img"
                                alt=""
                            />
                        <div className="feature-content">
                          <div className="content-details">
                              <h4>{car.year} {car.brand} {car.model}</h4> 
                              <p style={{lineHeight: "20px", textTransform: "capitalize"}}>
                                 Booking Date : {car.bookedDate}</p>
                                  <p style={{fontWeight: "bolder", fontSize: "20xpx"}}>Booking Contact : {car.phoneNumber}</p>
                            </div>
                        </div>
                    </Link>
                )
    }) : [];
    

    const bookedCarsList = (props.customerBookedCars && props.customerBookedCars.length !== 0 ?  props.customerBookedCars : userBookedDriveCarsStored ? JSON.parse(userBookedDriveCarsStored): []).map((car) => {
        const carImage = car.imagePath && car.imagePath.split(",");
        return(
            <Link className="feature-box" href="#">
                            <img
                                src={`https://royalcarsmangalore.in:5000/${carImage && carImage[0] ? carImage[0] : ""}`}
                                class="feature-img"
                                alt=""
                            />
                        <div className="feature-content">
                          <div className="content-details">
                              <h4>{car.year} &nbsp; {car.brand} &nbsp; {car.model}</h4> 
                              <h4>₹ {car.budget} &nbsp; {car.transmission} &nbsp; {car.kmDriven} KM</h4>
                            </div>
                        </div>
                        </Link>
        )
    })
    
    
    const sellOrderList = (props.customerSellOrderList && props.customerSellOrderList.length !== 0 ? props.customerSellOrderList : userSellOrderCarsStored ? JSON.parse(userSellOrderCarsStored) : []).map((car) => {
        const carImage = car.imagePath && car.imagePath.split(",");
        return(
            <Link className="feature-box" href="#">
                            <img
                                src={`https://royalcarsmangalore.in:5000/${carImage && carImage[0] ? carImage[0] : "" }`}
                                class="feature-img"
                                alt="Car Image Unavailable"
                            />
                        <div className="feature-content">
                          <div className="content-details">
                              <h4>{car.year} &nbsp; {car.brand} &nbsp; {car.model}</h4> 
                              <h4>₹ {car.budget} &nbsp; {car.transmission} &nbsp; {car.kmDriven} KM</h4>
                            </div>
                        </div>
                        </Link>
        )
    })

    const mainHeading =  heading.find((item, index) => {
        // if(item.toLowerCase().includes(filter)){
        if(filter.toLowerCase().includes(item)){
        //    return item.toUpperCase()
        return PageTitle[index].toUpperCase();
        } 
    })
    

    return(
        <div className="row_container account_filter_container">
            <div className="column_container account_filtered_options_container hide">
                <div className="welcome_note account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <p>Hello,</p>
                        <p>{props.userDetails ? props.userDetails.username : ""}</p>
                    </div>
                </div>
                <Link to="/account/testDrive" className={`${filter === "testDrive" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info" 
                    onClick={() => {
                        if(props.userDetails || selectedUserDetailsPhoneNumber) {
                            props.getTestDriveCars(props.userDetails && props.userDetails.phone ? props.userDetails.phone : selectedUserDetailsPhoneNumber ? selectedUserDetailsPhoneNumber : "");
                            props.showSearchBar(true)
                        }
                        setShowAllCars(false)
                        }
                    }
                    >
                        <h4>Test Drives</h4>
                        <p>View and manage your test drives</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/bookings" className={`${filter === "bookings" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info"
                    onClick={() => {
                        if(props.userDetails || selectedUserDetailsPhoneNumber)  {
                            props.getBookedCars(props.userDetails && props.userDetails.phone ? props.userDetails.phone : selectedUserDetailsPhoneNumber ? selectedUserDetailsPhoneNumber : "");
                            props.showSearchBar(true)
                           }
                        setShowAllCars(false);
                    }}
                    >
                        <h4>Bookings</h4>
                        <p>See booking status and complete paperwork</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/sellorders" className={`${filter === "sellorders" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info"
                    onClick={()=> {
                        if(props.userDetails || selectedUserDetailsPhoneNumber) {
                            props.sellOrders(props.userDetails && props.userDetails.phone ? props.userDetails.phone : selectedUserDetailsPhoneNumber ? selectedUserDetailsPhoneNumber : "");
                            props.showSearchBar(true)
                    }
                        setShowAllCars(false);
                    }}
                    >
                        <h4>Sell Orders</h4>
                        <p>View, track and manage your sell orders.</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/refer_and_earn" className={`${filter === "refer_and_earn" && "item_focused"} account_filtered_options `}
                        onClick={() => 
                            props.showSearchBar(false)
                        }
                >
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Refer and Earn</h4>
                        <p>Refer and Earn through your friends</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/profileInformation" className={`${filter === "profileInformation" && "item_focused"} account_filtered_options `}
                        onClick={() => 
                            props.showSearchBar(false)
                        }
                >
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Personal Information</h4>
                        <p>Edit & manage your profile</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/homePage" className="account_filtered_options logout"
                onClick={() => {
                    props.logout()
                    props.showSearchBar(false);
                    localStorage.clear();
                }}
                >
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                   <h4>Logout</h4>
                </Link>
                
            </div>
            <div className="column_container cars_offered">
                <ul>
                    <Link to="/homePage" className="nav_link">HOME <ArrowForwardIosIcon classes={{
                        root: classes.arrow_root
                    }}/></Link>
                    <Link to="#" className="nav_link">Account <ArrowForwardIosIcon classes={{
                        root: classes.arrow_root
                    }}/></Link>
                    <Link to="#" className="nav_link" style={{textTransform: "capitalize"}}>{mainHeading}</Link>
                </ul>
                <h2 className="selected_account_filter">
                   {mainHeading.toUpperCase(0)}
                </h2>
                <div className={`${showAllCars ? "row_container" : "column_container"} account_filtered_cars`}>
                 {filter === "testDrive" && !showAllCars && (testDriveCarsList && testDriveCarsList.length !== 0) && 
                 <div class="grid--4-cols"> {testDriveCarsList} </div>}
                 {filter === "bookings" && !showAllCars && (bookedCarsList && bookedCarsList.length !== 0) && 
                 <div class="grid--4-cols"> {bookedCarsList} </div>}
                 {filter === "sellorders" && !showAllCars &&  (sellOrderList && sellOrderList.length !== 0) && 
                 <div class="grid--4-cols"> {sellOrderList} </div>}
                 {filter === "profileInformation" &&  <PersonalInfo />}
                 {filter === "refer_and_earn" && <ReferEarn />}
                 {!showAllCars && !(filter === "profileInformation") && !(filter === "refer_and_earn") &&
                    <div className="column_container">
                        <Link to={filter === "sellorders" ? "/sell" : "#"} className="test_drive_car_btn" onClick={() => {
                           filter !== "sellorders" && props.getCustomerCars()
                            setShowAllCars(true)
                        }}>
                           {filter === "sellorders" ? "Sell My Car" : "See all cars"} 
                        </Link>
                    </div>    
                }
                {showAllCars && carList }
                </div>
                {/* <PersonalInfo></PersonalInfo> */}
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testDriveCars: state.reducers.testDriveCars,
        customerBookedCars: state.reducers.customerBookedCars,
        customerSellOrderList: state.reducers.customerSellOrderList,
        availableCarList: state.reducers.availableCarList,
        userDetails : state.reducers.userDetails
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getCustomerCars: () => {
            dispatch(
                getAvailableCars()
            )
        },
        seletedCar: data => {
            dispatch(
              selectedCar(data)
            )
        },
        getTestDriveCars: (phone) => {
            dispatch(
                getTestDriveCars(phone)
            )
        },
        getBookedCars: (phoneNumber) => {
            dispatch(
                getBookedCars(phoneNumber)
            )
        },
        sellOrders: (phone) => {
            dispatch(
                sellOrders(phone)
            )
        },
        logout: () => {
            dispatch(
                logout()
            )
        },
        showSearchBar: data => {
            dispatch(
              showSearchBar(data)
            )
          },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AccountFilters));