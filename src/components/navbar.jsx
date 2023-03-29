import React from 'react'
import { Link } from "react-router-dom";
import {  ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Container } from 'react-bootstrap';



export const Navbar = () => {

  return (
    <Container fluid className="navbar">
      <div className="links container-fluid">
      
  
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {/* {cartItemCount > 0 && <> ({cartItemCount})</>} */}
          {/* {cart.cartItems > 0 &&(
            <IdentificationBadge> {cart.cartItems.length}  </IdentificationBadge>
          )} */}
        </Link>
      </div>
     
      {/* <button onClick={handleStartCheckout(console.log("Timer started"))}>Start Shopping</button>
      <button onClick={(handleCompleteCheckout) (console.log("Timer stopped"))}>Complete Checkout</button> */}
     
    </Container>
  );
};
