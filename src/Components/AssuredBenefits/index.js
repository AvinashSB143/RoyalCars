import "./benefits.css";
import "../../styles/styles.css";
import Logo from "../../images/Logo.png";
import CarAssistance from "../../assests/CarAssistance.jpg";
import HomeTestDrive from "../../assests/HomeTestDrive.jpg";
import OnlinePayment from "../../assests/OnlinePayment.jpg"; 
import ValueForMoney from "../../assests/ValueForMoney.jpg"; 



const AssuredBenefits = () => {
    return (
        <div className="column_container">
            <div className="main_container column_container">
                <img src={Logo} width="100px" height="100px" alt="Royal Cars" />
                <h1 style={{ margin: 0 }}>
                    Royal Car benefits
                </h1>
                <h3 style={{ marginTop: "20px", fontWeight: "lighter" }}>
                    The sure road to Car Joy
                </h3>
            </div>
            <div className="benefits_images">
                <div className="benefits_img">
                    <img className="benefit_image" alt="Value for money" src={ValueForMoney} />
                    <p className="benefit"> Value for money: Priced as per the market value and condition</p>
                </div>
                {/* <div className="benefits_img">
                <img className="benefit_image" alt="Easy Online search" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/5-day-money-back-guarentee.png" />
                <p className="benefit">Easy Online search – Choose from wide category of cars in the website</p>
                </div> */}
                <div className="benefits_img">
                    <img className="benefit_image" alt="Expert Assistance" src={CarAssistance} />
                    <p className="benefit"> Choice assistance from a team of expert personnel</p>
                </div>
                {/* <div className="benefits_img">
                <img className="benefit_image" alt="Best spot evaluation" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/5-day-money-back-guarentee.png" />
                <p className="benefit">Best spot evaluation</p>
                </div> */}
                {/* <div className="benefits_img">
                <img className="benefit_image" alt="Free document transfers" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/1-year-spinny-warranty.png" />
                <p className="benefit">Free document transfers</p>
                </div> */}
                <div className="benefits_img">
                    <img className="benefit_image" alt="Home Test Drive, Delivery and Pickup" src={HomeTestDrive} />
                    <p className="benefit">Home Test Drive, Delivery and Pickup</p>
                </div>
                <div className="benefits_img">
                    <img className="benefit_image" alt="Online Payment" src={OnlinePayment} />
                    <p className="benefit"> Online Payment – One day settlement</p>
                </div>
            </div>
        </div>
    )
}

export default AssuredBenefits;