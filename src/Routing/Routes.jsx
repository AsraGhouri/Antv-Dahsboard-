import React, { Component } from 'react';
import SiderDemo from 'Components/Common/Header';
import { BrowserRouter as Router } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Router>
        <SiderDemo />
      </Router>
    );
  }
}

export default Routes;
