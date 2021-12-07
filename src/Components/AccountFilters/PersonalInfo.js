import React from 'react';
import { connect } from 'react-redux';

const PersonalInfo = (props) => {
    const { userDetails } = props;
    return (
        <div>
            <h3 style={{fontSize:"22px",width:"100%",textTransform:"capitalize"}}>
                Personal Information</h3>
        <div className="row_container account_filtered_cars profile_form">
            <div className="profile_form_details">
            <form style = {{padding:"16px 16px 24px"}}>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Full Name</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" value={userDetails ?userDetails.username : ""} />
                    <label className="name_label" for="account-name">Name</label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Mobile Number</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" value={userDetails ? userDetails.phone : ""}/>
                    <label className="name_label" for="account-name"></label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Email Address</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" value={userDetails ? userDetails.email: ""}
                    placeholder="Enter Your Email"/>
                    <label className="name_label" for="account-name" data-focus-value = "Name"></label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <button className="form_button" onClick={() => {}}>
                        <span>Edit Info</span></button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        userDetails: state.reducers.userDetails
    }
    
}

export default connect(mapStateToProps)(PersonalInfo);