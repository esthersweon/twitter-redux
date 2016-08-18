import { connect } from 'react-redux';
import TweetList from '../tweetList';
import { getTweets } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
	return { data: state.tweets };
};

const mapDispatchToProps = (dispatch) => {
  return {
  	loadTweetsFromServer: dispatch(getTweets())
  };
}

const TweetListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);

export default TweetListContainer;