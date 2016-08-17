import { connect } from 'react-redux';
import TweetList from './tweetList';

const mapStateToProps = (state) => {
	return {
		data: state.tweets
	}
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

const VisibleTweetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default VisibleTweetList;