import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h2>{ this.props.text }</h2>
        <span> - { this.props.author }</span>
      </div>
    );
  }
});

export default Tweet;
