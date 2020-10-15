import React from 'react'
import util from "../util";

const Basket = ({handleRemoveFromCart, cartItems}) => {

          return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is empty" : 
                <div> 
                 You have {cartItems.length} products in the basket 
                </div>}
                {cartItems.length > 0 && 
                    <div>
                        <ul>
                            {cartItems.map((item) =>
                                <li key={item + 1}>
                                    <b>{item.title}</b>
                                    X {item.count} = {item.price * item.count}
                                    <button className="btn btn-danger" 
                                    onClick={ (e) => handleRemoveFromCart(e, item)}> X
                                    </button>
                                </li>
                            )}
                        </ul>
                        Total: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count ))}
                        <button className="btn btn-primary"
                        onClick={() => alert("Checkout needs to implement...")}>
                        Checkout 
                        </button>  
                    </div>
                }
                
            </div>
        )
    }



export default Basket;