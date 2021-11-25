import {Link} from 'react-router-dom';
import "./lifestyle.css";
import "../../styles/styles.css";
// import history from "../history";

const LifeStyle = () => {
return(
    <div className="main_container column_container lifeStyle_container">
        <h2>
        Cars by Lifestyle
        </h2>
        <div className="lifeStyle_images">
        <Link className="lifeStyle_image" to="/lifeStyle" >
            <img className="lifeStyle_img"  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        </Link>
        <Link className="lifeStyle_image" to="#" >
            <img className="lifeStyle_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        </Link>
        <Link className="lifeStyle_image" to="#" >
            <img className="lifeStyle_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
            </Link>
        </div>
    </div>
)
}

export default LifeStyle;