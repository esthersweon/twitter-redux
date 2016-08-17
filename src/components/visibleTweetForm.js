import { connect } from 'react-redux';
import TweetForm from './tweetForm';

const mapStateToProps = (state) => {
	return {
		data: state.tweets
	}
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

const VisibleTweetForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetForm);

export default VisibleTweetForm;