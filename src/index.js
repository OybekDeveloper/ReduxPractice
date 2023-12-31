import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from "./App";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";
import {createStore} from "redux";

// noinspection JSCheckFunctionSignatures
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

