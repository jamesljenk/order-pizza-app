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
        <form>
            <h2>Build Your Pizza</h2>
            <div className="formSectionsContainer">
                <PizzaSizeFormSection />
                <CheeseFormSection />
            </div>
            <div className="formSectionsContainer">
                <CrustFormSection />
                <SauceAmountFormSection />
            </div>
            <ToppingsFormSection />
        </form>
         );
    }
}
 
export default PizzaForm;