import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';
import reducers from './reducers';

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(
    thunk,
  ),
);

if (process.env.NODE_ENV === 'development') {
  global.store = store;
}

export default store;
