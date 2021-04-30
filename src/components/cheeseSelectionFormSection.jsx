import React, { Component } from 'react';
import CheeseSelection from './cheeseSelection'

class CrustFormSection extends Component {
    state = {  
        cheeseAmounts: [
            "Extra",
            "Regular",
            "Light",
            "None",
    
        ]
    }
    render() { 
        return ( 
            <div className="cheeseSection formSection" id="cheeseSection">
                <h3 className="formHeader">Select Cheese</h3>
                {this.state.cheeseAmounts.map((c) => <CheeseSelection key={c} id={c} cheeseAmount={c}/>)}
            </div>
         );
    }
}
 
export default CrustFormSection;