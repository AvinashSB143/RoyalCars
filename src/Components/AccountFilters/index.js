import {Link} from 'react-router-dom';
import "./accountFilters.css"
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

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
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Test Drives</h4>
                        <p>View and manage your test drives</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Bookings</h4>
                        <p>See booking status and complete paperwork</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Sell Orders</h4>
                        <p>View, track and manage your sell orders.</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Help and Support </h4>
                        <p>Need help? Chat with us</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Refer and Earn</h4>
                        <p>Refer and Earn through your friends</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <Link to="#" className="account_filtered_options">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                    <div className="column_container user_info">
                        <h4>Personal Information</h4>
                        <p>Edit & manage your profile</p>
                    </div>
                    <ArrowForwardIosIcon className="icon_pos"/>
                </Link>
                <div className="account_filtered_options logout">
                    <PermIdentityIcon classes={{
                        root: classes.root
                    }}/>
                   <h4>Logout</h4>
                </div>
                
            </div>
            <div className="column_container">
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
                <div className="account_filtered_cars">

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