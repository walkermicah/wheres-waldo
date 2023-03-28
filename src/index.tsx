import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { TimerContextProvider } from './context/TimerContext';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
    </TimerContextProvider>
  </React.StrictMode>
);
