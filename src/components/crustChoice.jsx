import React, { Component } from 'react';

class CrustChoice extends Component {
    state = {  }
    render() { 
        return (  

            <div> 
                <label className="m-1">{this.props.crustType}</label>
                <input checked formname={this.props.crustType + " Crust"}id={this.props.id+"-Crust"} type="radio" name="crust" ></input>
            </div>

        );
    }
}
 
export default CrustChoice;