import React from 'react';
import { Route} from "react-router-dom";

function LoggedIn(){
    return (
        <h1>User logged in</h1>
    )
}

function Routes() {
    return (
        <Route exact path = "/login" component = {LoggedIn} />
    )
}

export default Routes;