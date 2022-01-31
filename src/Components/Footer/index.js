import React from "react";
import "./footer.css";
import Logo from "../../images/Logo.png";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  const locations = [
    "Mangalore"
  ];

  const links = [
    "RoyalCars",
    // "Who we are",
    // "Blog",
    // "work with us",
    // "Contact us",
    // "Privacy",
    // " FAQ's",
    // "Terms & condistions",
    // "Customer review",
  ]

  const buttons = ["9148941334", "Browse cars"];
  const socialIcons = ["faceebbok", "instagram", "twitter", "linkedIn"];

  return (
    <div className="Footer_Container">
      <div className="Footer__Logo">

        <div>
          <img src={Logo} alt="APP_Logo" />
          <p className="APP_Description">
            Welcome to Royal Cars! Your friendly second hand car dealer in Mangalore.
            We take care of the end-to-end process of Buying and Selling of your car.
            We at Royal Cars have a wide variety of cars suiting your needs right from your first family car to your favourite off-road vehicle.
            Email us at <a href="mailto:support@royalcarsmangalore.in" style={{ color: "white", fontWeight: "bolder" }}>support@royalcarsmangalore.in</a>
          </p>
        </div>


        {/* <div className="Footer__SocialIcons">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div> */}
      </div>
      {/* <div>
        <h3 className="sub_heading">About us</h3>
        <div className="Footer__Links">
          {links.map((link) => (
            <a href="/homePage" className="links">
              {link}
            </a>
          ))}
        </div>
      </div> */}

      <div className="Footer__mb_btn">
        <button className="Footer__Button">
          <CallIcon />
          <span> {buttons[0]} </span>
        </button>
      </div>
      <div className="Footer__Buttons">
        {buttons.map((button, idx) => (
          <Link to={idx === 1 ? "/lifeStyle" : "#"} className="Footer__Button" onClick={() => window.scroll(0, 0)}>
            {idx === 0 && <CallIcon />}
            {button}
          </Link>
        ))}
      </div>
      <div className="Footer__Copyright">
        Copyright © 2021 Royal cars Pvt Limited. All rights reserved.
      </div>
      <div className="scrollToTop" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}><KeyboardArrowUpIcon /></div>
    </div>
  );
}

export default Footer;
