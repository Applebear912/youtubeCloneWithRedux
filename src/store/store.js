import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// Could create initial state here instead of in reducers
var store = createStore(rootReducer,
  { currentVideo: exampleVideoData[0], videoList: exampleVideoData },
  applyMiddleware(thunk));

export default store;