import React from 'react';

const PersonalInfo = () => {
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
                    <input type="text" maxLength="50" name="account-name" value="Avinash"/>
                    <label className="name_label" for="account-name">Name</label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Mobile Number</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" value="9480501091"/>
                    <label className="name_label" for="account-name"></label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Email Address</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" value=""
                    placeholder="Enter Your Email"/>
                    <label className="name_label" for="account-name" data-focus-value = "Name"></label>
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <button className="form_button">
                        <span>Edit Info</span></button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default PersonalInfo;