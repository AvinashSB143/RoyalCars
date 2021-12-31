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

  const displayCarsByBrand = (brand, index) => {
      props.getCarsByBrand(brand)
      window.scroll(0,0)
  }

  const getAllCars = () => {
    props.getAvailableCars()
    window.scroll(0,0)
  }
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
       { brands.map((brand,index) => {
         return (
          <a class="PopularBrands__brand" hre="#" >
            <Link to="/lifeStyle" class="PopularBrands__content" 
            onClick={() => {
              displayCarsByBrand(brand.brandName, index)
            }
            }>
          <img alt={brand.brandName} src={brand.url} style={{height: "60px",minHeight: "60px"}} />
            <p style={{fontSize: "12px"}}>{brand.brandName}</p>
            </Link>
          </a>
                  )}
       )}
       <Link to="/lifeStyle" class="PopularBrands__brand" onClick={() => {
              getAllCars()
            }}>
            <div class="PopularBrands__content" >
            <p style={{fontSize: "16px"}}>View All Brands</p>
            </div>
          </Link>
         </div>
      </div>
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
