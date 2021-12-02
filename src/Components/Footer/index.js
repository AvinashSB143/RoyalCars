import React from "react";
import "./footer.css";
import Logo from "../../images/Logo.png";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
    <div className="Footer_Container">
      <div className="Footer__Logo">
        <div>
          <img src={Logo} alt="APP_Logo" />
          <button className="Footer__Button">
            <CallIcon />
            {buttons[0]}
          </button>
        </div>
        <p className="APP_Description">
          About Company Description dummy text dummy text dummy text dummy dummy
          text dummy text dummy text dummy text dummy text dummy text dummy text
          dummy text dummy text dummy text dummy text dummy text dummy text
          dummy text dummy text dummy text dummy text dummy text
        </p>
        <div className="Footer__SocialIcons">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
      <div>
        <h3 className="sub_heading">About us</h3>
        <div className="Footer__Links">
          {links.map((link) => (
            <a href="#" className="links">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3>Buy Used cars</h3>
        <div className="Footer__LocationLinks">
          {locations.map((location) => (
            <span className="location">{`${location} | `}</span>
          ))}
          <div>
            <a href="" className="Footer__sell">
              Sell Used Car at spinny
            </a>
            <span className="Footer__sell-span"> {">"}</span>
          </div>
        </div>
      </div>
      <div className="Footer__Copyright">
        Copyright © 2021 Royal cars Pvt Limited. All rights reserved.
      </div>
      <div className="Footer__Buttons">
        {buttons.map((button, idx) => (
          <button className="Footer__Button">
            {idx === 0 && <CallIcon />}
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Footer;
