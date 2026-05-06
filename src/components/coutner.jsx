import React, { Component } from 'react';

class Counter extends Component {


    tags = ['Pepperoni','Sausage','Ham','Green Peppers','Olives']

    styles = {
        fontSize: '18px',
        fontWeight: 'bold'
    }

    render() {
        return (
            <div className="counterComp" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                {this.props.children}
                <button onClick={() => this.props.onDecrement(this.props.cartItem)} className="btn btn-secondary btn-sm" style={{width: '35px', height: '35px', borderRadius: '50%'}}>-</button>
                <span style={this.styles} className="badge m-2 badge-primary" style={{fontSize: '1.2rem', padding: '8px 16px', background: '#dc3545', color: 'white', borderRadius: '8px'}}>{this.props.counter}</span>
                <button onClick={() => this.props.onIncrement(this.props.cartItem)} className="btn btn-secondary btn-sm" style={{width: '35px', height: '35px', borderRadius: '50%'}}>+</button>
                <button onClick={() => this.props.onDelete(this.props.cartId)} className="btn btn-danger btn-sm m-2" style={{marginLeft: '15px', padding: '8px 16px', borderRadius: '8px'}}>🗑️ Delete</button>
            </div>
          );
    }


    // {this.tags.map(tag => <div key={tag}>{tag}</div>)}   <-list of items



    formatCount(){
        return this.props.counter.count === 0 ? 'None': this.props.counter.count
    }

    getButtonClasses(){
        let classes = "badge m-2 "
        return classes += (this.props.counter.count === 0 )? "badge-warning" : "badge-primary"
    }
}
 
export default Counter;