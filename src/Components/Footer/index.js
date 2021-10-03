import React from "react";
import "./footer.css";
import Logo from "../../images/Logo.png";
import Facebook from "../../images/facebook.png";
function Footer() {
  const locations = [
    " DelhiNCR",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    " Gurgaon",
    "Coimbatore",
    "Indore",
    "Kochi",
  ];

  const links = [
    "RoyalCars",
    "Who we are",
    "Blog",
    "work with us",
    "Contact us",
    "Privacy",
    " FAQ's",
    "Terms & condistions",
    "Customer review",
  ];

  const buttons = ["727-727-7275", "get instant Quotes", "Browse cars"];
  const socialIcons = ["faceebbok", "instagram", "twitter", "linkedIn"];

  return (
    <div className="container">
      <div className="left_container">
        <div className="logo_wrapper">
          <a href="">
            <img src={Logo} className="logo"></img>
          </a>
          <a href="" className="title">
            Royal Cars
          </a>
        </div>
        <p className="description">
          RoyalCars is the most trusted way of buying and selling used cars.
          Choose from over 2000 fully inspected second-hand car models. Select
          online and book a test drive at your home or at a RoyalCars Car Hub
          near you. Get a no-questions-asked 5-day money back guarantee and a
          free one-year comprehensive service warranty with Assured Resale Value
          on every RoyalCars Assured® car.
        </p>
        <div className="social_icon_wrapper">
          {socialIcons.map((socialIcon) => (
            <a href="https://www.facebook.com">
              <img
                src={Facebook}
                alt=""
                className="social_icon"
                alt={socialIcon}
              />
            </a>
          ))}
        </div>
        <p className="copyright">
          Copyright © 2021 Valuedrive Technologies Private Limited.
        </p>
        <p className="copyright">All rights reserved.</p>
      </div>
      <div className="right_container">
        <div className="wrapper">
          <div className="about">
            <h3 className="sub_heading">About us</h3>
            <div className="link_wrapper">
              {links.map((link) => (
                <a href="" className="links">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="Buy">
            <h3>Buy Used cars</h3>
            <div className="location_wrapper">
              {locations.map((location) => (
                <span className="location">{`${location} | `}</span>
              ))}
            </div>
            <a href="" className="sell">
              <p>Sell Used Car at spinny</p>
            </a>
          </div>
        </div>
        <div className="botton-section">
          {buttons.map((button) => (
            <button className="button">{button}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
