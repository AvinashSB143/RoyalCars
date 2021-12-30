import React from "react";
import "./carousel.css";
import "../../styles/styles.css";


import Slider from "react-slick";

import CarBuy from '../../assests/carBuy.jpg';
import BuyFromHome from '../../assests/homecar.jpg';
import SellCar from '../../assests/sellCar.jpg';
import TestDrive from '../../assests/testdrive.jpg';
const images = [
    CarBuy,
    BuyFromHome,
    SellCar,
    TestDrive
];

const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: "slides",
    };

    return (
        <Slider {...settings}>
            {images.map((image) => {
                return (
                    <div className="wrapper" key="">
                        <img
                            className="sliderImg"
                            src={image}
                            alt=""
                        />
                    </div>
                );
            })}
        </Slider>
    );
}
export default Carousel;