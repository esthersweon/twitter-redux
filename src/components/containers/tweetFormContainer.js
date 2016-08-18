import { connect } from 'react-redux';
import { addTweet } from '../../actions/tweetActions';
import TweetForm from '../presentation/tweetForm';
// import { TweetForm } from '../presentation';

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