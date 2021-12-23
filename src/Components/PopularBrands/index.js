import "./brands.css";
import "../../styles/styles.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getAvailableCars, getCarsByBrand } from "../../actions"

const PopularBrands = props => {
return(
    <div className="main_container column_container">
        <h2>
            Popular Brands
        </h2>
            <ul className="main_container brandcar_container">
                <Link to="/lifeStyle" className="main_container brandcar_btn"
                onClick={() => props.getCarsByBrand("ford")}
                >
                   <span> Ford </span>
                </Link>
                <Link to="/lifeStyle" className="main_container brandcar_btn"
                onClick={() => props.getAvailableCars()}
                >
                    View All Cars
                </Link>
            </ul>
        {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
    </div>
)
}


const mapStateToProps = state => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return {
         getAvailableCars: () => {
            dispatch(
                getAvailableCars()
                )
        },        
         getCarsByBrand: (data) => {
            dispatch(
                getCarsByBrand(data)
                )
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularBrands);