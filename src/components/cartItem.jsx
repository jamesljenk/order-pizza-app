import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Counter from './coutner'

class CartItem extends Component {
    state = {  }
    render() { 
        return (
            <div className="badge-warning btn cartItem Collapsible m-2" > 
                <Collapsible trigger={this.props.pizzaInfo.pizzaName + " - Click to see details"}>
                    <p>
                        {this.props.pizzaInfo.pizzaSummary}
                    </p>
                </Collapsible>
                <Counter cartItem={this.props.pizzaInfo} cartId={this.props.pizzaInfo.cartId} counter={this.props.pizzaInfo.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete} />
            </div>
         );
    }



}
 
export default CartItem;