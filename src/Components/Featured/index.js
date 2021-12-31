import "./featured.css";
import "../../styles/styles.css";
import { connect } from 'react-redux';
import Carousel from '../utils/Carousel';
import { Link } from 'react-router-dom';
import { selectedCar } from "../../actions";


const images = [
    {
        url: "https://media.istockphoto.com/photos/blue-hatchback-car-picture-id1135255668?b=1&k=20&m=1135255668&s=170667a&w=0&h=DhAzhm3sOIza3P8CyRt8lmbDcpfskafpusgfkuewQYg=",
        title: "2014 Hyundai Grand i10 Sportz",
        subTitle: "95.3K km | Petrol | Manual",
        price: "₹6.99 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://mcmscache.epapr.in/post_images/website_300/post_12645431/5d8d02195e992.jpeg",
        title: "2014 Volkswagen Vento Comfort",
        subTitle: "34.3K km | Petrol | Manual",
        price: "₹5.86 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://imgd.aeplcdn.com/600x337/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85",
        title: "2014 Hyundai Grand i10 Sportz",
        subTitle: "54.3K km | Petrol | Manual",
        price: "₹3.99 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://media.istockphoto.com/photos/blue-hatchback-car-picture-id1135255668?b=1&k=20&m=1135255668&s=170667a&w=0&h=DhAzhm3sOIza3P8CyRt8lmbDcpfskafpusgfkuewQYg=",
        title: "2014 Volkswagen Vento Comfort",
        subTitle: "102.3K km | Petrol | Manual",
        price: "₹3.99 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://media.istockphoto.com/photos/blue-hatchback-car-picture-id1135255668?b=1&k=20&m=1135255668&s=170667a&w=0&h=DhAzhm3sOIza3P8CyRt8lmbDcpfskafpusgfkuewQYg=",
        title: "2014 Hyundai Grand i10 Sportz",
        subTitle: "63.3K km | Petrol | Automatic",
        price: "₹9.6 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://mcmscache.epapr.in/post_images/website_300/post_12645431/5d8d02195e992.jpeg",
        title: "2014 Hyundai Grand i10 Sportz",
        subTitle: "73.3K km | Petrol | Manual",
        price: "₹3.99 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    },
    {
        url: "https://media.istockphoto.com/photos/blue-hatchback-car-picture-id1135255668?b=1&k=20&m=1135255668&s=170667a&w=0&h=DhAzhm3sOIza3P8CyRt8lmbDcpfskafpusgfkuewQYg=",
        title: "2014 Hyundai Grand i10 Sportz",
        subTitle: "63.3K km | Petrol | Manual",
        price: "₹3.99 Lakhs",
        location: "Royal Car Hub, Seasons Mall, Bangalore",
        HomeTestDrive: true
    }
];

const FeaturedCars = (props) => {
    return (
        <div className="main_container column_container">
            <h2>
                Featured Assured Cars
            </h2>
            {/* <ul className="main_container featuredcar_container">
                <buttons className="main_container featuredcar_btn">
                    <span> Newly Added </span>
                </buttons>
                <buttons className="main_container featuredcar_btn">
                    More Popular
                </buttons>
            </ul> */}
            {/* <Carousel /> */}
            <div class="grid--4-cols">
                {props.assuredCarList && props.assuredCarList.map((car) => {
                    return (
                        <Link to="/buyCar/cars" class="feature-box" onClick={() => {
                            props.selectedCar(car)
                        }}>
                            <img
                                src={`http://3.111.30.111:5000/${car.imagePath}`}
                                class="feature-img"
                                alt=""
                            />
                            <div class="feature-content">
                                <div className="content-details">
                                    <h4>{car && car.year} {car && car.brand} {car && car.model}</h4>
                                    <h5><span>{car && car.kmDriven} Kms</span>
                  <span>&nbsp;.&nbsp; {car && car.fuelType}</span>
                  <span> &nbsp;.&nbsp; {car && car.fuelType}</span></h5>
                                    <h3>{car.budget}</h3>
                                </div>
                                <div className="location-details">
                                    {/* <h5 style={{ borderTop: "0.5px gray solid", paddingTop: "8px" }}>{image.location}</h5> */}
                                    {/* <h6>{selectedCar.HomeTestDrive ? "Home Test Drive Available" : null}</h6> */}
                                    <h6>Home Test Drive Available</h6>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )}
            </div>
            {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        assuredCarList: state.reducers.assuredCarList
    };
};

  
const mapDispatchToProps = (dispatch) => {
    return {
        selectedCar: (data) => {
            dispatch(selectedCar(data));
          },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCars)