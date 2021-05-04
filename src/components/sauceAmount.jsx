import React, { Component } from 'react';

class SauceAmount extends Component {
    state = {  }
    render() { 
        return (  

            <div>
                <label className="m-1">{this.props.sauceAmount}</label>
                <input formname={this.props.sauceAmount+" Sauce"} id={this.props.id+"-Sauce-Amount"} type="radio" name="size" ></input>
            </div>

        );
    }
}
 
export default SauceAmount;