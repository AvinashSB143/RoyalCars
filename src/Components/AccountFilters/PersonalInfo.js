import React, { useState,Fragment } from 'react';
import { connect } from 'react-redux';
import { updateUserDetails, disableUserDetailsSuccessSnackBar } from "../../actions"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@mui/material/Snackbar';



const PersonalInfo = (props) => {
    const { userDetails } = props;
    const [enableEdit, setEnableEdit] = useState(false)
    const [newPhoneNumber , setNewPhoneNumber] = useState(userDetails ? userDetails.phone : "")
    const [newUserName, setNewUserName] = useState(userDetails ? userDetails.username : "")
    const [newMailId, setNewMailId] = useState(userDetails ? userDetails.email : "")
    const [snackBarPos, setSnackBarpost] = useState({
        vertical: 'top',
        horizontal: 'center',
      })

      const { vertical, horizontal } = snackBarPos;
    
    const getNewUserName = newName => {
        setNewUserName(newName)
    }
    const getnewPhoneNumber = (num) => {
        setNewPhoneNumber(num)
    }

    const getNewMailId = id => {
        setNewMailId(id)
    }

    const updateUserDetails = () => {
        if(enableEdit) {
            if((userDetails && userDetails.phone) || newPhoneNumber) {
                props.updateUserDetails(
                    newPhoneNumber ? newPhoneNumber : userDetails.phone ? userDetails.phone : "",
                    newUserName ? newUserName : "",
                    newMailId ? newMailId : ""
                    )
            }
        }
        setEnableEdit(true)
    }

    const handleCloseSnackBar = () => {
        props.disableSnackBar();
        setEnableEdit(false)
    }
    return (
        <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={props.userDetailsUpdated}
          message="Userdetails Updated Successfully..!"
          key={vertical + horizontal}
          action={
            <Fragment>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleCloseSnackBar}
              >
                <CloseIcon />
              </IconButton>
            </Fragment>
          }
        />
            <h3 style={{fontSize:"22px",width:"100%",textTransform:"capitalize"}}>
                Personal Information</h3>
                <div className="row_container account_filtered_cars profile_form">
            <div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Full Name</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name"  
                    // value={newUserName ? newUserName : userDetails ? userDetails.username : ""} 
                    value={enableEdit ? newUserName : userDetails && userDetails.username} 
                    onChange={e => getNewUserName(e.target.value)} disabled={!enableEdit}/>
                    {/* <label className="name_label" for="account-name">Name</label> */}
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Mobile Number</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" 
                    // value={userDetails ? userDetails.phone : ""}
                    value={enableEdit ? newPhoneNumber : userDetails && userDetails.phone} 
                     onChange={e => getnewPhoneNumber(e.target.value)}/>
                    {/* <label className="name_label" for="account-name"></label> */}
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <h3 style={{fontSize:"16px",lineHeight:"20px",marginBottom:"12px"}}>Email Address</h3>
                    <div className="form-input-name">
                    <input type="text" maxLength="50" name="account-name" 
                    // value={userDetails ? userDetails.email: ""} 
                    value={enableEdit ? newMailId : userDetails && userDetails.email} 
                    onChange={e => getNewMailId(e.target.value)}
                    />
                    {/* <label className="name_label" for="account-name" data-focus-value = "Name"></label> */}
                    </div>
                </div>
                <div style = {{marginBottom:"24px"}}>
                    <button className="form_button" onClick={() => updateUserDetails()}>
                        <span>{enableEdit ? "Update" : "Edit"}</span></button>
                </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        userDetails: state.reducers.userDetails,
        userDetailsUpdated: state.reducers.userDetailsUpdated
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserDetails: (phone, userName, emial) => {
            dispatch(
                updateUserDetails(phone, userName, emial)
            )
        },
        disableSnackBar: () => {
            dispatch(
                disableUserDetailsSuccessSnackBar()
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);