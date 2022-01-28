import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from "@material-ui/core/styles/withStyles";
import "../../../styles/styles.css"
import "./carBuyingworking.css"


const styles = theme => ({
    root: {
        margin: "10px auto"
    }
});


const CarBuyingworking = (props) => {

    const [index, setIndex] = useState(0);


    const Culture = ["https://thumbs.dreamstime.com/z/business-meeting-word-culture-table-top-view-people-people-having-discussing-over-work-office-91587859.jpg",
        , "https://assets.ltkcontent.com/images/7206/examples-of-culture_0066f46bde.jpg",
        "https://media.istockphoto.com/photos/global-culture-picture-id1278525359?b=1&k=20&m=1278525359&s=170667a&w=0&h=-YF9ut3C7_eFlaw6qfqIkgH03YRq_seh18o4zxSZEZ8="]

    const investor = ["https://tse1.mm.bing.net/th?id=OIP.4z0INfDirgDYVvgHvGXbugHaBc&pid=Api&P=0&w=529&h=104",
        "https://jri-ltd.com/images/2020/01/08/investors_in_people_logo.png",
        "https://tse4.mm.bing.net/th?id=OIP.dLXdxDxow35I59vrQQ_qNQHaBH&pid=Api&P=0&w=616&h=93",
        "https://tse1.mm.bing.net/th?id=OIP.THsbqlu1X5v-NHb0HPekCwHaB1&pid=Api&P=0&w=492&h=123"
    ]

    let slideIndex = 1;

    const plusSlides = (n) => {
        return slideIndex += n;
    }
    const { classes } = props;
    return (
        <div>
            <div className="main_container column_container car-working-feature">
                <div className="more_about_us" style={{ backgroundImage: `url("https://singularityhub.com/wp-content/uploads/2019/02/cockpit-view-self-driving-car-night-automation-shutterstock-685666552-1068x601.jpg")` }}>
                    <div>
                        <h1>In it to drive it</h1>
                        <h2>
                            <span>Four wheels fuel a billion dreams and</span>
                            <br />
                            <span>for every dream there is a Royal Cars
                                <sup>®</sup>
                            </span>
                        </h2>
                        {/* <div className="about_us_button_container">
                        <button className = "about_us_button">Watch the film</button>
                    </div> */}
                    </div>
                </div>
                <div className="about_us_card_container">
                    <span>
                        <h1> We are about car joy - from selection to every part of ownership </h1>
                        <p className="working_buy_description">With rich experience in the car market space, Royal Cars is the one-stop destination for all the best pre-owned cars in Mangalore.</p>
                        <Link to="/lifeStyle" className="assured_cars">See Royal Car Assured Cars</Link>
                    </span>
                </div>
                <div className="carBuyingworkingCars">

                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container">
                            {/* <h1>Buying Your Assured Royal Cas</h1> */}
                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                        <div className="column_container handPicked_cars_details">
                            <h1> Choose from our handpicked cars</h1>
                            <h4 className="handPicked_cars_description">
                                Personalise your search with filters. Price range or body type, there’s a Royal Cars Assured® car for you. High-definition pictures of each car and an online test-drive with Royal Cars 360 help you further.
                            </h4>
                        </div>
                    </div>
                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container handPicked_cars_details">
                            <h1> Get into every detail</h1>
                            <h4 className="handPicked_cars_description">
                                Check out our detailed 200-point inspection report, features and specs, price, financing and buyback options for each car.
                            </h4>
                        </div>
                        <div className="column_container">
                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                    </div>
                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container">

                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                        <div className="column_container handPicked_cars_details">
                            <h1>Your test drive, your way</h1>
                            <h4 className="handPicked_cars_description">
                                Test-drive any of our cars at your home or at a Royal Cars car hub near you. Have a chat about any aspect of the car, our experts know each car inside-out. Enjoy your time with it, see if it’s what you’ve always wanted.
                            </h4>
                        </div>
                    </div>
                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container handPicked_cars_details">
                            <h1> Paperwork and financing, handled</h1>
                            <h4 className="handPicked_cars_description">
                                We keep your info confidential and follow global security standards to process your payments. Enjoy financing options for your Royal Cars Assured® car with interest rates starting as low as 12.5%.
                            </h4>
                        </div>
                        <div className="column_container">
                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                    </div>
                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container">
                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                        <div className="column_container handPicked_cars_details">
                            <h1>Complete all payments, online</h1>
                            <h4 className="handPicked_cars_description">
                                We support most National and International banking partners and accept payments through major credit cards, debit cards and net banking systems. In addition, we also enable part payment or fractional payments using a range of digital payment options on the United Payments Interface (UPI).
                            </h4>
                        </div>
                    </div>
                    <div className="SquadSpinny main_container handPicked_car_container">
                        <div className="column_container handPicked_cars_details">
                            <h1>Delivery Day – a day to remember</h1>
                            <h4 className="handPicked_cars_description">
                                Your gleaming, professionally polished Royal Cars Assured® car – serviced, dry-cleaned and waxed is home-delivered in an eye-catching ceremony.
                            </h4>
                        </div>
                        <div className="column_container">
                            <img
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                        </div>
                    </div>

                    <div className="press_section">
                        <div className="press_content_wrapper">
                            {/* <div className = "press_carousel">
                            <div className = "carousel_left"></div>
                            <div className="carousel_right"></div>
                        </div> */}
                            <div className="column_container FAQ_container">
                                <h2 className="FAQ">Frequently Asked Questions</h2>
                                <Accordion classes={{
                                    root: classes.root
                                }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Q. When & where can I take the test drive?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can schedule a home test drive for this Royal Cars assured car at any date and time you find convenient using our test drive booking form.Your assigned Royal Cars Relationship Manager will then reach out to you and make sure all the details of your preferred car are made available to you before arriving at your home on the selected date & time for the test drive. Know more about home test drives.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion classes={{
                                    root: classes.root
                                }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Q. How do I make a booking for my chosen car?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can book a car of your liking for up to 5 days by putting a refundable deposit of Rs. 10,000/- on it. If you complete the purchase of the vehicle within the holding period, the deposit will be applied towards the purchase otherwise the booking amount will be refunded back to you and the booking cancelled.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion classes={{
                                    root: classes.root
                                }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Q. Will Royal Cars help me in arranging for finance?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Absolutely, buyers can choose to avail financing through Royal Cars wherein we would get the loan processed through our finance partners. Our established partnerships help us process loans faster and get our customers better interest rates. Depending on your credit worthiness, you can avail used car loans through Royal Cars at interest rates as low as 12.5% compared to the market rates of 14-16%.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion classes={{
                                    root: classes.root
                                }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Q. How can I avail the money back guarantee?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            At Royal Cars we are only happy when you’re happy. So if you don't absolutely love your new Royal Cars Assured car, you can return it back within 5 days or 300 Kms of running (from the date of delivery) and your complete purchase amount will be refunded back to you within 3 working days, no-questions-asked.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(CarBuyingworking);