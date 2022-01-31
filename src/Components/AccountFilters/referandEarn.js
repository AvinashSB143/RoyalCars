import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { referFriend, disableSnackBarReferral } from "../../actions";
import "../../styles/styles.css";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: "#9a9191",
      height: "200px",
      borderRadius: "10px"

    },
  };

const ReferEarn = (props) => {
    const [localState,setLocalState] = useState({
        expandMoreSection:false,
        questionNo:null
    })

    const [friendPhoneNumber, setFriendPhoneNumber] = useState('')
    const [showModal, setShowModal] = useState(false)

    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'center',
      });

  const { vertical, horizontal, open } = state;


    const changeArrow = (value) => {
        if(!localState.expandMoreSection && value === 1){
            setLocalState({
                ...localState,
                expandMoreSection:true,
                questionNo:value
            })
        }else if(!localState.expandMoreSection && value === 2){
            setLocalState({
                ...localState,
                expandMoreSection:true,
                questionNo:value
            })
        }else if(!localState.expandMoreSection && value === 3){
            setLocalState({
                ...localState,
                expandMoreSection:true,
                questionNo:value
            })
        }
        else {
            setLocalState({
                ...localState,
                expandMoreSection:false
            })
        }
    }

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const readFriendPhoneNumber = (e) => {
        setFriendPhoneNumber(e.target.value)
    }

    const referFriendToRoyalCars = () => {
        setShowModal(false);
        props.referFriend(friendPhoneNumber);
    }

    const handleClose = () => {
        props.disableSnackBarReferral()
      };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={props.referFriendSuccessFul}
                key={vertical + horizontal}
                action={
                <React.Fragment>
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
                    >
                    <CloseIcon />
                    </IconButton>
                </React.Fragment>
                }
            />
       
            {/* <h3 style={{fontSize:"22px",width:"100%",textTransform:"capitalize"}}>
                Refer And Earn
            </h3> */}
            <div className="row_container account_filtered_cars">
            <h3 style={{fontSize:"18px",width:"100%",textTransform:"capitalize",
                    marginLeft:"16px"
        }}>
                How Referal works
            </h3>
            </div>
            <div className = "referal_details">
                <div className="refer_friend">
                <div className="refer_friend_bgi" style={{backgroundImage:
                    `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-909040892-1535400758.jpg?resize=480:*")`}}>
                </div>
                <div className="refer_friend_desc" onClick={handleOpenModal}>
                <h2>Refer Your Friends</h2>
                <p style = {{color:"#fff"}}>
                    Once your friend uses your referral you get ₹3000/- straight into your bank account after you have bought or sold a car at Royal Cars.</p>
                <button className="refer_friend_btn">
                    <span>Refer a friend
                    <svg transform="rotate(0 0 0)" xmlns="http://www.w3.org/2000/svg" stroke="#4169e1" width="10" height="10" viewBox="0 0 14 8"><path fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M386 48L392 54 398 48" transform="translate(-385 -47)">
                        </path></svg>
                    </span>
                </button>
                <Modal
                    isOpen={showModal && !props.referFriendSuccessFul}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                >
                    <form>
                        <h2>Please Enter Your Friend Phone Number</h2>
                    <input
                    style={{
                        display: "block",
                        margin: "10px auto",
                        height: "30px",
                        width: "50%",
                        position: "relative"
                    }}
                    className="refer_earn_input" onChange={(e) => readFriendPhoneNumber(e)}
                    />
                    <div className="main_container">
                    <button 
                    style={{
                        margin: "auto",
                        height: "30px",
                        width: "30%",
                        fontSize: "14px",
                        background: "#ffdf00",
                        color: "black",
                        position: "absolute",
                        left: "35%"
                    }}
                    className="refer_friend_Button"  onClick={() => referFriendToRoyalCars()}> Refer </button>
                    <button 
                    style={{
                        margin: "auto",
                        height: "30px",
                        width: "30%",
                        fontSize: "14px",
                        background: "#ffdf00",
                        color: "black",
                        position: "absolute",
                        left: "35%"
                    }}
                    className="refer_friend_Button"  onClick={() => referFriendToRoyalCars()}> Close </button>
                   </div>
                    </form>
                </Modal>
                </div>
                </div>
                <div className = "redeem_rewards">
                    <h2>Track & Redeem Rewards</h2>
                </div>
            </div>
            <div className="question_sec">
                    <h2 className ="list_heading">Frequently asked question</h2>
                    <div className = "quest_ans">
                        <div className = "quest_forGtm">
                            <div className = "farquest">
                                <h3 className = "farquestContent">
                                    Q. I'm not a Royal Cars<sup>®</sup>
                                    customer yet, can I still refer my friends?
                                </h3>
                                <div class="quest_accordianStatus " onClick = {() =>changeArrow(1)}>
                                {localState.expandMoreSection && localState.questionNo === 1  ? 
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }

                                </div>
                            </div>
                            {localState.expandMoreSection && localState.questionNo === 1 &&
                                  <p className="answer">
                                      Absolutely, customer or not, you’re welcome to participate in the referral rewards program. While you can refer your friends and accumulate rewards, you will be allowed to redeem them only after you complete a transaction at Royal Cars yourself.
                                  </p>
                                  }
                        </div>
                        <div className = "quest_forGtm">
                        <div className = "farquest">
                                <h3 className = "farquestContent">
                                    Q. How much can I earn in rewards ?
                                </h3>
                                <div class="quest_accordianStatus " onClick = {() =>changeArrow(2)}>
                                {localState.expandMoreSection && localState.questionNo === 2 ? 
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }

                                </div>
                            </div>
                            {localState.expandMoreSection && localState.questionNo === 2 &&
                                  <p className="answer">
                                      There’s no limit* to how much you can earn in rewards. Each car sold or bought via your referral gets you an assured cash reward of ₹3,000/-. However, you can only refer your friends to Royal Cars for a period of 1 year from the date of purchase of your Royal Cars car or the sale of your car to Royal Cars.
    *Subject to changes at the discretion of the business.
                                  </p>
                                  }
                        </div>
                        <div className = "quest_forGtm">
                        <div className = "farquest">
                                <h3 className = "farquestContent">
                                   I've refered a friend but haven't received my reward yet ?
                                </h3>
                                <div class="quest_accordianStatus " onClick = {() =>changeArrow(3)}>
                                {localState.expandMoreSection && localState.questionNo === 3 ? 
                                <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }

                                </div>
                            </div>
                            {localState.expandMoreSection && localState.questionNo === 3 &&
                                  <p className="answer">
                                      To be eligible for your referral reward, the following listed conditions have to be met:
    <ul style = {{listStyle:"disc",marginLeft:"18px"}}>
      <li>Your friends have to complete a sale or purchase with us.</li>
      <li>If you’re an existing customer, the referral must be made within 3 year from the date of your sale/purchase at Royal Cars.</li>
      <li>While the referral rewards earned by existing customers are immediately available for redeeming to their bank accounts, non-customers are required to complete a sale/purchase within 90 days of a successful referral to be eligible for the same</li>
      <li>Bank account details must be present in your account &amp; verified by Royal Cars.</li>
    </ul>
    <p>For further assistance, you may get in touch with us at <a href="tel:727-727-7275">727-727-7275</a> or write to us at <a href="mailto:contact@Royal Cars.com">contact@Royal Cars.com.</a></p>

     </p>
                                  }
                        </div>
                    </div>
                </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
    referFriendSuccessFul: state.reducers.referFriendSuccessFul,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        referFriend: (phoneNumber) => {
            dispatch(
                referFriend(phoneNumber)
            )
        },
        disableSnackBarReferral: () => {
            dispatch(
                disableSnackBarReferral()
            )
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(ReferEarn); 