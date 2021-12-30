import "./benefits.css";
import "../../styles/styles.css";
import Logo from "../../images/Logo.png";

const AssuredBenefits = () => {
    return(
        <div className="main_container column_container">
            <div className="main_container column_container">
                <img src={Logo} width="100px" height="100px"/>
                <h1 style={{ margin: 0}}>
                    Royal Car benefits
                </h1>
                <p margin="10px auto">
                The sure road to Car Joy
                </p>
            </div>
            <div className="benefits_images">
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/200-inspection-point.png" />
                <p className="benefit"> Value for money: Priced as per the market value and condition</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/5-day-money-back-guarentee.png" />
                <p className="benefit">Easy Online search – Choose from wide category of cars in the website</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/1-year-spinny-warranty.png" />
                <p className="benefit"> Choice assistance from a team of expert personnel</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/5-day-money-back-guarentee.png" />
                <p className="benefit">Best spot evaluation</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/1-year-spinny-warranty.png" />
                <p className="benefit">Free document transfers</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/fixed-price-assurance.png" />
                <p className="benefit">Home Test Drive, Delivery and Pickup</p>
                </div>
                <div className="benefits_img">
                <img className="benefit_image" src="https://d1263yrto77i5b.cloudfront.net/0.2.1222/assets/images/pages/HomePage/components/SpinnyAssured/assets/200-inspection-point.png" />
                <p className="benefit"> Online Payment – One day settlement</p>
                </div>
            </div>
        </div>
    )
}

export default AssuredBenefits;