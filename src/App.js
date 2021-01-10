import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import ThemeToggler from "./components/ThemeToggler";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Fees from "./pages/Fees";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/apply">
              <Apply />
            </Route>
            <Route path="/feespayment">
              <Fees />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  );
}
