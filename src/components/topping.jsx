import React, { Component } from 'react';

class Topping extends Component {
    state = { 
        toppingName: "", 
        toppingSelected: false
     }
    render() { 
        return ( 
            <div className="toppings m-3">
                <span id={this.props.toppingName+"Topping"} className="m-1" >{this.props.toppingName}</span>
                <input type="checkbox"></input>
            </div>
         );
    }
}
 

export default Topping;