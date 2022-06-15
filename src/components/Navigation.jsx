import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Param from "../components/Param";
import Pokemon from "../pages/Pokemon";
import NotFound from "../pages/NotFound";

function Navigation() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/param/:id">
          <Param />
        </Route>

        <Route path="/pokemon">
          <Pokemon />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Navigation;
