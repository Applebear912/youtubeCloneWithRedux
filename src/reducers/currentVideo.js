import Redux from 'redux';
import initialState from '../store/store.js';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default:
    return state;
  }
};

export default currentVideoReducer;


// // Initializing, with default values
// var initialState = [
//   { name: "react", count: 0 },
//   { name: "angular", count: 0 },
//   { name: "vue", count: 0 },
// ];
// ​