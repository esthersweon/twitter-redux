import { connect } from 'react-redux';
import TweetList from '../presentation/tweetList';
import getTweets from '../../actions/tweets/getTweets';

const mapStateToProps = (state) => {
	return { data: state.tweets };
};

const mapDispatchToProps = (dispatch) => {
  return {
  	loadTweets: () => {
  		dispatch(getTweets());
  	}
  };
};

const TweetListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default TweetListContainer;