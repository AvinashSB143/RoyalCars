import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import "./bodyType.css";
import "../../styles/styles.css";
import {
    getCarsByBodyType
} from "../../actions"

const BodyTypeCars = (props) => {
return(
    <div className="main_container column_container">
        <h2>
        Cars by Body Type
        </h2>
            <ul className=" main_container bodytype_images_container">
                <Link to="/lifeStyle"  onClick={() => props.getCarsByBodyType("hatchback")}>
                <img className="bodytype_image" src="https://media.istockphoto.com/photos/blue-hatchback-car-picture-id1135255668?b=1&k=20&m=1135255668&s=170667a&w=0&h=DhAzhm3sOIza3P8CyRt8lmbDcpfskafpusgfkuewQYg=" />
                </Link>
                <Link to="/lifeStyle"  onClick={() => props.getCarsByBodyType("sedan")}>
                <img className="bodytype_image" src="https://mcmscache.epapr.in/post_images/website_300/post_12645431/5d8d02195e992.jpeg" />
                </Link>
                <Link to="/lifeStyle" onClick={() => props.getCarsByBodyType("SUV")}>
                <img className="bodytype_image" src="https://imgd.aeplcdn.com/600x337/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85" />
                </Link>
            </ul>
        {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
    </div>
)
}


const mapStateToProps = state => {
    return{
        authToken: state.reducers.authToken
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getCarsByBodyType: data => {
        dispatch(
            getCarsByBodyType(data)
        )
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BodyTypeCars);