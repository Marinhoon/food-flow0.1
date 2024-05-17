// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CreditProvider } from './CreditContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreditProvider>
      <App />
    </CreditProvider>
  </React.StrictMode>
);


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './LancheControl.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
