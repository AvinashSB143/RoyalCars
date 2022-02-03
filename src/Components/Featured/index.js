import "./featured.css";
import "../../styles/styles.css";
import { connect } from 'react-redux';
import CarouselModule from '../utils/Carousel';
import { Link } from 'react-router-dom';
import { selectedCar, showSearchBar } from "../../actions";
import { Carousel } from '@trendyol-js/react-carousel';



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
    
const saveSelectedCar = (car) => {
    props.selectedCar(car);
    props.showSearchBar(false);
    localStorage.setItem("selectedCarYear", car.year);
    localStorage.setItem("selectedCarbrand", car.brand);
    localStorage.setItem("selectedCarModel", car.model);
    localStorage.setItem("selectedCarFuelType", car.fuelType);
    localStorage.setItem("selectedCarTransmission", car.transmission);
    localStorage.setItem("selectedCarImagePath", car.imagePath);
    localStorage.setItem("selectedCarBudget", car.budget);
    localStorage.setItem("selectedCarkmDriven", car.kmDriven);
    localStorage.setItem("selectedCarinsurance", car.insurance);
    localStorage.setItem("selectedCarinsuranceValidTill", car.insuranceValidTill);
}
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
            <div class="grid--4-cols">
                {/* <Carousel slide={3}> */}
                {props.assuredCarList && props.assuredCarList.map((car) => {
                    const carImage = car.imagePath.split(",");
                    return (
                        <Link to="/buyCar/cars" class="feature-box" onClick={() => {
                            // props.selectedCar(car)
                            saveSelectedCar(car)
                        }}>
                            <img
                                src={`https://royalcarsmangalore.in:5000/${carImage[0]}`}
                                class="feature-img"
                                alt=""
                            />
                            <div class="feature-content">
                                <div className="content-details">
                                    <h4 style={{margin: "10px auto"}}>{car && car.year} &nbsp; &nbsp; {car && car.brand} &nbsp; &nbsp; {car && car.model}</h4>
                                    <p  style={{lineHeight: "20px",fontSize: "14px",textTransform: "capitalize"}}><span>{car && car.kmDriven} Kms</span>
                                    &nbsp; &nbsp;<span>.{car && car.fuelType}</span>
                                    &nbsp; &nbsp;<span>.{car && car.transmission}</span></p>
                                    &nbsp; &nbsp;<p style={{fontWeight: "bolder",fontSize: "24px"}} >₹ {car.budget}</p>
                                </div>
                                <div className="location-details">
                                    <p style={{ borderTop: "0.5px gray solid", paddingTop: "8px" }}>{car.location}</p>
                                    <h6>{selectedCar.HomeTestDrive ? "Home Test Drive Available" : null}</h6>
                                    <h5>Home Test Drive Available</h5>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )}
            </div>
            {/* </Carousel> */}
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
        showSearchBar: (data) => {
            dispatch(showSearchBar(data));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCars)