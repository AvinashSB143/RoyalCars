import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./lifestyle.css";
import "../../styles/styles.css";
import {
    getCarsByCategory
} from "../../actions"
// import history from "../history";

const LifeStyle = (props) => {
    return (
        <div className="main_container column_container lifeStyle_container">
            <h2>
                Cars by Interests
            </h2>
            <div className="lifeStyle_images">
                <Link className="lifeStyle_image" to="/lifeStyle" 
                onClick={() => (
                    props.getCarsByCategory("family"),
                    window.scroll(0,0)
                )
                }>
                    <img alt="Family" className="lifeStyle_img" src="//d308ljkq6e62o1.cloudfront.net/img/iIOcHsv2Rxy4wmiUJ5VSGg/file.jpeg" />
                    <p className="Choice_Item">FAMILY</p>
                </Link>
                <Link className="lifeStyle_image" to="/lifeStyle" 
                onClick={() => (props.getCarsByCategory("adventure"), window.scroll(0,0))}>
                    <img alt="Adventures" className="lifeStyle_img" src="//d308ljkq6e62o1.cloudfront.net/img/mRHuBQXQQ7aI2Qzy68t0eg/file.jpeg" />
                    <p className="Choice_Item">ADVENTURE</p>
                </Link>
                <Link className="lifeStyle_image" to="/lifeStyle" onClick={() => (props.getCarsByCategory("value"), window.scroll(0,0))}>
                    <img alt="Value" className="lifeStyle_img" src="//d308ljkq6e62o1.cloudfront.net/img/ZMEcczt6RE2KfOK5XCiWaA/file.jpeg" />
                    <p className="Choice_Item">VALUE</p>
                </Link>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        authToken: state.reducers.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarsByCategory: data => {
            dispatch(
                getCarsByCategory(data)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeStyle);