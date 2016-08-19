import { connect } from 'react-redux';
import TweetList from '../presentation/tweetList';
// import { TweetList } from '../presentation';
import { getTweets } from '../../actions/tweetActions';

const mapStateToProps = (state) => {
	return { data: state.tweets };
};

const mapDispatchToProps = (dispatch) => {
  return {
  	loadTweets: () => {
  		dispatch(getTweets());
  	}
  };
}

const TweetListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default TweetListContainer;