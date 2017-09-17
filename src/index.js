import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from './app/app.saga';
import appReducer from './app/app.reducer';
import { AppComponent } from './app/app.component';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  compose(
    applyMiddleware(
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);
