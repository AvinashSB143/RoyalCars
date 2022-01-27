import React from 'react';
import "./faq.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({ 
    root: {
      margin: "10px auto"
    }
  });

const FAQContainer = props => {
    const {classes} = props;
    return (
        <div className='faq_section'>
            <div className="column_container FAQ_main_container">
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
                        </div>

        </div>
    )

}

export default withStyles(styles)(FAQContainer);
