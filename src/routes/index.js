import React from 'react';
import { Route, Switch } from 'react-router';
import AppLayout from '../containers/AppLayout'
import About from "../containers/About";
import Home from "../containers/Home";
import Service from "../containers/Service";

export default (store) => {

  return (
      <Switch>
        <Route path="/about">
          <AppLayout>
            <About />
          </AppLayout>
        </Route>
        <Route path="/services">
          <AppLayout>
            <Service />
          </AppLayout>
        </Route>
        <Route path="/">
          <AppLayout>
            <Home />
          </AppLayout>
        </Route>
      </Switch>
  );
};
