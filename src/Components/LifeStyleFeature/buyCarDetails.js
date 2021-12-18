import { Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';  
import { connect } from "react-redux";
import {bookNow} from "../../actions";
// import LocalOfferIcon from '@mui/icons-material/';

const BuyCarDetails = (props) => {
    console.log("selected car", props)
    const {selectedCar, userDetails} = props;

    const carInformation = {
        "amount": selectedCar ? selectedCar.budget: ""
    }
    return selectedCar ? (
      <div className="pageStyle">
        <div>
          <ul className="carsList">
            <li title="Home">
              <Link to="/homePage">
                Home
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#2E054E"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
            <li title="Buy Cars">
              <Link to="/lifeStyle">
                Buy Cars
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#2E054E"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
            <li title="Cars List">
              <Link to="/buyCar/cars">
                Car List
                <svg
                  transform="rotate(0 0 0)"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#2E054E"
                  width="7"
                  height="7"
                  viewBox="0 0 14 8"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M386 48L392 54 398 48"
                    transform="translate(-385 -47)"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div
          //   style={{ display: "flex", marginTop: "20px" }}
          className="buycar__container"
        >
          <div className="carView">
            {/* <img className="filter_car_img" src={selectedCar.imagePath} /> */}
            <img
              className="filter_car_img"
              src={`http://13.127.242.21:5000/${selectedCar.imagePath}`}
            />
          </div>
          <div className="carDetails">
            <div className="rightSection">
              <div>
                <h1>
                  {selectedCar && selectedCar.year} {selectedCar && selectedCar.brand} {selectedCar && selectedCar.model}
                </h1>
                <div className="carFeature">
                  <span>{selectedCar && selectedCar.kmDriven} Kms</span>
                  <span>&nbsp;.&nbsp; {selectedCar && selectedCar.fuelType}</span>
                  <span> &nbsp;.&nbsp; {selectedCar && selectedCar.fuelType}</span>
                </div>
                <div className="testDrive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      opacity="1"
                      d="M12.336 5.618L6.69.177a.645.645 0 00-.888 0L.157 5.618a.37.37 0 00-.137.413c.03.074.12.2.382.2h.636v4.836a.946.946 0 00.925.929h2.861V8.722h2.769V12h2.937a.935.935 0 00.906-.929V6.239h.655c.263 0 .352-.129.382-.2a.37.37 0 00-.137-.421z"
                      fill="#888888"
                    ></path>
                  </svg>
                  &nbsp; Home Test Drive: &nbsp;
                  <span>Available</span>
                </div>
                <div className="carLocation">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99998 0.166672C2.54998 0.166672 0.333313 2.04501 0.333313 4.95001C0.333313 6.80501 1.76248 8.98667 4.61498 11.5008C4.83665 11.6933 5.16915 11.6933 5.39081 11.5008C8.23748 8.98667 9.66665 6.80501 9.66665 4.95001C9.66665 2.04501 7.44998 0.166672 4.99998 0.166672ZM4.99998 6.00001C4.35831 6.00001 3.83331 5.47501 3.83331 4.83334C3.83331 4.19167 4.35831 3.66667 4.99998 3.66667C5.64165 3.66667 6.16665 4.19167 6.16665 4.83334C6.16665 5.47501 5.64165 6.00001 4.99998 6.00001Z"
                      fill="#888888"
                    ></path>
                  </svg>
                  <span>&nbsp; Royal Cars Car Hub, Mangalore</span>
                  <span className="arrowIcon">
                    <svg
                      transform="rotate(0 0 0)"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#2E054E"
                      width="7"
                      height="7"
                      viewBox="0 0 14 8"
                    >
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        d="M386 48L392 54 398 48"
                        transform="translate(-385 -47)"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="carPriceMargin">
                </div>
                <p className="fixedPrice">Fixed on road price</p>
                <div className="availableOffer">
                  <h1>Available Offers</h1>
                  <ul className="offerList">
                    <li className="offerItem">
                      <div className="offerIcon">
                        {/* <LocalOfferIcon /> */}
                      </div>
                      <div className="offerText">
                        <span>Guaranteed buyback: &nbsp;</span>
                        Return this car to us within tenure of 6, 12 or 18
                        months at guranteed prices
                      </div>
                      <div className="offerArrow">
                        <svg
                          transform="rotate(-90 0 0)"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#2e054e"
                          width="12"
                          height="12"
                          viewBox="0 0 14 8"
                        >
                          <path
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M386 48L392 54 398 48"
                            transform="translate(-385 -47)"
                          ></path>
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "24px 0",
                  margin: "0 0 0 10px",
                }}
                onClick={() => props.bookNow(carInformation)}
              >
                <Button
                  style={{
                    backgroundColor: "#6300a3",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                >
                  Book Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    marginLeft: "20px",
                    borderRadius: "8px",
                  }}
                >
                  Free Test Drive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loaing...!</p>
    );
};

const mapStateToProps = state => {
    return{
        selectedCar: state.reducers.selectedCar,
        userDetails: state.reducers.userDetails,
    }
    
}
const mapDispatchToProps = dispatch => {
    return{
        bookNow: data => {
            dispatch(
                bookNow(data)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCarDetails);