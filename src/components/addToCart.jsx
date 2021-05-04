import React, { Component } from 'react';

class AddToCartButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button onClick={this.props.onAdd}className="btn-sm m-2 badge-primary">Add Pizza To Cart</button>
         );
    }
}
 
export default AddToCartButton;