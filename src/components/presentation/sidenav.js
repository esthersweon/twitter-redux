import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Sidenav = React.createClass({
  render: function () {
    return <div id="sidenav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
    </div>;
  }
});

export default Sidenav;