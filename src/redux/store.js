import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default () => {
  let allMiddleware = [];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    allMiddleware.push(logger);
  }

  let middleware = applyMiddleware(...allMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = compose(middleware, require('../components/DevTools').default.instrument());
  }

  const store = middleware(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
