import { connect } from 'react-redux';
import { addTweet } from '../../actions/actionCreators';
import TweetForm from '../tweetForm';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  	onTweetSubmit: (author, text) => {
  		dispatch(addTweet(author, text));
  	}
  };
};

const TweetFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetForm);

export default TweetFormContainer;