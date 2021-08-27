import React, { Fragment } from "react";
// import {AuthProvider} from "../context/AuthContext"
import {AuthProvider} from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword"
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Fragment>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/task-tracker/" component={Dashboard} />
              <PrivateRoute exact path="/task-tracker/update-profile" component={UpdateProfile} />
              <Route path="/task-tracker/signup" component={Signup} />
              <Route path="/task-tracker/signin" component={Signin} />
              <Route path="/task-tracker/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Fragment>
    </>
  )
}

export default App;
