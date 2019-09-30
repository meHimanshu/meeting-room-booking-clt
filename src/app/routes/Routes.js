import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../scenes/login";
import { Dashboard } from "../scenes/Dashboard";
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component = {() => <Dashboard /> } />
        <PrivateRoute exact path="/dashboard/rooms" component={()=>'Room'} />
        <PrivateRoute exact path="/dashboard/my-booking" component={()=>'My Booking'} />
      </Switch>
  );
}

export default Routes;
