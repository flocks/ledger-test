// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import bitcoins from './bitcoins';

const rootReducer = combineReducers({
  bitcoins,
  router,
});

export default rootReducer;
