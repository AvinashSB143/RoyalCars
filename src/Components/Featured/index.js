import "./featured.css";
import "../../styles/styles.css";
import Carousel from '../utils/Carousel';


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

const FeaturedCars = () => {
    return (
        <div className="main_container column_container">
            <h2>
                Featured Assured Cars
            </h2>
            <ul className="main_container featuredcar_container">
                <buttons className="main_container featuredcar_btn">
                    <span> Newly Added </span>
                </buttons>
                <buttons className="main_container featuredcar_btn">
                    More Popular
                </buttons>
            </ul>
            {/* <Carousel /> */}
            <div class="grid--4-cols">
                {images.map((image) => {
                    return (
                        <div class="feature-box">
                            <img
                                src={image.url}
                                class="feature-img"
                                alt=""
                            />
                            <div class="feature-content">
                                <div className="content-details">
                                    <h4>{image.title}</h4>
                                    <h5>{image.subTitle}</h5>
                                    <h3>{image.price}</h3>
                                </div>
                                <div className="location-details">
                                    <h5 style={{ borderTop: "0.5px gray solid", paddingTop: "8px" }}>{image.location}</h5>
                                    <h6>{image.HomeTestDrive ? "Home Test Drive Available" : null}</h6>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
        </div>
    )
}

export default FeaturedCars;