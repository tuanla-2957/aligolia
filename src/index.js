import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
