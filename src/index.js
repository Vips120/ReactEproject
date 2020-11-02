import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/store/index";
import { persistConfig} from "./redux/store/index";
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore,persistReducer} from "redux-persist";

const persistReducers = persistReducer( persistConfig, reducers);

const store = createStore(persistReducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate loading={<h1>LOADING....</h1>}
          persistor={persistStore(store)}
      >
      <App />
      </PersistGate>
     
      </BrowserRouter>
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

