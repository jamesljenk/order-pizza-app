import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Counter from './coutner'

class CartItem extends Component {
    state = {  }
    render() {
        return (
            <div className="cartItem" style={{border: '2px solid #dc3545', cursor: 'pointer'}}>
                <Collapsible
                    trigger={
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', padding: '10px'}}>
                            🍕 {this.props.pizzaInfo.pizzaName} - Click to see details ▼
                        </div>
                    }
                    triggerWhenOpen={
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#dc3545', padding: '10px'}}>
                            🍕 {this.props.pizzaInfo.pizzaName} - Click to hide details ▲
                        </div>
                    }
                >
                    <div style={{padding: '15px', background: '#fff5f5', borderRadius: '8px', margin: '10px'}}>
                        <p style={{color: '#666', lineHeight: '1.6', marginBottom: '10px'}}>
                            <strong>Ingredients:</strong> {this.props.pizzaInfo.pizzaSummary}
                        </p>
                    </div>
                </Collapsible>
                <Counter cartItem={this.props.pizzaInfo} cartId={this.props.pizzaInfo.cartId} counter={this.props.pizzaInfo.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete} />
            </div>
         );
    }



}
 
export default CartItem;