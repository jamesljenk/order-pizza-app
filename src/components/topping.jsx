import React, { Component } from 'react';

class Topping extends Component {
    state = { 
        toppingName: "", 
        toppingSelected: false
     }
    render() { 
        return ( 
            <div className="toppings m-3">
                <span className="m-1" >{this.props.toppingName}</span>
                <input id={this.props.toppingName+"Topping"} formName={this.props.toppingName} type="checkbox"></input>
            </div>
         );
    }
}
 

export default Topping;