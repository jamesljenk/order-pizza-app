import React, { Component } from 'react';
import PizzaForm from './pizzaForm'
import CartItem from './cartItem'
import AddToCartButton from './addToCart'

class PizzaApp extends Component {
    state = { 

        cartItems:[],
        totalUniqueItems:0,
        cartCopy:[]
     }
    render() { 
        return ( 
    <div className="mainForm">
        <h1 className="m-3">Pipper's Pippin Hot Pizza Parlor</h1>
        <PizzaForm />
        <AddToCartButton onAdd={this.handleAddPizzaToCart} />
        <hr className="rounded"></hr>
        <h2>Shopping Cart</h2>
        {this.state.cartItems.map(ci => {
           return <CartItem key={ci.cartId} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} pizzaInfo={ci} />
        })}
        <hr className="rounded"></hr>
        <h2>Order Review</h2>
        <input id="email" type="text" placeholder="Enter Email Address"/>
        <br></br>
        <button className="btn badge badge-primary m-2" onClick={this.generateReview}>Show Order Summary</button>
        <br></br>
        <p className="orderReview" id="orderReview"></p>
    </div>
        );
    }

    generateReview = () => {
        let orderReview = ""
        let cartItems = this.state.cartItems
        console.log(cartItems)
        for (let i=0; i<cartItems.length; i++)
        {
            orderReview += cartItems[i].pizzaName + " x " + cartItems[i].count + ":  " + cartItems[i].pizzaSummary+"\n\r"
        }
        orderReview += "Contact Info: " + document.querySelector('#email').value;
        document.querySelector('#orderReview').innerText = orderReview;
    }

    handleAddPizzaToCart = () => {
        let pizzaForm = document.forms[0];
        let pizzaName = ""
        let pizzaSummary = ""
        for (let i=0; i < pizzaForm.length; i++){
            if (pizzaForm[i].checked==true){
                pizzaSummary += pizzaForm[i].attributes.formname.value+','
                if (pizzaName==""){
                    pizzaName=pizzaForm[i].attributes.formname.value
                }
            }
        }
        const cartId = this.state.totalUniqueItems+1
        const pizzaCartItem={
            pizzaName: pizzaName,
            pizzaSummary: pizzaSummary,
            count:1,
            cartId: cartId
        }
        let cartItems = this.state.cartItems
        cartItems.push(pizzaCartItem)
        const stateObject = {
            cartItems:cartItems,
            totalUniqueItems:cartId,
            cartCopy: cartItems
        }


        for (let i=0; i < pizzaForm.length; i++){
            if (pizzaForm[i].checked==true){
                pizzaForm[i].checked=false
            }
        }

        this.setState(stateObject)


    }

    handleIncrement = (cartItem) =>{
        const cartItems = [...this.state.cartItems]
        const index = cartItems.indexOf(cartItem)
        cartItems[index] = {...cartItem }
        cartItems[index].count++
        this.setState({cartItems});
    }

    handleDecrement = (cartItem) =>{
        const cartItems = [...this.state.cartItems]
        const index = cartItems.indexOf(cartItem)
        cartItems[index] = {...cartItem }
        cartItems[index].count--
        this.setState({cartItems});
    }

    handleDelete = (id) => {
        console.log(id)
        const cartItems = this.state.cartItems.filter(c => c.cartId !== id)
        console.log(cartItems)
        this.setState({cartItems})
    }
}
 
export default PizzaApp;