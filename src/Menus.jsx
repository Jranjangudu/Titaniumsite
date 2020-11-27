import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Contacts from "./Contacts";
import TopBottom from "./TopBottom";
import Mainhomes from "./Mainhomes";
import Navbars from "./Navbars";
import Products from "./Products";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";

function Menus() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbars />

        <Switch>
          <Route exact path="/" component={Mainhomes}></Route>
          <Route exact path="/product" component={Products}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contact" component={Contacts}></Route>
          <Redirect to="/" />
        </Switch>
        <TopBottom />
      </BrowserRouter>
    </div>
  );
}
export default Menus;
