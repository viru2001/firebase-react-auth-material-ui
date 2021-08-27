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
              <PrivateRoute exact path="/firebase-react-auth-material-ui/" component={Dashboard} />
              <PrivateRoute exact path="/firebase-react-auth-material-ui/update-profile" component={UpdateProfile} />
              <Route path="/firebase-react-auth-material-ui/signup" component={Signup} />
              <Route path="/firebase-react-auth-material-ui/signin" component={Signin} />
              <Route path="/firebase-react-auth-material-ui/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Fragment>
    </>
  )
}

export default App;
