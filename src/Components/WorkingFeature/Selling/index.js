import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from "@material-ui/core/styles/withStyles";
import "../../../styles/styles.css"
import "./carSaleWorking.css"


const styles = theme => ({ 
    root: {
      margin: "10px auto"
    }
  });


const CarSalesWorking = (props) => {

const [index, setIndex] = useState(0);


const Culture = ["https://thumbs.dreamstime.com/z/business-meeting-word-culture-table-top-view-people-people-having-discussing-over-work-office-91587859.jpg",
,"https://assets.ltkcontent.com/images/7206/examples-of-culture_0066f46bde.jpg",
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
const {classes} = props;
return (
        <div>
            <div className="main_container column_container">
                <div className = "more_about_us" style = {{backgroundImage : `url("https://singularityhub.com/wp-content/uploads/2019/02/cockpit-view-self-driving-car-night-automation-shutterstock-685666552-1068x601.jpg")`}}>
                    <div>
                    <h1>In it to drive it</h1>
                    <h2>
                        <span>Four wheels fuel a billion dreams and</span>
                        <br />
                        <span>for every dream there is a Royal Cars
                        <sup>®</sup>
                        </span>
                    </h2>
                    <div className="about_us_button_container">
                        <button className = "about_us_button">Watch the film</button>
                    </div>
                    </div>
                </div>
                <div className="about_us_card_container about_us_main">
                    <span>
                    <h1> Selling your car made simple. </h1>
                    <p className="working_buy_description">We at Royal Cars make the process of selling your car very simple by giving the best quote with free evaluation and providing same day online payment thus avoiding complex paper work.</p>
                    <Link to="/sell" className="assured_cars">Sell Your Car</Link>
                    </span>
                </div>
            <div className="carBuyingworkingCars">

                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container">
                        <h1>Sell your car in simple steps.</h1>
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                    <div className="column_container handPicked_cars_details">
                        <h1> Tell us a bit about your car</h1>
                        <h4 className="handPicked_cars_description">
                        Fill in a few details about your car online. Get an instant quote.
                        </h4>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container handPicked_cars_details">
                        <h1>Get an accurate quote</h1>
                        <h4 className="handPicked_cars_description">
                        Our online quote will be prompt. And you will find that our final offer does not go above or below 5 percent of this original quote.
                        </h4>
                    </div>
                    <div className="column_container">
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container">
                        
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                    <div className="column_container handPicked_cars_details">
                    <h1>Free Doorstep Evaluation</h1>
                    <h4 className="handPicked_cars_description">
                    Choose a time of day and date you find convenient. Our experts will visit your home or your workplace to evaluate your car, validate its worth and make you a final offer - valid for 3 days.
                        </h4>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container handPicked_cars_details">
                        <h1>Same day payment</h1>
                        <h4 className="handPicked_cars_description">
                        Accept the final offer, you will be paid for your car on the same day. We’ll also get working on the car’s paperwork – our responsibility – right away.
                        </h4>
                    </div>
                    <div className="column_container">
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container">
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                    <div className="column_container handPicked_cars_details">
                    <h1>Peace of mind in ownership transfer</h1>
                    <h4 className="handPicked_cars_description">
                    Your car remains in our safe custody. You’ll be updated immediately when the ownership papers get transferred to a new owner.
                        </h4>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main main_container handPicked_car_container">
                    <div className="column_container handPicked_cars_details">
                        <h1>Delivery Day – a day to remember</h1>
                        <h4 className="handPicked_cars_description">
                        Your gleaming, professionally polished Royal Cars Assured® car – serviced, dry-cleaned and waxed is home-delivered in an eye-catching ceremony.
                        </h4>
                    </div>
                    <div className="column_container">
                        <img 
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    </div>
                </div>

                <div className = "press_section">
                    <h3>Press</h3>
                    <div className="press_content_wrapper">
                        <div className="press_content">
                            <div className ="press_content_list">
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://images.squarespace-cdn.com/content/v1/564b6866e4b0c5929314d76f/1542059458363-DMWZVMBQVTIOM44WE6I1/What_is_your_story.jpg?format=1000w">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>How Royal Cars is re-defining the pre-owned car market through its platform</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://www.egis-india.com/sites/egis-india.com/files/styles/largeur_page/public/fe.png?itok=iyIILABn">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Full-stack concept explained with benefits</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://img.etimg.com/thumb/msid-69088793,width-1200,height-900/industry/media/entertainment/media/the-economic-times-trumps-all-business-dailies-combined.jpg">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Royal Cars brings in 360-degree interactive view of used cars</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://entrackr.com/wp-content/uploads/2019/03/funding-.jpg">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Accel-backed Royal Cars acquaries used cars marketplace Truebil</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://images.squarespace-cdn.com/content/v1/564b6866e4b0c5929314d76f/1542059458363-DMWZVMBQVTIOM44WE6I1/What_is_your_story.jpg?format=1000w">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>How Royal Cars is re-defining the pre-owned car market through its platform</p>
                                </div>
                                </a>
                            </div>
                        </div>
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
                                <Typography>What is Royal Cars SellRight?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                SellRight by Royal Cars is the most simple way of selling your car with the assurance of getting the best price in the market. With SellRight, you can say goodbye to weeks of uncertainties around your car's sale and get paid in just 1 day. By eliminating all middlemen from the selling process, we will buy your car directly from you and offer you an unmatched price, that truly values your car & comes with the goodness of a simple & convenient selling experience.
                                Sell your car the right way with SellRight - the best price for your car, simple selling experience.
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
                                <Typography>How does Royal Cars guarantee the best price for my car?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                At Royal Cars, we believe you deserve a price that truly values your car. That is why, our Doorstep Evaluation makes it easy for you to get a great price and sell your car directly from the comfort of your home. By factoring in your car's condition and similar nearby market transactions, the offer you receive with us is guaranteed 10-15% higher than the market. This is made possible by cutting all middlemen from the selling process and passing on the savings directly to you, so you can sell your car with the assurance of a great price and the goodness of a simple selling experience. Get an instant valuation in less than 10 seconds
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
                                <Typography>My car is not listed in your form. What should I do?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                If your car is not listed in our instant evaluation form, it means that your car falls outside the SellRight buying criteria. The cars we buy from you are further made available on our website for potential buyers to purchase. In order to ensure the highest quality standards, we do not buy cars that fall outside our buying criteria. For any further assistance, free to contact us at ____ and we'll help you get started
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
                                <Typography>Why is my car not eligible under the Royal Cars selection criteria?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                At Royal Cars, the cars we buy from you are further made available on our website for potential buyers to purchase. In order to ensure the highest quality standards, we do not buy cars that fall outside our selection criteria. However, you can still sell your car to our partner website truebil.com. Just like us, Truebil also offers free doorstep evaluation, same day payments for your car and a great selling experience.
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
                                <Typography>How long will it take for the payment to get transferred into my account?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                Depending on your preferred mode of payment, the amount can get transferred in your account in as early as a few hours. You can choose to get paid via a Bank Transfer (IMPS, RTGS, NEFT), Demand Draft or even a current dated bank cheque. Royal Cars does not facilitate any cash payments to car sellers.
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
                                <Typography>How long will it take for the RC to be transferred from my name?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                Your free RC transfer should take no longer than 90-120 days depending on your car's further sale to an end buyer. Throughout the transfer process, we'll keep you updated on your registered contact number so you can rest easy.
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
                                <Typography>How long will it take for the payment to get transferred into my account?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                Depending on your preferred mode of payment, the amount can get transferred in your account in as early as a few hours. You can choose to get paid via a Bank Transfer (IMPS, RTGS, NEFT), Demand Draft or even a current dated bank cheque. Royal Cars does not facilitate any cash payments to car sellers.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* <Accordion classes={{
                                    root: classes.root
                                }}>
                                <AccordionSummary
                                
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography>Can I sell my commercial car to Royal Cars?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                Unfortunately, as of now, we do not buy commercial cars.
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
                                <Typography>My query is not listed. Help!</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                If your query is not listed here, you can reach out to us on our customer support number 727-727-7275.
                                </Typography>
                                </AccordionDetails>
                            </Accordion> */}
{/*                             
                           
                            <Accordion classes={{
                                    root: classes.root
                                }}>
                                <AccordionSummary
                                
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography>My query is not listed. Help!</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                If your query is not listed here, you can reach out to us on our customer support number 727-727-7275.
                                </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(CarSalesWorking);