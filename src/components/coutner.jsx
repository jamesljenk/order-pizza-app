import React, { Component } from 'react';

class Counter extends Component {


    tags = ['Pepperoni','Sausage','Ham','Green Peppers','Olives']

    styles = {
        fontSize: '18px',
        fontWeight: 'bold'
    }

    render() { 
        return (
            <div className="counterComp">      
                {this.props.children}  
                <button onClick={() => this.props.onDecrement(this.props.cartItem)} className="btn btn-secondary btn-sm">-</button>
                <span style={this.styles} className="badge m-2 badge-primary">{this.props.counter}</span>
                <button onClick={() => this.props.onIncrement(this.props.cartItem)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={() => this.props.onDelete(this.props.cartId)} className="btn btn-danger btn-sm m-2">Delete</button>
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