import React, { Component } from 'react';
import Topping from './topping.jsx'

class ToppingsFormSection extends Component {
    state = { 
        
     }

    toppings = ['Pepperoni','Sausage','Ham','Bacon','Ground Beef','Chicken','Green Peppers','Olives','Onions','Red Peppers','Mushrooms', 'Anchovies', 'Pineapple', 'Jalapeño', 'Spinach', 'Meatballs']

    render() { 
        return (  
            <div className="toppingsForm ">
                <h3 className="formHeader">Select Toppings</h3>
                 {this.toppings.map(t=>this.getToppingsComponent(t))}
            </div>
           
        );
    }

    getToppingsComponent(topping){
        return (
            <Topping toppingName={topping} key={topping} />
        );
    }
}
 
export default ToppingsFormSection;