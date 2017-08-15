// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import bitcoins from './bitcoins';

const rootReducer = combineReducers({
  counter,
  bitcoins,
  router,
});

export default rootReducer;
