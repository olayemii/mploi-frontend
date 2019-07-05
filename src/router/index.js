import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Applicant from "../views/register/applicant/Applicant";
import Employer from "../views/register/employer/Employer";
import Profile from "../views/profile/Profile";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/register/applicant" component={Applicant} />
      <Route exact path="/register/employer" component={Employer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
