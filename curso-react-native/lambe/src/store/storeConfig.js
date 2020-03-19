import {createStore, combineReducers} from 'redux';
import userReducers from './reducers/userReducers';
import postsReducers from './reducers/postsReducers';

const reducers = combineReducers({
  user: userReducers,
  posts: postsReducers,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
