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
        <div className="floatingIcons">
            <span className="floatingIcon" style={{top: '10%', left: '8%'}}>🧀</span>
            <span className="floatingIcon" style={{top: '20%', right: '10%'}}>🍅</span>
            <span className="floatingIcon" style={{top: '35%', left: '5%'}}>🫑</span>
            <span className="floatingIcon" style={{top: '50%', right: '7%'}}>🍄</span>
            <span className="floatingIcon" style={{top: '65%', left: '12%'}}>🧅</span>
            <span className="floatingIcon" style={{top: '75%', right: '15%'}}>🌶️</span>
            <span className="floatingIcon" style={{top: '40%', left: '25%'}}>🥓</span>
            <span className="floatingIcon" style={{top: '55%', right: '25%'}}>🍖</span>
            <span className="floatingIcon" style={{top: '25%', left: '50%'}}>🫒</span>
            <span className="floatingIcon" style={{top: '70%', right: '40%'}}>🍍</span>
        </div>
        <h1>🍕 Piper's Piping Hot Pizza Parlor 🍕</h1>

        <div className="threeColumnLayout">
            {/* Left Column - Pizza Builder */}
            <div className="leftColumn">
                <PizzaForm />
                <AddToCartButton onAdd={this.handleAddPizzaToCart} />
            </div>

            {/* Middle Column - Shopping Cart */}
            <div className="middleColumn">
                <div className="stickyContent">
                    <h2>🛒 Shopping Cart</h2>
                    {this.state.cartItems.length === 0 && (
                        <div className="emptyCart">Your cart is empty. Add some delicious pizzas!</div>
                    )}
                    {this.state.cartItems.map(ci => {
                       return <CartItem key={ci.cartId} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} pizzaInfo={ci} />
                    })}
                </div>
            </div>

            {/* Right Column - Contact & Order Summary */}
            <div className="rightColumn">
                <h2>📞 Contact Information</h2>
                <div className="contactSection">
                    <div className="formGroup">
                        <label htmlFor="name">Full Name</label>
                        <input id="name" type="text" placeholder="John Doe"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="text" placeholder="john@example.com"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="text" placeholder="(555) 123-4567"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="address">Delivery Address</label>
                        <input id="address" type="text" placeholder="123 Main St"/>
                    </div>
                </div>

                <h2 style={{marginTop: '30px'}}>📋 Order Summary</h2>
                <button className="btn badge badge-primary" onClick={this.generateReview} style={{display: 'block', margin: '20px auto'}}>📄 Generate Order Summary</button>
                <div className="orderReview" id="orderReview"></div>
            </div>
        </div>
    </div>
        );
    }

    generateReview = () => {
        let orderReview = ""
        let cartItems = this.state.cartCopy;
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
            if (pizzaForm[i].checked==true && pizzaForm[i].attributes.formname.value !="Anchovies"){
                pizzaSummary += pizzaForm[i].attributes.formname.value+','
                if (pizzaName=="" && window.navigator.userAgent.indexOf("Edg") == -1){
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
        let cartCopy = this.state.cartCopy
        cartCopy.push(pizzaCartItem)
        cartItems.push(pizzaCartItem)
        const stateObject = {
            cartItems:cartItems,
            totalUniqueItems:cartId,
            cartCopy: cartCopy
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