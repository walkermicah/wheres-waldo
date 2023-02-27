import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/global-styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
