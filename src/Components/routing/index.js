import { useState } from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import HomePage from "../Homepage";
  // import history  from '../history';
// import LifeStyle from '../LifeStyle';
import LifeStyleFeature from "../LifeStyleFeature";
import Header from "../Header";
import Footer from "../Footer";
import AccountFilters from "../AccountFilters";
import MenuBar from '../Header/MenuBar';
import Sell from "../Sell";
import BuyCarDetails from '../LifeStyleFeature/buyCarDetails';
import CarSalesWorking from "../WorkingFeature/Selling";
import CarBuyingworking from '../WorkingFeature/Buying';
  
  function Routing() {
    const [validUser, setValidUser] = useState(false);
  
    const validateUser = ()=> {}
    return (
      <div>
      <Header />
        <Route exact path="/"  >
          <Redirect to="/homePage" />
        </Route>
        <Route exact path="/homePage" 
        // history={history}
        >
          <HomePage validateUser={validateUser}/>
        </Route>
        <Route path="/lifeStyle">
          <LifeStyleFeature />
        </Route>
        <Route path="/account/:filter">
          <AccountFilters />
        </Route>
        <Route path ="/more/AboutUs">
          <MenuBar />
        </Route>
        <Route path ="/how-it-works/buying/">
          <CarBuyingworking />
        </Route>
        <Route path ="/how-it-works/selling/">
          <CarSalesWorking />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route path = "/buyCar/cars">
          <BuyCarDetails />
          </Route>
        <Footer />
        {/* <Route path="/sell">
          <Sell />
        </Route>
        <Footer /> */}
      </div>
    );
  }
  
  export default Routing;
  