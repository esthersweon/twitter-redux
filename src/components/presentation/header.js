import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
  render: function () {
    return <header>
	    <h1>See what's happening right now.</h1>
	    <h3>Find community, conversation, and inspiration about the things you love.</h3>
    </header>;
  }
});

export default Header;