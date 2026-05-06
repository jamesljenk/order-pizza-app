import React, { Component } from 'react';

class AddToCartButton extends Component {
    state = {  }
    render() {
        return (
            <button onClick={this.props.onAdd} className="btn badge badge-primary addPizzaButton" style={{fontSize: '1.1rem', padding: '12px 30px', display: 'block', margin: '20px auto'}}>🍕 Add Pizza To Cart</button>
         );
    }
}
 
export default AddToCartButton;