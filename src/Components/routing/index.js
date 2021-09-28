import { useState } from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import HomePage from "../Homepage"
  
  
  function Routing() {
    const [validUser, setValidUser] = useState(false);
  
    const validateUser = ()=> {}
    return (
      <Switch>
      <div>
        <Route path="/">
          <Redirect to="/homePage" />
        </Route>
        <Route path="/homePage">
          <HomePage validateUser={validateUser}/>
        </Route>
      </div>
      </Switch>
    );
  }
  
  export default Routing;
  