import React, { Component } from 'react';

class CheeseSelection extends Component {
    state = {  }
    render() { 
        return (  

            <div>
                <label className="m-1">{this.props.cheeseAmount}</label>
                <input checked formname={this.props.cheeseAmount + " Cheese"} id={this.props.id+"-Cheese"} type="radio" name="Cheese" ></input>
            </div>

        );
    }
}
 
export default CheeseSelection;