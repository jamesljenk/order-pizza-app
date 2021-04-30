import React, { Component } from 'react';
import PizzaSize from './pizzaSize'

class PizzaSizeFormSection extends Component {
    state = {  
        pizzaSizes: [
            "Small",
            "Medium",
            "Large",
            "Xtra-Large"
        ]
    }
    render() { 
        return ( 
            <div className="formSection" id="pizzaSizeSection">
                <h3 className="formHeader">Select Size</h3>
                {this.state.pizzaSizes.map((c) => <PizzaSize key={c} id={c} size={c}/>)}
            </div>
         );
    }
}
 
export default PizzaSizeFormSection;