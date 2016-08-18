import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Tweet = (props) => {
	return <div className="tweet">
		<h2>{ props.text }</h2>
		<span> - { props.author }</span>
	</div>
};

Tweet.defaultProps = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Tweet;
