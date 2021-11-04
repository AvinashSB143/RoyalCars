import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import "../../styles/styles.css"
import "./header.css"

const MenuBar = () => {
    const [localState, setLocalState] = useState({})
    return (
        <div>
            <div className="main_container column_container">
                <div className = "more_about_us" style = {{backgroundImage : `url("https://singularityhub.com/wp-content/uploads/2019/02/cockpit-view-self-driving-car-night-automation-shutterstock-685666552-1068x601.jpg")`}}>
                    <div>
                    <h1>In it to drive it</h1>
                    <h2>
                        <span>Four wheels fuel a billion dreams and</span>
                        <br />
                        <span>for every dream there is a Spinny
                        <sup>®</sup>
                        </span>
                    </h2>
                    <div className="about_us_button_container">
                        <button className = "about_us_button">Watch the film</button>
                    </div>
                    </div>
                </div>
                <div className="about_us_card_container">
                    <div className="about_us_card">
                        <img className="about_us_card_img"
                        src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_25/1347178/family-road-trip-stock-today-180619-tease-02.jpg"></img>
                    <h3>We are about making car ownership accessible, simple and delightful</h3>
                    <p>In a country where four wheels fuel dreams, less than two per cent of young Indians are satisfied with the used car experience. Our goal is for the country to trust our method, believe in and enjoy our cars. In this way we aim to propel a billion dreams.</p>
                    </div>
                    <div className="about_us_card">
                        <img className="about_us_card_img"
                        src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/happy%20young%20customer.jpg?itok=_7ONcJ9u"></img>
                    <h3>20,000 + happy customers, here’s what one has to say</h3>
                    <p>Weekends are for getting out there and letting off steam. Thanks to Spinny, our Jeep Compass has brought us closer as a family, enriched our memories and photo feeds. And Monday doesn't seem so daunting anymore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;