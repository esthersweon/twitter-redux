import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Content = React.createClass({
  render: function () {
    return <div id="main-content">
    	CONTENT: 
    	{ this.props.children }
    </div>;
  }
});

export default Content;
