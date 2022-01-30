import React from "react";
import "./carousel.css";
import "../../styles/styles.css";

import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
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

const CarouselComponent = (props) => {
    return (
        <Carousel showArrows={true}>
            {/* <Carousel showArrows={true} onChange={ } onClickItem={ } onClickThumb={ }> */}
            {
                props.cars.map((imagePath) => {
                    return (
                        <div>
                            {/* <img src={car} /> */}
                            <img src={`https://royalcarsmangalore.in:5000/${imagePath}`} />
                        </div>
                    )
                })
            }


        </Carousel>
    );
}
export default CarouselComponent;

{/* <div>
                <img src={CarBuy} />
            </div>
            <div>
                <img src={BuyFromHome} />
            </div>
            <div>
                <img src={SellCar} />
            </div>
            <div>
                <img src={TestDrive} />
            </div> */}