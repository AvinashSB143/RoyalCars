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
        "bookNow": selectedCar.imagePath,
        "model": selectedCar.model,
        "year": selectedCar.year,
        "brand": selectedCar.brand,
        "totalOwner": selectedCar.totalOwner,
        "kmDriven": selectedCar.kmDriven,
        "fuelType": selectedCar.fuelType,
        "bodyType": selectedCar.bodyType,
        "transmission": selectedCar.transmission,
        "customerPhoneNumner": userDetails.customerPhoneNumner
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
              src="http://65.0.81.1:5000/uploads/image_Toyota_Innova_Crysta_2020_0_1200x768.png"
            />
          </div>
          <div className="carDetails">
            <div className="rightSection">
              <div>
                <div className="shortList">
                  <div>
                    <div style={{ marginRight: "3px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="#222745"
                        stroke-width="0"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>
                    1 People
                    <br />
                    Shortlisted
                  </span>
                </div>
                <h1>
                  {selectedCar.year} {selectedCar.brand} {selectedCar.model}
                </h1>
                <div className="carFeature">
                  <span>{selectedCar.kmDriven} Kms</span>
                  <span>&nbsp;.&nbsp; {selectedCar.fuelType}</span>
                  <span> &nbsp;.&nbsp; {selectedCar.fuelType}</span>
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
                  <span>&nbsp; Spinny Car Hub, Malleshwaram, Bengaluru</span>
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
                  <div className="carPrice">
                    ₹ 12,25,000
                    <a> View benefits</a>
                    <svg
                      transform="rotate(-90 0 0)"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#6300A3"
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
                  </div>
                  <a className="carEMI">
                    <span>₹ 22,047</span> /month
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g>
                            <g>
                              <path
                                d="M0 0L24 0 24 24 0 24z"
                                transform="translate(-27 -373) translate(27 373)"
                              ></path>
                              <path
                                fill="#2e054e"
                                fill-rule="nonzero"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"
                                transform="translate(-27 -373) translate(27 373)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
                <p className="fixedPrice">Fixed on road price</p>
                <a className="checkPrice">
                  Check your savings
                  <svg
                    transform="rotate(-90 0 0)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#01B088"
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
                </a>
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