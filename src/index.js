import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import createStore from './redux/store';
import createRoutes from './routes';
import DevTools from './components/DevTools';
import Header from "./containers/AppLayout/header";
import Footer from "./containers/AppLayout/footer";

import * as serviceWorker from './serviceWorker';

const isDevelopment = (process.env.NODE_ENV === 'development');

const store = createStore();
const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <div id="page-content">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
      {isDevelopment && <DevTools />}
    </div>
    <Footer/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
