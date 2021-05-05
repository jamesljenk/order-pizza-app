import React, { Component } from 'react';

class PizzaSize extends Component {
    state = {  }
    render() { 
        return (  

            <div> 
                <label className="m-1">{this.props.size}</label>
                <input formname={this.props.size+" Pizza"}id={this.props.id+"-Size"} type="radio" name="size" ></input>
            </div>

        );
    }
}
 
export default PizzaSize;