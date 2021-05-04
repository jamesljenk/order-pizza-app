import React, { Component } from 'react';
import ToppingsFormSection from './toppingsFormSection'
import CrustFormSection from './crustFormSection'
import CheeseFormSection from './cheeseSelectionFormSection'
import SauceAmountFormSection from './sauceAmountFormSection'
import PizzaSizeFormSection from './pizzaSizeFormSection'

class PizzaForm extends Component {
    state = {  }
    render() { 
        return ( 
        <form className="badge badge-light">
            <h2>Order Form</h2>
            <PizzaSizeFormSection />
            <CheeseFormSection />
            <CrustFormSection />
            <SauceAmountFormSection />
            <ToppingsFormSection />
        </form>
         );
    }
}
 
export default PizzaForm;