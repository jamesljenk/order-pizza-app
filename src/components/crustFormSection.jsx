import React, { Component } from 'react';
import CrustChoice from './crustChoice'

class CrustFormSection extends Component {
    state = {  
        crustTypes: [
            "Hand-Tossed",
            "Thin",
            "Pan",
            "Stuffed"
        ]
    }
    render() { 
        return ( 
            <div className="formSection" id="crustSection">
                <h3 className="formHeader">Select Crust</h3>
                {this.state.crustTypes.map((c) => <CrustChoice key={c} id={c} crustType={c}/>)}
            </div>
         );
    }
}
 
export default CrustFormSection;