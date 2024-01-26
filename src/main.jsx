import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Redux-Toolkit/Store.js';
import { Provider } from 'react-redux';

// subscribe is the listenerchanger and ask to listing the getstate and getstate show the current value of state
Store.subscribe(() => console.log(Store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider Store = {Store}>
      <App />
    </Provider>
  </React.StrictMode>
)
