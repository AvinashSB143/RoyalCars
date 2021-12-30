import "./brands.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAvailableCars, getCarsByBrand } from "../../actions";

import Skoda from "../../assests/Skoda.png";
import Toyota from "../../assests/Toyota.png";
import TATA from "../../assests/TATA.png";
import Mahindra from "../../assests/Mahindra.png";
import Volkswagen from "../../assests/VW.png";
import Renault from "../../assests/Renault.png";
import Ford from "../../assests/Ford.png";
import Honda from "../../assests/Honda.png";
import Hyundai from "../../assests/Hyundai.png";
import Maruthi from "../../assests/Maruthi.png";

const brands = [
  {url : Toyota, brandName: 'Toyota'},
  {url : TATA, brandName: 'TATA'},
  {url : Maruthi, brandName: 'Maruthi'},
  {url : Hyundai, brandName: 'Hyundai'},
  {url : Honda, brandName: 'Honda'},
  {url : Volkswagen, brandName: 'Volkswagen'},
  {url : Ford, brandName: 'Ford'},
  {url : Renault, brandName: 'Renault'},
  {url : Skoda, brandName: 'Skoda'},
  {url : Mahindra, brandName: 'Mahindra'}
  ]

const PopularBrands = (props) => {
  return (
    <div className="main_container column_container">
      <h2>Popular Brands</h2>
      <div className="brandcar_container">
        {/* <Link
          to="/lifeStyle"
          className="main_container brandcar_btn"
          onClick={() => props.getCarsByBrand("ford")}
        >
          Ford
        </Link> */}

          <div className="PopularBrands__listWrap">
       { brands.map((brand) => {
         return (
          <a class="PopularBrands__brand" hre="#" >
            <div class="PopularBrands__content">
          <img alt={brand.brandName} src={brand.url} style={{height: "60px",minHeight: "60px"}} />
            <p style={{fontSize: "12px"}}>{brand.brandName}</p>
            </div>
          </a>
                  )}
       )}
       <a class="PopularBrands__brand" hre="#" >
            <div class="PopularBrands__content">
            <p style={{fontSize: "16px"}}>View All Brands</p>
            </div>
          </a>
         </div>
        {/* <Link
          to="/lifeStyle"
          className="main_container brandcar_btn"
          onClick={() => props.getAvailableCars()}
        >
          View All Cars
        </Link> */}
      </div>
      {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.png?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.png?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
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
