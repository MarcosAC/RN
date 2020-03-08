import {cresteStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducers';
import {createStore} from 'redux';

const reducers = combineReducers({
  user: userReducer,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
