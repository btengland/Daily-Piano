import './reset.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext'
import { PracticeProvider } from './context/PracticeContext'
import { AppointmentProvider } from './context/AppointmentContext'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PracticeProvider>
        <AppointmentProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </AppointmentProvider>
      </PracticeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
