var React = require('react');
var ReactDOM = require('react-dom');

var TweetForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    // Get new author and text from the input fields
    var author = this.refs.author.value;
    var text = this.refs.text.value;

    // Do nothing if either input field is blank
    if (!text || !author) {
      return;
    }

    // Send new author and text up one level to Twitter component
    // so updated tweets can be passed down again into TweetList component
    this.props.onTweetSubmit(author, text);

    // Set input fields back to empty
    this.refs.author.value = '';
    this.refs.text.value = '';
  },
  render: function () {
    return (
      <form className="tweetForm" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Author Name" ref="author" />
        <input type="text" placeholder="Tweet" ref="text" />
        <button type="submit" className="btn btn-info">Tweet</button>
      </form>
    );
  }
});

module.exports = TweetForm;