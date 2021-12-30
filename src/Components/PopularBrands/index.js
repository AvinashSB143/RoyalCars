import "./brands.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAvailableCars, getCarsByBrand } from "../../actions";

import Skoda from "../../assests/Skoda.jpg";
import Toyota from "../../assests/Toyota.jpg";
import TATA from "../../assests/TATA.jpg";
import Mahindra from "../../assests/Mahindra.jpg";
import Volkswagen from "../../assests/VW.jpg";
import Renault from "../../assests/Renault.jpg";
import Ford from "../../assests/Ford.jpg";
import Honda from "../../assests/Honda.jpg";
import Hyundai from "../../assests/Hyundai.jpg";
import Maruthi from "../../assests/Maruthi.jpg";
import Nissan from "../../assests/Nissan.jpg";

const brands = [
  {url : Skoda, brandName: 'Skoda'},
  {url : Toyota, brandName: 'Toyota'},
  {url : TATA, brandName: 'TATA'},
  {url : Maruthi, brandName: 'Maruthi'},
  {url : Hyundai, brandName: 'Hyundai'},
  {url : Honda, brandName: 'Honda'},
  {url : Volkswagen, brandName: 'Volkswagen'},
  {url : Ford, brandName: 'Ford'},
  {url : Renault, brandName: 'Renault'},
  {url : Mahindra, brandName: 'Mahindra'},
  {url : Nissan, brandName: 'Nissan'}
  ]

const PopularBrands = (props) => {
  return (
    <div className="main_container column_container">
      <h2>Popular Brands</h2>
      <ul className="main_container brandcar_container">
        {/* <Link
          to="/lifeStyle"
          className="main_container brandcar_btn"
          onClick={() => props.getCarsByBrand("ford")}
        >
          Ford
        </Link> */}

       { brands.map((brand) => {
         return (
          <div className="PopularBrands__listWrap">
          <a class="PopularBrands__brand" hre="#" >
            <div class="PopularBrands__content">
          <img alt={brand.brandName} src={brand.url} />
            <p>{brand.brandName}</p>
            </div>
          </a>
         
         </div>
         )}
         )}
        <Link
          to="/lifeStyle"
          className="main_container brandcar_btn"
          onClick={() => props.getAvailableCars()}
        >
          View All Cars
        </Link>
      </ul>
      {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailableCars: () => {
      dispatch(getAvailableCars());
    },
    getCarsByBrand: (data) => {
      dispatch(getCarsByBrand(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularBrands);
