import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Footer from "./footer";

export default class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="containers">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
