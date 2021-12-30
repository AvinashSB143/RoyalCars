import { Link } from "react-router-dom";
import "./working.css";
import "../../styles/styles.css";
import { connect } from "react-redux";
import { getAvailableCars, getCarsByBrand, enableLogUser } from "../../actions";

import CarBuy from '../../assests/carBuy.jpg';
import BuyFromHome from '../../assests/homecar.jpg';
import SellCar from '../../assests/sellCar.jpg';
import TestDrive from '../../assests/testdrive.jpg';

const Working = (props) => {
  return (
    <div className="main_container column_container working_container">
      <div className="working__Heading">
        <h2>How Royal Cars Works</h2>
        <p margin="10px auto" className="mobile_car_working_helperText">
          You won’t just love our cars, you’ll love the way you buy them.
        </p>
      </div>
      <div className="working_images">
        <div className="working_img">
          <img
            style={{ width: "100%" }}
            src={CarBuy}
          />
          <h3 style={{ textAlign: "center" }}>
            Choose from a range of best pre-owned cars
          </h3>
          <p style={{ textAlign: "center", margin: 0 }}>
            Over 6000 fully inspected cars. Best performance guaranteed
          </p>
          <div style={{ marginTop: "10px" }}>
            <Link to="/lifeStyle" onClick={() => props.getAvailableCars()}>
              {" "}
              View All Cars
            </Link>
          </div>
        </div>
        <div className="working_img">
          <img
            style={{ width: "100%" }}
            src={TestDrive}
          />
          <h3 style={{ textAlign: "center" }}>
            Take the test drive at our location or at the convenience of your
            home
          </h3>
          <p style={{ textAlign: "center", margin: 0 }}>
            Easy appointment. Cars at your doorstep. Expert assistance
          </p>
          <div style={{ marginTop: "10px" }}>
            <Link to="#"> Book Test Drive</Link>
          </div>
        </div>
        <div className="working_img">
          <img
            style={{ width: "100%" }}
            src={BuyFromHome}
          />
          <h3 style={{ textAlign: "center" }}>
            Own a car just with the comfort of your home
          </h3>
          <p style={{ textAlign: "center", margin: 0 }}>
            Get rid of complex paper work. Easy Online payment. Home delivery
          </p>
          <div style={{ marginTop: "10px" }}>
            <Link
              to={{
                pathname: "/lifeStyle",
                state: { fromWorking: true },
              }}
              onClick={() => {
                props.getAvailableCars();
              }}
            >
              {" "}
              Buy a Car
            </Link>
          </div>
        </div>
        <div className="working_img">
          <img
            style={{ width: "100%" }}
            src={SellCar}
          />
          <h3 style={{ textAlign: "center" }}>Sell your car hassle free</h3>
          <p style={{ textAlign: "center", margin: 0 }}>
            Get instant quote. Free doorstep evaluation. Quick payment
          </p>
          <div style={{ marginTop: "10px" }}>
            <Link to={`${props.authToken ? "/sell" : "#"}`}
            onClick={() => {
              if(!props.authToken) {
                props.enableLogUser(true);
                window.scrollTo(0, 0);
              }
            }}
            > Sell a Car</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.reducers.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailableCars: () => {
      dispatch(getAvailableCars());
    },
    getCarsByBrand: (data) => {
      dispatch(getCarsByBrand(data));
    },
    enableLogUser: data => {
      dispatch(
        enableLogUser(data)
      )
  },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Working);
