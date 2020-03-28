import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        {this.props.children}
      </div>
    );
  }
}
