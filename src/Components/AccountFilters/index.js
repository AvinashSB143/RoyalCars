import {useState} from 'react';
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
    logout
 } from "../../actions"
import PersonalInfo from './PersonalInfo';


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

    const heading = ["test", "bookings", "sellorders", "help_suport", "refer_and_earn", "profile"];
    const PageTitle = ["TEST Drives", "BOOKINGS", "SELL ORDERS", "HELP & SUPPORT", "REFER & EARN", "PROFILE"];


    const [showAllCars,setShowAllCars] = useState(false);
    const getUserInfo = useSelector(state => state.reducers)
    console.log(getUserInfo);
    const carList = props.availableCarList && props.availableCarList.map((car) => {
        return(
             <div className={`column_container ${showAllCars ? "car_list_testDrive" : "car_list"}`}>
                  <Link to = "/buyCar/cars">
                  <img className="filter_car_img" src="http://65.0.81.1:5000/uploads/image_Toyota_Innova_Crysta_2020_0_1200x768.png" />
                  </Link>
                  <div className="column_container"  style={{position: "relative"}}>
                     <span className="row_container description"> <h4 className="car_name_info">{car.yesr}</h4><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4><FavoriteBorderIcon classes={{root: classes.icon_root}}/></span>
                     <div className="row_container car_km_ifo">
                       <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                     </div>
                  </div>
              </div>
        )
    })
   
    const testDriveCarsList = props.testDriveCars && props.testDriveCars.map((car) => {
        return(
            <div className="row_container car_list">
                <div className="test_drive_car_img">
                <Link to = "/buyCar/cars">
                    <img className="filter_car_img" src="http://65.0.81.1:5000/uploads/image_Toyota_Innova_Crysta_2020_0_1200x768.png" />
                </Link>
                   </div>
                 <div className="column_container test_drive_car_details" >
                <h4 className="car_name_info">{car.year}</h4>
                <span className="row_container"><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4></span>
                <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                    </div>
                    <div >
                        <Link to="#" className="test_drive_car_btn">
                        Free Test Drive
                    </Link>
                    </div>
                    </div>
                )
    })
    const bookedCarsList = props.customerBookedCars && props.customerBookedCars.map((car) => {
        return(
            <div className="row_container car_list">
                <div className="test_drive_car_img">
                <Link to = "/buyCar/cars">
                    <img className="filter_car_img" src="http://65.0.81.1:5000/uploads/image_Toyota_Innova_Crysta_2020_0_1200x768.png" />
                </Link>
                   </div>
                 <div className="column_container test_drive_car_details" >
                <h4 className="car_name_info">{car.year}</h4>
                <span className="row_container"><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4></span>
                <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                    </div>
                    <div >
                        <Link to="#" className="test_drive_car_btn">
                        Book Car Now
                    </Link>
                    </div>
                    </div>
        )
    })
    const sellOrderList = props.customerSellOrderList && props.customerSellOrderList.map((car) => {
        return(
            <div className="row_container car_list">
                <div className="test_drive_car_img">
                <Link to = "/buyCar/cars">
                    <img className="filter_car_img" src="http://65.0.81.1:5000/uploads/image_Toyota_Innova_Crysta_2020_0_1200x768.png" />
                </Link>
                   </div>
                 <div className="column_container test_drive_car_details" >
                <h4 className="car_name_info">{car.year}</h4>
                <span className="row_container"><h4 className="car_name_info">{car.brand}</h4><h4 className="car_name_info">{car.model}</h4></span>
                <span className="row_container car_details"><p className="car_info">{car.kmDriven} KM</p><p className="car_info">{car.fuelType}</p> <p className="car_info">{car.transmission}</p></span>
                    </div>
                    <div >
                        <Link to="#" className="test_drive_car_btn">
                        Book Car Now
                    </Link>
                    </div>
                    </div>
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
            <div className="column_container account_filtered_options_container">
                <div className="welcome_note account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <p>Hello,</p>
                        <p>Avinash</p>
                    </div>
                </div>
                <Link to="/account/testDrive" className={`${filter === "testDrive" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info" 
                    onClick={() => {
                         props.getTestDriveCars() 
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
                        props.getBookedCars()
                        setShowAllCars(false)   
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
                        props.sellOrders()
                        setShowAllCars(false) 
                    }}
                    >
                        <h4>Sell Orders</h4>
                        <p>View, track and manage your sell orders.</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/help_suport" className={`${filter === "help_suport" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Help and Support </h4>
                        <p>Need help? Chat with us</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/refer_and_earn" className={`${filter === "refer_and_earn" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Refer and Earn</h4>
                        <p>Refer and Earn through your friends</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/profileInformation" className={`${filter === "profileInformation" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    {/* <PersonalInfo /> */}
                    <div className="column_container user_info">
                        <h4>Personal Information</h4>
                        <p>Edit & manage your profile</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/homePage" className="account_filtered_options logout"
                onClick={() => {
                    props.logout()
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
                    <Link to="#" className="nav_link">{mainHeading}</Link>
                </ul>
                <h2 className="selected_account_filter">
                   {mainHeading.toUpperCase(0)}
                </h2>
                <div className={`${showAllCars ? "row_container" : "column_container"} account_filtered_cars`}>
                 {filter === "testDrive" && (testDriveCarsList && testDriveCarsList.length !== 0) && testDriveCarsList}
                 {filter === "bookings" && (bookedCarsList && bookedCarsList.length !== 0) && bookedCarsList}
                 {filter === "sellorders" && (sellOrderList && sellOrderList.length !== 0) && sellOrderList}
                 {filter === "ProfileInformation" && <PersonalInfo />}
                 {!showAllCars && !(filter === "ProfileInformation") && !(filter === "refer_and_earn") &&
                    <div className="column_container">
                       <p className="test_drive_no_cars_text"> You havenot booked any cars Yet. </p>
                        <Link to={filter === "sellorders" ? "/sell" : "#"} className="test_drive_car_btn" onClick={() => {
                           filter !== "sellorders" && props.getCustomerCars()
                            setShowAllCars(true)
                        }}>
                           {filter === "sellorders" ? "Sell Car" : "See all cars"} 
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
        getTestDriveCars: () => {
            dispatch(
                getTestDriveCars()
            )
        },
        getBookedCars: () => {
            dispatch(
                getBookedCars()
            )
        },
        sellOrders: () => {
            dispatch(
                sellOrders()
            )
        },
        logout: () => {
            dispatch(
                logout()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AccountFilters));