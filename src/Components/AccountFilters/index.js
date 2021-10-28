import {Link, useParams} from 'react-router-dom';
import "./accountFilters.css"
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const styles = theme => ({
    root: {
        width: "2rem",
        height: "2rem"
    },
    arrow_root: {
        fontSize: "1rem",
        padding: "0 5px"
    }
})

const AccountFilters = (props) => {
    const {filter} = useParams();
    const {classes} = props;
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
                {/* <Link to="/account/testDrive" className="account_filtered_options"> */}
                <Link to="/account/testDrive" className={`${filter === "testDrive" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Test Drives</h4>
                        <p>View and manage your test drives</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/bookings" className={`${filter === "bookings" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Bookings</h4>
                        <p>See booking status and complete paperwork</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="/account/sellorders" className={`${filter === "sellorders" && "item_focused"} account_filtered_options `}>
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
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
                    <div className="column_container user_info">
                        <h4>Personal Information</h4>
                        <p>Edit & manage your profile</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options logout">
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
                    <Link to="#" className="nav_link">Test Drives </Link>
                </ul>
                <h2 className="selected_account_filter">Test Drives</h2>
                <div className="row_container account_filtered_cars">
                    <div className="cars_available">
                        <img className="filter_car_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                        {/* <div className="column_container"> */}
                        {/* <span className="row_container description"> <p>Ford Eco Sport</p><FavoriteBorderIcon /></span> */}
                    </div>
                    <div className="cars_available">
                        <img className="filter_car_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                        {/* <div className="column_container"> */}
                        {/* <span className="row_container description"> <p>Ford Eco Sport</p><FavoriteBorderIcon /></span> */}
                    </div>

                </div>
                </div>
            
            

        </div>
    )
}

export default withStyles(styles)(AccountFilters);


{/* <div>
                <ul>
                    <li>HOME <ArrowForwardIosIcon classes={{
                        root: classes.arrow_root
                    }}/></li>
                    <li>USED CARS <ArrowForwardIosIcon classes={{
                        root: classes.arrow_root
                    }}/></li>
                    <li>FAMILY CARS </li>
                </ul>
                <h2 className="selected_account_filter">Test Drives</h2>
                </div> */}