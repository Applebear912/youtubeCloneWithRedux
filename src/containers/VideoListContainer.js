import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/currentVideo.js';


// var VideoListContainer = () => {};

// //TODO: define a VideoListContainer component which will hook up your action
// // dispatchers with your VideoList component props.


const mapStateToProps = ({videoList}) => {
  return {
    videos: videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   handleVideoListEntryTitleClick: function(video) {
  //     dispatch(changeVideo(video));
  //   }
  // };
};

const VideoListContainer = connect(mapStateToProps)(VideoList);


export default VideoListContainer;