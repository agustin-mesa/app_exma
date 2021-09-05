import React from "react";
import styled from "styled-components";
import "./App.css";
import Gestion from "./components/Gestion";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/gestion" component={Gestion} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
