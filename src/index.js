import React from 'react';
import ReactDOM from 'react-dom/client';
import './general.css';
import App from './App';
import Footer from './Footer/Footer.js'
import reportWebVitals from './reportWebVitals';

//https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
