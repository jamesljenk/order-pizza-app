import React, { Component } from 'react';
import SauceAmount from './sauceAmount'

class SauceAmountFormSection extends Component {
    state = {  
        sauceAmounts: [
            "Extra",
            "Regular",
            "Light",
            "None",
    
        ]
    }
    render() { 
        return ( 
            <div className="sauceSection formSection" id="sauceSection">
                <h3 className="formHeader">Select Sauce</h3>
                {this.state.sauceAmounts.map((c) => <SauceAmount key={c} id={c} sauceAmount={c}/>)}
            </div>
         );
    }
}
 
export default SauceAmountFormSection;