import React from 'react';
import { Route, Switch } from 'react-router';
import AppLayout from '../containers/AppLayout'
// import Header from "../containers/AppLayout/header";
import About from "../containers/About";

function IndexPage({ children, params }) {
  return (
    <div className="container">
      <h2>sunwei</h2>
    </div>
  );
}

export default (store) => {

  return (
      <Switch>
        <Route path="/about">
          <AppLayout>
            <About />
          </AppLayout>
        </Route>
        <Route path="/">
          <AppLayout>
            <IndexPage />
          </AppLayout>
        </Route>
      </Switch>
  );
};
