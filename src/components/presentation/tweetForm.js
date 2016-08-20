import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

const TweetForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var author = this.refs.author.value;
    var text = this.refs.text.value;

    if (!text || !author) {
      return;
    }

    this.props.onTweetSubmit(author, text);

    this.refs.author.value = '';
    this.refs.text.value = '';
  },
  render: function () {
    return (
      <form className="tweetForm" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Author Name" ref="author" />
        <input type="text" placeholder="Tweet" ref="text" />
        <Button bsType="submit" bsStyle="info">Tweet</Button>
      </form>
    );
  }
});

TweetForm.defaultProps = {
  onTweetSubmit: PropTypes.func.isRequired
};

export default TweetForm;