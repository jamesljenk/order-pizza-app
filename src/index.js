import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToppingsFormSection from './components/toppingsFormSection'
import CrustFormSection from './components/crustFormSection'
import CheeseFormSection from './components/cheeseSelectionFormSection'
import SauceAmountFormSection from './components/sauceAmountFormSection'
import PizzaSizeFormSection from './components/pizzaSizeFormSection'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>

    <div className="mainForm">
      <h1 className="m-3">Pipper's Pippin Hot Pizza Parlor</h1>
      <form className="badge badge-light">
        <h2>Order Form</h2>
        <PizzaSizeFormSection />
        <CheeseFormSection />
        <CrustFormSection />
        <SauceAmountFormSection />
        <ToppingsFormSection />
      </form>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
