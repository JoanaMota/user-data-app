import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

//Routers
// from https://alligator.io/react/react-router/
// and https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
import HomePage from "../components/HomePage/HomePage";
import UserDataPage from "../components/UserDataPage/UserDataPage"


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/userdata" component={UserDataPage} exact />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
