import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Report vitals of the app
reportWebVitals(console.log);
