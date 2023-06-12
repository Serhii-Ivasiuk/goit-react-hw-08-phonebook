// Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Redux store
import { store } from './redux/store';
// Components
import { App } from 'components/App/App';
// Common styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
