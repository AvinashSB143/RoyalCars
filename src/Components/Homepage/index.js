import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navigation";
import RecommendedCars from "../Recommendation";
import AssuredBenifits from "../AssuredBenefits";
import Working from "../Working";
import LifeStyle from "../LifeStyle";
import BodyTypeCars from "../bodyType";
import PopularBrands from "../PopularBrands";
import FeaturedCars from "../Featured";
import { useState } from "react";
import LifeStyleFeature from "../LifeStyleFeature";
// import SliderTest from "../Login"


const HomePage = (props) => {
  const { validateUser } = props;
  return (
    <div >
        {/* <NavBar /> */}
        <RecommendedCars />
        <AssuredBenifits />
        <Working />
        <LifeStyle />
        <BodyTypeCars />
        <PopularBrands />
        <FeaturedCars />
        {/* <SliderTest /> */}
    </div>
  );
};

export default HomePage;
