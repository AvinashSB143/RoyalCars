// import { useState } from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import Login from "../LoginPage"
  
  
  function Routing() {
    const [validUser, setValidUser] = useState(false);
  
    const validateUser = ()=> {}
    return (
      <Switch>
      <div>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login validateUser={validateUser}/>
        </Route>
      </div>
      </Switch>
    );
  }
  
  export default Routing;
  