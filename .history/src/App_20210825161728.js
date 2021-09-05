import React from "react";
import "./App.css";
import Gestion from "./components/Gestion";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/gestion" component={Gestion} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
